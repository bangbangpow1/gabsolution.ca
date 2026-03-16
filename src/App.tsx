import { useState, useEffect } from 'react'
import './App.css'

type Language = 'en' | 'fr'

const translations = {
  en: {
    status: 'SYSTEM ONLINE',
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Montreal\'s Premier IT Support & OS Solutions',
      subtitle: 'Specialized in Windows 11/10 & Linux (Ubuntu, Debian) installation, migration, and optimization. 24/7 Remote technical support for Montreal, West Island, and Laval.',
      cta: 'Initialize Support',
    },
    services: {
      title: 'Core Protocols',
      os: {
        id: 'SYS.INSTALL.01',
        title: 'OS Migration & Install',
        desc: 'Full system wipe and clean installation of Windows 11, 10, or Linux distributions (Ubuntu, Fedora, CentOS). Includes driver optimization, security hardening, and bloatware removal.',
      },
      remote: {
        id: 'NET.SUPPORT.02',
        title: 'Remote Diagnostics',
        desc: 'Instant remote desktop support for software crashes, virus removal, network configuration, and printer setup. Secure, encrypted connection for clients across Quebec.',
      },
    },
    about: {
      title: 'System Specs',
      content: 'Gabsolution is Montreal\'s trusted IT partner for home and small business. We provide enterprise-grade system administration, custom PC configuration, and reliable troubleshooting for complex OS issues.',
      specs: {
        location: 'Base: Montreal, QC',
        zones: 'Zones: West Island, Laval, South Shore',
        specialty: 'Spec: Windows 11 / Linux Customization',
        mission: 'Mission: Zero Downtime',
      },
      labels: {
        location: 'LOCATION',
        zones: 'COVERAGE',
        specialty: 'SPECIALTY',
        mission: 'PROTOCOL',
      }
    },
    contact: {
      title: 'Establish Uplink',
      message: 'Ready to optimize your infrastructure?',
      namePlaceholder: 'Enter Name',
      emailPlaceholder: 'Enter Email Address',
      messagePlaceholder: 'Command / Message',
      send: 'Execute',
    },
    footer: {
      rights: 'All systems normal.',
    }
  },
  fr: {
    status: 'SYSTÈME EN LIGNE',
    nav: {
      services: 'Services',
      about: 'À Propos',
      contact: 'Contact',
    },
    hero: {
      title: 'Support TI Expert et Solutions OS à Montréal',
      subtitle: 'Spécialistes en installation Windows 11/10 & Linux (Ubuntu, Debian). Support technique à distance 24/7 pour Montréal, West Island et Laval.',
      cta: 'Initialiser le Support',
    },
    services: {
      title: 'Protocoles Principaux',
      os: {
        id: 'SYS.INSTALL.01',
        title: 'Migration & Install OS',
        desc: 'Formatage complet et installation propre de Windows 11, 10 ou Linux (Ubuntu, Fedora). Inclut l\'optimisation des pilotes, la sécurisation du système et la suppression des logiciels inutiles.',
      },
      remote: {
        id: 'NET.SUPPORT.02',
        title: 'Diagnostic à Distance',
        desc: 'Assistance à distance immédiate pour pannes logicielles, suppression de virus, configuration réseau et imprimantes. Connexion sécurisée et cryptée partout au Québec.',
      },
    },
    about: {
      title: 'Spécifications Système',
      content: 'Gabsolution est votre partenaire TI de confiance à Montréal pour la maison et les PME. Nous offrons une administration système de niveau entreprise et un dépannage fiable pour les problèmes d\'OS complexes.',
      specs: {
        location: 'Base : Montréal, QC',
        zones: 'Zones : West Island, Laval, Rive-Sud',
        specialty: 'Spéc : Windows 11 / Linux Personnalisé',
        mission: 'Mission : Zéro Temps d\'Arrêt',
      },
      labels: {
        location: 'EMPLACEMENT',
        zones: 'COUVERTURE',
        specialty: 'SPÉCIALITÉ',
        mission: 'PROTOCOLE',
      }
    },
    contact: {
      title: 'Établir la Liaison',
      message: 'Prêt à optimiser votre infrastructure ?',
      namePlaceholder: 'Entrez Votre Nom',
      emailPlaceholder: 'Entrez Votre Courriel',
      messagePlaceholder: 'Commande / Message',
      send: 'Exécuter',
    },
    footer: {
      rights: 'Tous les systèmes normaux.',
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
          <div className="container hero-content">
            <div className="status-badge fade-in stagger-1">
              <span className="status-dot"></span>
              {t.status}
            </div>
            
            <img src="./Gabsolution-Final.png" alt="Gabsolution Full Logo" className="hero-logo fade-in stagger-2" />
            
            <h1 className="fade-in stagger-3">{t.hero.title}</h1>
            <p className="fade-in stagger-4">{t.hero.subtitle}</p>
            <a href="#contact" className="btn btn-primary fade-in stagger-4">{t.hero.cta}</a>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2>{t.services.title}</h2>
            <div className="services-grid">
              
              {/* Window Card 1 */}
              <div className="window-card">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">{t.services.os.id}</span>
                </div>
                <div className="window-body">
                  <div className="service-icon">💾</div>
                  <h3>{t.services.os.title}</h3>
                  <p>{t.services.os.desc}</p>
                </div>
              </div>

              {/* Window Card 2 */}
              <div className="window-card">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control close"></span>
                    <span className="control minimize"></span>
                    <span className="control maximize"></span>
                  </div>
                  <span className="window-title">{t.services.remote.id}</span>
                </div>
                <div className="window-body">
                  <div className="service-icon">📡</div>
                  <h3>{t.services.remote.title}</h3>
                  <p>{t.services.remote.desc}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2>{t.about.title}</h2>
            <div className="about-layout">
              <div className="about-text">
                <p>{t.about.content}</p>
                <a href="#contact" className="btn btn-outline">{t.nav.contact} &gt;</a>
              </div>
              
              <div className="specs-container">
                <div className="spec-row">
                  <span className="spec-label">{t.about.labels.location}</span>
                  <span className="spec-value">{t.about.specs.location}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">{t.about.labels.zones}</span>
                  <span className="spec-value">{t.about.specs.zones}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">{t.about.labels.specialty}</span>
                  <span className="spec-value">{t.about.specs.specialty}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">{t.about.labels.mission}</span>
                  <span className="spec-value">{t.about.specs.mission}</span>
                </div>
              </div>
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
                  <span className="input-label">ID</span>
                  <input className="form-input" type="text" name="name" placeholder={t.contact.namePlaceholder} required />
                </div>
                <div className="form-group">
                  <span className="input-label">@</span>
                  <input className="form-input" type="email" name="_replyto" placeholder={t.contact.emailPlaceholder} required />
                </div>
                <div className="form-group">
                  <span className="input-label">CMD</span>
                  <textarea className="form-input" name="message" placeholder={t.contact.messagePlaceholder} rows={5} required></textarea>
                </div>
                <input type="text" name="_gotcha" style={{display: 'none'}} />
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>{t.contact.send}</button>
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
