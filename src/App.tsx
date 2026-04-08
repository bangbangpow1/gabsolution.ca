import { useState, useEffect } from 'react'
import './App.css'

type Language = 'en' | 'fr'

const translations = {
  en: {
    status: 'SYSTEM OPERATIONAL',
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Expert OS Installation & System Administration',
      subtitle: 'Professional setup and optimization for Linux distributions and Windows 11. Secure, reliable IT infrastructure management for home and business.',
      cta: 'Get Started',
      secondary: 'Learn More',
    },
    services: {
      title: 'Our Expertise',
      linux: {
        title: 'Linux Installation',
        desc: 'Fresh install of any Linux distribution (Ubuntu, Debian, Fedora, Arch). Includes optimization and initial configuration tailored to your needs.',
        icon: '🐧',
      },
      windows: {
        title: 'Windows 11 Setup',
        desc: 'Fresh install of Windows 11. Optimized for performance, debloated of unnecessary software, and hardened for security.',
        icon: '🪟',
      },
      sysadmin: {
        title: 'System Administration',
        desc: 'Professional management of servers, networks, and IT infrastructure. Security auditing and ongoing technical support.',
        icon: '🛠️',
      },
    },
    about: {
      title: 'Beyond Support',
      content: 'Gabsolution provides enterprise-grade IT solutions with a focus on efficiency and security. We specialize in transforming complex technical requirements into seamless, high-performance environments.',
      specs: {
        location: 'Montreal, QC',
        coverage: 'Greater Montreal Area',
        specialty: 'OS Optimization',
        mission: 'Reliability First',
      },
      labels: {
        location: 'LOCATION',
        coverage: 'COVERAGE',
        specialty: 'SPECIALTY',
        mission: 'PHILOSOPHY',
      }
    },
    contact: {
      title: 'Let\'s Connect',
      message: 'Ready to optimize your systems? Send a message to start the conversation.',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      messageLabel: 'How can we help?',
      send: 'Send Message',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
  fr: {
    status: 'SYSTÈME OPÉRATIONNEL',
    nav: {
      services: 'Services',
      about: 'À Propos',
      contact: 'Contact',
    },
    hero: {
      title: 'Installation OS Expert et Administration Système',
      subtitle: 'Installation et optimisation professionnelle pour Linux et Windows 11. Gestion d\'infrastructure TI sécurisée pour particuliers et entreprises.',
      cta: 'Commencer',
      secondary: 'En Savoir Plus',
    },
    services: {
      title: 'Notre Expertise',
      linux: {
        title: 'Installation Linux',
        desc: 'Nouvelle installation de n\'importe quelle distribution Linux (Ubuntu, Debian, Fedora, Arch). Inclut l\'optimisation et la configuration initiale.',
        icon: '🐧',
      },
      windows: {
        title: 'Installation Windows 11',
        desc: 'Nouvelle installation de Windows 11. Optimisé pour la performance, débarrassé des logiciels inutiles et sécurisé.',
        icon: '🪟',
      },
      sysadmin: {
        title: 'Administration Système',
        desc: 'Gestion professionnelle de serveurs, réseaux et infrastructures TI. Audit de sécurité et support technique continu.',
        icon: '🛠️',
      },
    },
    about: {
      title: 'Au-delà du Support',
      content: 'Gabsolution offre des solutions TI de niveau entreprise axées sur l\'efficacité et la sécurité. Nous transformons vos besoins techniques complexes en environnements fluides et performants.',
      specs: {
        location: 'Montréal, QC',
        coverage: 'Grand Montréal',
        specialty: 'Optimisation OS',
        mission: 'Fiabilité Avant Tout',
      },
      labels: {
        location: 'EMPLACEMENT',
        coverage: 'COUVERTURE',
        specialty: 'SPÉCIALITÉ',
        mission: 'PHILOSOPHIE',
      }
    },
    contact: {
      title: 'Contactez-nous',
      message: 'Prêt à optimiser vos systèmes ? Envoyez un message pour commencer la discussion.',
      nameLabel: 'Votre Nom',
      emailLabel: 'Adresse Courriel',
      messageLabel: 'Comment pouvons-nous aider ?',
      send: 'Envoyer le Message',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang]

  useEffect(() => {
    document.title = `Gabsolution - ${lang === 'en' ? 'OS Architect' : 'Architecte OS'}`
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
      <header className="header">
        <div className="container header-content">
          <div className="logo-area">
            <img src="./Gabsolution-Final_Single-Logo.png" alt="Gabsolution Logo" className="header-icon" />
            <span className="brand-name">GABSOLUTION</span>
          </div>
          <nav className="nav">
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <div className="menu-icon"></div>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
        <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
        <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
        <button className="lang-toggle" onClick={() => { toggleLang(); closeMenu(); }}>
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>

      <main>
        <section className="hero">
          <div className="container">
            <div className="status-badge fade-in stagger-1">
              <span className="status-dot"></span>
              {t.status}
            </div>
            <h1 className="fade-in stagger-2">{t.hero.title}</h1>
            <p className="fade-in stagger-3">{t.hero.subtitle}</p>
            <div className="hero-actions fade-in stagger-4">
              <a href="#contact" className="btn btn-primary">{t.hero.cta}</a>
              <a href="#services" className="btn btn-outline">{t.hero.secondary}</a>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2 className="fade-in">{t.services.title}</h2>
            <div className="services-grid">
              
              <div className="service-card fade-in stagger-1">
                <div className="service-icon-wrapper">
                  {t.services.linux.icon}
                </div>
                <div>
                  <h3>{t.services.linux.title}</h3>
                  <p>{t.services.linux.desc}</p>
                </div>
              </div>

              <div className="service-card fade-in stagger-2">
                <div className="service-icon-wrapper">
                  {t.services.windows.icon}
                </div>
                <div>
                  <h3>{t.services.windows.title}</h3>
                  <p>{t.services.windows.desc}</p>
                </div>
              </div>

              <div className="service-card fade-in stagger-3">
                <div className="service-icon-wrapper">
                  {t.services.sysadmin.icon}
                </div>
                <div>
                  <h3>{t.services.sysadmin.title}</h3>
                  <p>{t.services.sysadmin.desc}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2 className="fade-in">{t.about.title}</h2>
            <div className="about-layout">
              <div className="about-text fade-in">
                <p>{t.about.content}</p>
                <a href="#contact" className="btn btn-outline">{t.nav.contact}</a>
              </div>
              
              <div className="specs-grid fade-in stagger-2">
                <div className="spec-item">
                  <span className="spec-label">{t.about.labels.location}</span>
                  <span className="spec-value">{t.about.specs.location}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">{t.about.labels.coverage}</span>
                  <span className="spec-value">{t.about.specs.coverage}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">{t.about.labels.specialty}</span>
                  <span className="spec-value">{t.about.specs.specialty}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">{t.about.labels.mission}</span>
                  <span className="spec-value">{t.about.specs.mission}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info fade-in">
                <h2>{t.contact.title}</h2>
                <p>{t.contact.message}</p>
              </div>
              
              <div className="contact-form-container fade-in stagger-2">
                <form 
                  action="https://formspree.io/f/myknnyqj" 
                  method="POST"
                  className="contact-form"
                >
                  <div className="form-field">
                    <label className="form-label">{t.contact.nameLabel}</label>
                    <input className="form-input" type="text" name="name" required />
                  </div>
                  <div className="form-field">
                    <label className="form-label">{t.contact.emailLabel}</label>
                    <input className="form-input" type="email" name="_replyto" required />
                  </div>
                  <div className="form-field">
                    <label className="form-label">{t.contact.messageLabel}</label>
                    <textarea className="form-input" name="message" rows={5} required></textarea>
                  </div>
                  <input type="text" name="_gotcha" style={{display: 'none'}} />
                  <button type="submit" className="btn btn-primary" style={{width: '100%'}}>{t.contact.send}</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="logo-area">
            <img src="./Gabsolution-Final_Single-Logo.png" alt="Gabsolution Logo" className="header-icon" />
            <span className="brand-name">GABSOLUTION</span>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Gabsolution. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
