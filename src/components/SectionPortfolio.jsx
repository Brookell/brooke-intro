import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

const works = [
  { 
    title: "Her Gaze", 
    meta: "Vibecoding / Cinema", 
    desc: "A breathtaking feminist editorial cinema platform exploring visual theories, reclaiming the gaze, and curating deep film criticism through a stunning minimalist grid.",
    image: "/portfolio/hergaze.png",
    fallbackImage: "/portfolio/hergaze.svg",
    date: "May 10, 2026",
    path: "https://brookell.github.io/her-gaze/",
    displayUrl: "https://brookell.github.io/her-gaze/",
    deviceType: "browser",
    details: {
      motivation: "hergaze was created to challenge the historically dominant male gaze in traditional cinema culture. The goal was to build a digital pocket sanctuary that merges visual editorial excellence with deep, rigorous, text-based feminist film criticism. It serves as an archive of reclamation, putting female and queer directors at the forefront of digital history.",
      stack: ["React", "Vite", "Framer Motion", "CSS Grid & Flexbox", "Google Fonts (Outfit, Inter)"],
      methods: "Implemented a high-contrast editorial grid layout inspired by premium print fashion magazines. Utilized Framer Motion for scroll-linked typography scaling and rich animations. Integrated responsive media assets with smooth fallback mechanisms to ensure instant, immersive visual load times."
    }
  },
  { 
    title: "Catpuccino", 
    meta: "Vibecoding / Web App", 
    desc: "A playful, tactile hydration logger for cats, crafted with beautiful fluid-physics animations, adorable micro-interactions, and visual health insights.",
    image: "/portfolio/catpuccino.png",
    fallbackImage: "/portfolio/kitty-drink.svg",
    date: "May 15, 2026",
    path: "https://brookell.github.io/cat-pu-c-ci-no/",
    displayUrl: "https://brookell.github.io/cat-pu-c-ci-no/",
    deviceType: "phone",
    details: {
      motivation: "Cats are notoriously poor drinkers, often leading to renal concerns later in life. Catpuccino was designed as a gamified, beautiful hydration diary to make tracking water logging a daily joy for cat parents, blending strict pet health monitoring with cute, cozy, and ultra-tactile digital interfaces.",
      stack: ["HTML5 Canvas API", "Vanilla JavaScript", "CSS Liquid Shader Effects", "LocalStorage", "Web Audio API"],
      methods: "Built a custom HTML5 canvas liquid rendering engine with custom shaders that animate water waves based on logged milliliters. Programmed highly responsive micro-interactions (dragging physical water drops) and integrated delightful auditory Purr feedback on successful logs."
    }
  },
  { 
    title: "Virginia Woolf Space", 
    meta: "Vibecoding / Literature", 
    desc: "An immersive stream-of-consciousness web experience celebrating Virginia Woolf's literary legacy, centering around the philosophy 'I am rooted, but I flow.'",
    image: "/portfolio/virginia-woolf.png",
    fallbackImage: "/portfolio/virginia-woolf.svg",
    date: "May 20, 2026",
    path: "https://brookell.github.io/love-letters-space/",
    displayUrl: "https://brookell.github.io/love-letters-space/",
    deviceType: "browser",
    details: {
      motivation: "Inspired by Virginia Woolf's classic stream-of-consciousness novel 'The Waves' and her historic correspondence with Vita Sackville-West. Created to translate the fluid, poetic movement of Woolf's prose into an immersive, spatial web playground that bridges literature, philosophy, and creative code.",
      stack: ["React", "Three.js (WebGL)", "GSAP (GreenSock)", "Custom Web Audio API", "Google Fonts (Playfair Display)"],
      methods: "Programmed an interactive 3D WebGL star constellation field using Three.js, mapping individual stars to actual letters exchanged. Implemented seamless horizontal scrolling powered by GSAP scroll-triggers to evoke the physical flow of a river, accompanied by a curated ambient audio player."
    }
  },
  { 
    title: "Cosmic Vinyl", 
    meta: "Vibecoding / Music", 
    desc: "A gesture-controlled 3D audio gallery integrating MediaPipe hand tracking, Three.js spatial canvas, and the Web Audio API for an immersive vinyl browsing experience.",
    image: "/portfolio/cosmic-vinyl.png",
    fallbackImage: "/portfolio/cosmic-vinyl.svg",
    date: "May 24, 2026",
    path: "https://brookell.github.io/cosmic-vinyl/",
    displayUrl: "https://brookell.github.io/cosmic-vinyl/",
    deviceType: "browser",
    details: {
      motivation: "Designed to explore natural, contact-free user interfaces in spatial music browsing. Cosmic Vinyl recreates the physical feel of flipping through vinyl records in a crate, translated into an interactive 3D particle field controlled by simple hand gestures.",
      stack: ["Three.js", "MediaPipe Hands", "Web Audio API", "Vanilla JavaScript", "CSS Glassmorphism"],
      methods: "Engineered a custom 3D carousel loop with dynamic particle field lighting. Programmed hand gesture recognitions (Open Palm to fast-swipe, Digit One to slow-swipe, Fist to select/zoom). Integrated real-time spatial audio panning and automated online song search."
    }
  }
]

