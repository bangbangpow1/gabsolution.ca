import { useState, useEffect } from 'react'
import './App.css'

type Language = 'en' | 'fr'

const translations = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Expert IT Support & OS Solutions in Montreal',
      subtitle: 'Professional Windows and Linux installation, configuration, and reliable remote support services in Montreal, Quebec.',
      cta: 'Get Support Now',
    },
    services: {
      title: 'Expert IT Services',
      os: {
        title: 'OS Installation & Migration',
        desc: 'Clean installation and configuration of Windows (10/11) or Linux distributions (Ubuntu, Debian, CentOS, Fedora). We ensure your system is optimized for peak performance and security.',
      },
      remote: {
        title: '24/7 Remote Technical Support',
        desc: 'Secure and fast remote troubleshooting for software errors, driver issues, network configuration, and system maintenance. Expert assistance across the Island of Montreal.',
      },
    },
    about: {
      title: 'About Gabsolution',
      content: 'Based in Montreal, Gabsolution is dedicated to providing reliable IT support and system installation services. We specialize in Windows 11 upgrades and custom Linux environments for both personal and business needs.',
      location: 'Serving the Greater Montreal Area (West Island, Laval, South Shore).',
    },
    contact: {
      title: 'Contact Us',
      message: 'Ready to solve your IT problems?',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'How can we help?',
      send: 'Send Message',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
  fr: {
    nav: {
      services: 'Services',
      about: 'À Propos',
      contact: 'Contact',
    },
    hero: {
      title: 'Support TI Expert et Solutions d\'OS à Montréal',
      subtitle: 'Installation professionnelle de Windows et Linux, configuration et services de support à distance fiables à Montréal, Québec.',
      cta: 'Obtenir du Support',
    },
    services: {
      title: 'Services TI Experts',
      os: {
        title: 'Installation et Migration d\'OS',
        desc: 'Installation propre et configuration de Windows (10/11) ou des distributions Linux (Ubuntu, Debian, CentOS, Fedora). Nous optimisons votre système pour la performance et la sécurité.',
      },
      remote: {
        title: 'Support Technique à Distance 24/7',
        desc: 'Dépannage à distance sécurisé pour les erreurs logicielles, pilotes, configuration réseau et maintenance. Assistance experte partout à Montréal.',
      },
    },
    about: {
      title: 'À Propos de Gabsolution',
      content: 'Basé à Montréal, Gabsolution se consacre à fournir un support informatique fiable et des services d\'installation de systèmes. Nous nous spécialisons dans les mises à niveau Windows 11 et les environnements Linux personnalisés.',
      location: 'Desservant la grande région de Montréal (West Island, Laval, Rive-Sud).',
    },
    contact: {
      title: 'Contactez-nous',
      message: 'Prêt à résoudre vos problèmes informatiques ?',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Votre Courriel',
      messagePlaceholder: 'Comment pouvons-nous vous aider ?',
      send: 'Envoyer le message',
    },
    footer: {
      rights: 'Tous droits réservés.',
    }
  }
}

function App() {
  const [lang, setLang] = useState<Language>(() => {
    const browserLang = navigator.language || 'fr';
    return browserLang.startsWith('en') ? 'en' : 'fr';
  })
  const t = translations[lang]

  useEffect(() => {
    document.title = `Gabsolution - ${lang === 'en' ? 'Expert IT Services Montreal' : 'Services TI Experts Montréal'}`
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <div className="logo-area">
            <img src="./Gabsolution-Final_Single-Logo.png" alt="Gabsolution Icon" className="header-icon" />
            <span className="brand-name">Gabsolution</span>
          </div>
          <nav className="nav">
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <img src="./Gabsolution-Final.png" alt="Gabsolution Full Logo" className="hero-logo fade-in" />
            <h1 className="fade-in">{t.hero.title}</h1>
            <p className="fade-in">{t.hero.subtitle}</p>
            <a href="#contact" className="btn btn-primary fade-in">{t.hero.cta}</a>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2>{t.services.title}</h2>
            <div className="services-grid">
              <div className="service-card shadow">
                <div className="service-icon">💻</div>
                <h3>{t.services.os.title}</h3>
                <p>{t.services.os.desc}</p>
              </div>
              <div className="service-card shadow">
                <div className="service-icon">🌐</div>
                <h3>{t.services.remote.title}</h3>
                <p>{t.services.remote.desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2>{t.about.title}</h2>
            <div className="about-content">
              <p>{t.about.content}</p>
              <p className="location">📍 {t.about.location}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>{t.contact.title}</h2>
            <div className="contact-container">
              <p className="contact-subtitle">{t.contact.message}</p>
              <form 
                action="https://formspree.io/f/myknnyqj" 
                method="POST"
                className="contact-form"
              >
                <div className="form-group">
                  <input type="text" name="name" placeholder={t.contact.namePlaceholder} required />
                </div>
                <div className="form-group">
                  <input type="email" name="_replyto" placeholder={t.contact.emailPlaceholder} required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder={t.contact.messagePlaceholder} rows={5} required></textarea>
                </div>
                <input type="text" name="_gotcha" style={{display: 'none'}} />
                <button type="submit" className="btn btn-primary">{t.contact.send}</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gabsolution. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
