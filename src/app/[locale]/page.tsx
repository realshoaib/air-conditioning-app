import { getDictionary } from '@/dictionaries';
import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container navbar-content">
                    <div className="logo">{dict.hero.title}</div>
                    <div className="nav-links">
                        <a href="#hero" className="nav-link">{dict.nav.home}</a>
                        <a href="#services" className="nav-link">{dict.nav.services}</a>
                        <a href="#about" className="nav-link">{dict.nav.about}</a>
                        <Link href={locale === 'en' ? '/ar' : '/en'} className="lang-toggle">
                            {locale === 'en' ? 'العربية' : 'English'}
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section id="hero" className="hero">
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div className="hero-content" style={{ flex: '1', minWidth: '300px', textAlign: locale === 'ar' ? 'right' : 'left', margin: 0 }}>
                        <h1 className="hero-title">{dict.hero.title}</h1>
                        <p className="hero-subtitle">{dict.hero.subtitle}</p>
                        <a href="https://wa.me/966596251825" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{dict.hero.cta}</a>
                    </div>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        {/* Using standard img for simplicity without domain configuration issues */}
                        <img src="/hero_ac_minimal.png" alt="Premium Air Conditioning" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover', height: '500px' }} />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="section section-light">
                <div className="container">
                    <h2 className="title">{dict.services.title}</h2>
                    <div className="grid-cards">
                        {dict.services.items.map((item: any, i: number) => (
                            <div key={i} className="card">
                                <div className="card-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section">
                <div className="container">
                    <h2 className="title">{dict.about.title}</h2>
                    <div className="grid-cards">
                        {dict.about.features.map((feature: any, i: number) => (
                            <div key={i} className="card" style={{ borderColor: 'transparent', boxShadow: 'none' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h3 className="card-title">{feature.title}</h3>
                                <p className="card-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact */}
            <section id="contact" className="section cta-section">
                <div className="container">
                    <h2 className="title" style={{ color: 'white', marginBottom: '2rem' }}>{dict.cta.title}</h2>
                    <a href="https://wa.me/966596251825" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#fff', color: '#1e3a8a' }}>
                        {dict.cta.button}
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>{dict.footer.rights}</p>
                </div>
            </footer>

            {/* WhatsApp Floating Button */}
            <a href="https://wa.me/966596251825" className="floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 32 32" width="35" height="35" fill="currentColor">
                    <path d="M16 2a14 14 0 0 0-11.8 21.6L2 30l6.6-2.1A14 14 0 1 0 16 2zm0 25.5c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.8 1.5 1.5-4.7-.3-.5A11.5 11.5 0 1 1 16 27.5zM11.6 9c-.2-.5-.5-.5-.8-.5H10c-.3 0-.7.1-1 .5s-1.4 1.3-1.4 3.2 1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.8 6 1 .4 1.7.7 2.3.9.9.3 1.8.2 2.5.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5s-2.2-1-2.5-1.2c-.3-.2-.6-.3-.8.1-.3.4-1 1.2-1.2 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.8-1.1-.9-1.9-2-2.1-2.4-.2-.4 0-.6.1-.8.2-.2.4-.4.5-.6.2-.2.3-.4.4-.6s.1-.4 0-.6c-.1-.2-.8-2-.1-2.8z" />
                </svg>
            </a>
        </main>
    );
}
