import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { smoothScrollTo } from './utils/scroll'
import Background from './components/Background'
import SectionAbout from './components/SectionAbout'
import SectionFramework from './components/SectionFramework'
import SectionExperience from './components/SectionExperience'
import SectionPortfolio from './components/SectionPortfolio'
import SectionContact from './components/SectionContact'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'framework', label: 'Pillars' },
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
      const sections = ['home', 'about', 'experience', 'portfolio', 'framework', 'footer']
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
          
          {/* 3D Interaction Hint (Tooltip on Hover) */}
          <div className="three-interaction-hint">
            <span className="hint-icon">✦</span>
            <div className="tooltip-text">
              Pinch to zoom, Three-finger rotate
            </div>
          </div>

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
        
        <SectionContact />

      </div>
    </div>
  )
}

export default App
