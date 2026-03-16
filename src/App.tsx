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
      title: 'Your IT Solution in Montreal',
      subtitle: 'Professional OS Installation and Remote Support for Windows & Linux.',
      cta: 'Get Support Now',
    },
    services: {
      title: 'Our Services',
      os: {
        title: 'OS Installation',
        desc: 'Clean installation of Windows or Linux (Ubuntu, Debian, Fedora, etc.). We ensure your system is up-to-date and optimized.',
      },
      remote: {
        title: 'Remote Support',
        desc: 'Quick and secure remote troubleshooting for software issues, configuration, and maintenance.',
      },
    },
    about: {
      title: 'About Gabsolution',
      content: 'Based in Montreal, Gabsolution is dedicated to providing reliable IT support and system installation services. Whether you need a fresh start with a new OS or expert remote assistance, we are here to help.',
      location: 'Proudly serving Montreal and beyond.',
    },
    contact: {
      title: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      message: 'Ready to solve your IT problems?',
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
      title: 'Votre Solution TI à Montréal',
      subtitle: 'Installation de systèmes d\'exploitation et support à distance pour Windows et Linux.',
      cta: 'Obtenir du Support',
    },
    services: {
      title: 'Nos Services',
      os: {
        title: 'Installation d\'OS',
        desc: 'Installation propre de Windows ou Linux (Ubuntu, Debian, Fedora, etc.). Nous nous assurons que votre système est à jour et optimisé.',
      },
      remote: {
        title: 'Support à Distance',
        desc: 'Dépannage à distance rapide et sécurisé pour les problèmes logiciels, la configuration et la maintenance.',
      },
    },
    about: {
      title: 'À Propos de Gabsolution',
      content: 'Basé à Montréal, Gabsolution se consacre à fournir un support informatique fiable et des services d\'installation de systèmes. Que vous ayez besoin d\'un nouveau départ avec un OS frais ou d\'une assistance à distance experte, nous sommes là pour vous aider.',
      location: 'Fièrement au service de Montréal et des environs.',
    },
    contact: {
      title: 'Contactez-nous',
      email: 'Courriel',
      phone: 'Téléphone',
      message: 'Prêt à résoudre vos problèmes informatiques ?',
    },
    footer: {
      rights: 'Tous droits réservés.',
    }
  }
}

function App() {
  const [lang, setLang] = useState<Language>('fr')
  const t = translations[lang]

  useEffect(() => {
    document.title = `Gabsolution - ${lang === 'en' ? 'IT Services' : 'Services Informatiques'}`
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
            <div className="contact-info">
              <p>{t.contact.message}</p>
              <div className="contact-links">
                <a href="mailto:info@gabsolution.ca" className="btn btn-outline">Email: info@gabsolution.ca</a>
              </div>
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
