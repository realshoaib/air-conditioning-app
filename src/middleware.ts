import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ar'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files and api routes from locale redirect
  if (
    pathname.includes('.') || 
    pathname.startsWith('/api/') || 
    pathname.startsWith('/_next/')
  ) {
    return;
  }
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Default to Arabic
  request.nextUrl.pathname = `/ar${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
};
