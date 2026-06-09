import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { smoothScrollTo } from './utils/scroll'
import Background from './components/Background'
import SectionAbout from './components/SectionAbout'
import SectionFramework from './components/SectionFramework'
import SectionExperience from './components/SectionExperience'
import SectionPortfolio from './components/SectionPortfolio'
import SectionGallery from './components/SectionGallery'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'framework', label: 'Pillars' },
  { id: 'skills', label: 'Skills' },
  { id: 'footer', label: 'Contact' }
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'portfolio', 'framework', 'skills', 'footer']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-wrapper">
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      
      <nav className="nav-fixed">
        <div className="nav-inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo(item.id, 1200, 70)
                setActiveSection(item.id)
              }}
            >
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="content-layers">
        
        <section id="home" className="section hero-section">
          <Background />
          <div className="container hero-container">
            <motion.h1 
              className="title-display"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.35,
                    delayChildren: 1.0
                  }
                }
              }}
              initial="initial"
              animate="animate"
            >
              <motion.span
                className="gradient-text"
                variants={{
                  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
                  animate: { 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                HELLO,
              </motion.span>
              <motion.span
                className="gradient-text"
                variants={{
                  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
                  animate: { 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                I AM
              </motion.span>
              <motion.span
                className="gradient-text"
                variants={{
                  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
                  animate: { 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                BROOKE
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-serif" 
              style={{ marginTop: '20px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 2.3, duration: 1.5 }}
            >
              "I am rooted, but I flow."
            </motion.p>
            <motion.p
              className="quote-source"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 2.8, duration: 1.5 }}
            >
              ― Virginia Woolf, <em>The Waves</em>
            </motion.p>
          </div>

          <div 
            className="scroll-indicator-down hero-scroll-indicator" 
            onClick={() => smoothScrollTo('about', 1200, 70)}
          >
            <div className="scroll-arrow-icon-wrapper">
              <ChevronDown size={20} strokeWidth={1.5} />
            </div>
          </div>
        </section>

        <SectionAbout />

        <SectionExperience />

        <SectionPortfolio />

        <SectionFramework />

        <SectionGallery />
        
        <footer id="footer" className="contact-premium-footer">
          {/* Top Half: White Card Envelope */}
          <div className="contact-envelope-card">
            <div className="contact-envelope-header">
              <span className="envelope-tag">(Creative)</span>
              <span className="envelope-tag">(2024-2026)</span>
              <span className="envelope-tag">(Design & Strategy)</span>
            </div>

            <div className="contact-envelope-body">
              <h2 className="thank-you-title">Thank You</h2>
              
              <div className="envelope-banners">
                <div className="banner-blue">Looking Forward to</div>
                <div className="banner-black">Connect with You!</div>
              </div>
            </div>

            {/* Tactile Button & String Closure Tie */}
            <div className="string-closure-container">
              <div className="closure-button top-button">
                <div className="eyelet"></div>
              </div>
              
              <svg className="closure-thread" width="40" height="110" viewBox="0 0 40 110" fill="none">
                <path d="M20 15 L20 95 M20 15 L32 55 L20 95 M20 15 L8 55 L20 95" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
              </svg>

              <div className="closure-button bottom-button">
                <div className="eyelet"></div>
              </div>
            </div>
          </div>

          {/* Bottom Half: Slate Dark Info Area */}
          <div className="contact-dark-info">
            <div className="container contact-info-grid">
              
              {/* Left Column: Connections */}
              <div className="contact-info-left">
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <a href="mailto:brookel0619@163.com" className="info-link email-link">
                    brookel0619@163.com
                  </a>
                </div>

                <div className="info-item" style={{ marginTop: '30px' }}>
                  <span className="info-label">Social Connections</span>
                  <div className="info-links-list">
                    <a href="https://www.linkedin.com/in/brooke-liao0619/" target="_blank" rel="noopener noreferrer" className="social-sublink">
                      linkedin.com/in/brooke-liao0619
                    </a>
                    <a href="https://github.com/Brookell" target="_blank" rel="noopener noreferrer" className="social-sublink">
                      github.com/Brookell
                    </a>
                    <span className="social-sublink-static">
                      wechat: brookel0619
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Signature & Copys */}
              <div className="contact-info-right">
                <div className="signature-wrapper">
                  <span className="info-label regards-label">Warm Regards,</span>
                  
                  {/* Custom Autograph Signature of "Brooke" */}
                  <svg className="autograph-svg" width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 60 C32 30, 42 20, 52 50 C55 60, 58 70, 64 60 C72 45, 82 40, 88 55 C90 60, 96 60, 100 52 C108 40, 115 40, 120 55 C122 60, 128 58, 132 52 C138 38, 150 45, 160 60" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45 55 Q95 55 165 62" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                    <text x="35" y="85" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" letterSpacing="3" fontWeight="600" opacity="0.9">BROOKE</text>
                  </svg>
                </div>

                <div className="footer-copyright">
                  © 2026 BROOKE. DESIGNED FOR THE BOLD & FLOWING.
                </div>
              </div>

            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App
