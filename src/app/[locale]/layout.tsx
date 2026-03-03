import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
    title: 'شباك بيان لتكييف | Bayan Window AC',
    description: 'Premium Air Conditioning Maintenance & Installation',
};

export async function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const fontClass = locale === 'ar' ? cairo.variable : inter.variable;

    return (
        <html lang={locale} dir={dir}>
            <body className={`${fontClass}`}>
                {children}
            </body>
        </html>
    );
}