// Custom Sub-component for Bento Grid Case Study Details
function ProjectDetails({ project, device }) {
  return (
    <div className={`details-view-container ${device}-details`}>
      <div className="details-hero">
        <span className="details-tag">{project.meta}</span>
        <h2 className="details-title">{project.title}</h2>
      </div>

      <div className="details-grid">
        <div className="details-card">
          <h3>🌱 Motivation & Background</h3>
          <p>{project.details.motivation}</p>
        </div>

        <div className="details-card">
          <h3>🛠️ Stack & Technologies</h3>
          <div className="stack-tags">
            {project.details.stack.map(tech => (
              <span key={tech} className="stack-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="details-card full-width">
          <h3>⚡ Methods & Key Features</h3>
          <p>{project.details.methods}</p>
        </div>
      </div>
    </div>
  )
}

export default function SectionPortfolio() {
  const [activeProject, setActiveProject] = useState(null)
  const [modalTab, setModalTab] = useState('preview') // 'preview' or 'details'

  return (
    <section id="portfolio" className="section portfolio-section-container" style={{ background: 'transparent' }}>
      {/* Dynamic atmospheric auras */}
      <div className="aura-blob aura-blue" style={{ top: '30%', left: '-10%', opacity: 0.08, width: '450px', height: '450px' }} />
      <div className="aura-blob aura-pink" style={{ bottom: '15%', right: '-10%', opacity: 0.06, width: '500px', height: '500px' }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="label-mono">03 — Portfolio</span>
          <h2 className="title-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '40px' }}>
            SELECTED WORK
          </h2>
          
          <div className="portfolio-card-grid">
            {works.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="portfolio-premium-card"
                onClick={() => {
                  setActiveProject(work);
                  setModalTab('preview');
                }}
              >
                <div className="portfolio-premium-card-image-wrapper">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="portfolio-premium-card-image"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop if fallback fails
                      e.target.src = work.fallbackImage;
                    }}
                  />
                </div>
                
                <div className="portfolio-premium-card-content">
                  <div className="portfolio-premium-card-meta-row">
                    <span className="portfolio-premium-card-tag">{work.meta}</span>
                  </div>
                  
                  <h3 className="portfolio-premium-card-title">
                    {work.title}
                  </h3>
                  
                  <p className="portfolio-premium-card-desc">
                    {work.desc}
                  </p>

                  {/* Dual Action Buttons Row */}
                  <div className="portfolio-card-actions">
                    <button 
                      className="portfolio-action-btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(work);
                        setModalTab('details');
                      }}
                    >
                      Details
                    </button>
                    <button 
                      className="portfolio-action-btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(work);
                        setModalTab('preview');
                      }}
                    >
                      Live
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Mockup Modal Frame */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="portfolio-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className={`portfolio-modal-container device-${activeProject.deviceType}`}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeProject.deviceType === 'phone' ? (
                /* 📱 MOBILE APP DEVICE MOCKUP FRAME */
                <div className="phone-device-wrapper">
                  {/* Floating App Info Board next to Phone on Desktop */}
                  <div className="phone-info-overlay">
                    <div className="phone-info-title-area">
                      <span className="phone-info-meta">{activeProject.meta}</span>
                      <h3 className="phone-info-title">{activeProject.title}</h3>
                      <span className="phone-info-url">{activeProject.displayUrl}</span>
                    </div>

                    {/* Mobile App Info Board Segmented Control */}
                    <div className="phone-segmented-control-wrapper">
                      <div className="phone-segmented-control">
                        <button 
                          className={`segmented-btn ${modalTab === 'preview' ? 'active' : ''}`}
                          onClick={() => setModalTab('preview')}
                        >
                          Live App
                        </button>
                        <button 
                          className={`segmented-btn ${modalTab === 'details' ? 'active' : ''}`}
                          onClick={() => setModalTab('details')}
                        >
                          Case Study
                        </button>
                      </div>
                    </div>

                    <div className="phone-info-actions">
                      <a 
                        href={activeProject.path} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="phone-action-btn"
                        title="Open in new tab"
                      >
                        <ExternalLink size={18} />
                        <span>Open App</span>
                      </a>
                      <button 
                        className="phone-close-btn" 
                        onClick={() => setActiveProject(null)}
                        title="Close"
                      >
                        <X size={18} />
                        <span>Close</span>
                      </button>
                    </div>
                  </div>

                  {/* Physical phone container */}
                  <div className="phone-device-frame">
                    
                    {/* Volume buttons */}
                    <div className="phone-side-button phone-vol-up"></div>
                    <div className="phone-side-button phone-vol-down"></div>
                    <div className="phone-side-button phone-power"></div>
                    
                    {/* Screen wrapper */}
                    <div className="phone-screen">
                      {modalTab === 'preview' ? (
                        <iframe 
                          src={activeProject.path} 
                          title={activeProject.title}
                          className="portfolio-modal-iframe"
                        />
                      ) : (
                        <ProjectDetails project={activeProject} device="phone" />
                      )}
                    </div>
                    
                    {/* Home swipe indicator bar */}
                    <div className="phone-home-bar"></div>
                  </div>
                </div>
              ) : (
                /* 💻 DESKTOP BROWSER WINDOW MOCKUP FRAME */
                <div className="browser-device-wrapper">
                  {/* Mockup Header Bar (matching reference image) */}
                  <div className="browser-mockup-header">
                    {/* macOS Traffic lights */}
                    <div className="browser-traffic-lights">
                      <button className="dot red" onClick={() => setActiveProject(null)} title="Close"></button>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>

                    {/* Integrated Browser Mockup Tabs */}
                    <div className="browser-mockup-tabs">
                      <button 
                        className={`browser-tab ${modalTab === 'preview' ? 'active' : ''}`}
                        onClick={() => setModalTab('preview')}
                      >
                        <span className="tab-icon">🌐</span>
                        <span className="tab-title">Interactive Live</span>
                      </button>
                      <button 
                        className={`browser-tab ${modalTab === 'details' ? 'active' : ''}`}
                        onClick={() => setModalTab('details')}
                      >
                        <span className="tab-icon">📖</span>
                        <span className="tab-title">Case Study</span>
                      </button>
                    </div>
                    
                    {/* Address bar capsule */}
                    <div className="browser-address-bar">
                      <span className="address-bar-text">
                        {modalTab === 'preview' ? activeProject.displayUrl : `${activeProject.displayUrl}#case-study`}
                      </span>
                    </div>
                    
                    {/* Actions and Close on the right */}
                    <div className="browser-header-actions">
                      <a 
                        href={activeProject.path} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="browser-action-btn"
                        title="Open in new tab"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <button 
                        className="browser-close-btn" 
                        onClick={() => setActiveProject(null)}
                        title="Close"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Browser Screen */}
                  <div className="browser-screen">
                    {modalTab === 'preview' ? (
                      <iframe 
                        src={activeProject.path} 
                        title={activeProject.title}
                        className="portfolio-modal-iframe"
                      />
                    ) : (
                      <ProjectDetails project={activeProject} device="browser" />
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
