import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ExternalLink, Film, BookOpen, Music, Coffee, Activity, Sparkles, Globe, FileText, MoreHorizontal } from 'lucide-react'
import RotatingText from './RotatingText'

const works = [
  { 
    title: "Her Gaze", 
    meta: "Vibecoding / Cinema", 
    category: "film",
    desc: "A feminist editorial cinema platform exploring visual theories and reclaiming the gaze through a stunning minimalist digital experience.",
    image: "/portfolio/hergaze.png",
    fallbackImage: "/portfolio/hergaze.svg",
    date: "May 10, 2026",
    path: "https://brookell.github.io/her-gaze/",
    displayUrl: "https://brookell.github.io/her-gaze/",
    deviceType: "browser",
    screenshots: [
      "/portfolio/hergaze.png",
      "/portfolio/hergaze1.png",
      "/portfolio/hergaze2.png"
    ],
    details: {
      subtitle: "A cinema of her own.",
      motivation: "Her Gaze started from a question: who gets to look, and who gets to be seen? I wanted to create a quiet digital archive that challenges the historically dominant male gaze in cinema and celebrates women behind and in front of the camera.",
      exploring: "I explored a dark, cinematic interface that uses contrast, silence, and spacing to create a gallery-like reading experience. The goal was to make every image and sentence feel intentional.",
      exploringFeatures: [
        { icon: "✦", label: "Slow Browsing", desc: "Encouraging reflection, not mindless scrolling." },
        { icon: "✦", label: "Editorial Rhythm", desc: "Inspired by print magazines and essay layouts." },
        { icon: "✦", label: "Cinematic Contrast", desc: "Using light and dark to evoke focus and intimacy." }
      ],
      stack: ["React", "Vite", "Framer Motion", "CSS Grid & Flexbox", "Google Fonts"],
      howBuilt: "I used Framer Motion for subtle scroll-based animations and CSS Grid to build an editorial layout that feels more like a printed spread than a typical website.",
      noticeQuote: "“My favorite part is the tension between softness and darkness: the interface feels quiet, but the subject matter is sharp.”",
      noticeText: "I wanted the website to feel like entering a small cinema room — focused, intimate, and slightly mysterious.",
      stickyNote: "Who gets to look, and who gets to be remembered?"
    }
  },
  { 
    title: "Catpuccino", 
    meta: "Vibecoding / Web App", 
    category: "coffee",
    desc: "A playful, tactile hydration logger for cats, crafted with beautiful fluid-physics animations, adorable micro-interactions, and visual health insights.",
    image: "/portfolio/catpuccino.png",
    fallbackImage: "/portfolio/kitty-drink.svg",
    date: "May 15, 2026",
    path: "https://brookell.github.io/cat-pu-c-ci-no/",
    displayUrl: "https://brookell.github.io/cat-pu-c-ci-no/",
    deviceType: "phone",
    screenshots: [
      "/portfolio/catpuccino.png"
    ],
    details: {
      subtitle: "Tactile purr-fection for hydration.",
      motivation: "Catpuccino was born from a simple observation: cats rarely drink enough water, yet their parents struggle to log hydration consistently. I designed a cozy, comforting pocket diary that transforms health tracking into a delightful daily ritual.",
      exploring: "I explored organic fluid-physics, high-fidelity tactile micro-interactions, and visual feedback that feels like physical toy play rather than corporate data logging.",
      exploringFeatures: [
        { icon: "✦", label: "Fluid Shaders", desc: "Real-time web shaders that ripple and bounce with water entries." },
        { icon: "✦", label: "Cozy Micro-interactions", desc: "Dragging water drops, cute purring sound loops on completion." },
        { icon: "✦", label: "Warm Claymorphism", desc: "Soft shadows and warm pastel tones that create a safe, domestic space." }
      ],
      stack: ["HTML5 Canvas", "Web Audio API", "LocalStorage", "Claymorphism CSS", "Tailwind CSS"],
      howBuilt: "I created custom fluid animation nodes using pure HTML Canvas and designed micro-sounds to play dynamically. LocalStorage keeps the daily history local and instant.",
      noticeQuote: "“Hydration shouldn't feel like a medical chart. It should feel like pouring a warm glass of milk for a friend.”",
      noticeText: "The visual ripples are physically modeled: dragging your finger creates responsive turbulence, mimicking a cat's tongue touching water.",
      stickyNote: "A tiny drop of water, a huge leap for kitty kidney health."
    }
  },
  { 
    title: "Virginia Woolf Space", 
    meta: "Vibecoding / Literature", 
    category: "literature",
    desc: "An immersive stream-of-consciousness web experience celebrating Virginia Woolf's literary legacy, centering around the philosophy 'I am rooted, but I flow.'",
    image: "/portfolio/virginia-woolf.png",
    fallbackImage: "/portfolio/virginia-woolf.svg",
    date: "May 20, 2026",
    path: "https://brookell.github.io/love-letters-space/",
    displayUrl: "https://brookell.github.io/love-letters-space/",
    deviceType: "browser",
    screenshots: [
      "/portfolio/virginia-woolf.png",
      "/portfolio/virginia-woolf1.png"
    ],
    details: {
      subtitle: "Rooted in words, flowing in space.",
      motivation: "An interactive tribute to Virginia Woolf's stream-of-consciousness philosophy: 'I am rooted, but I flow.' The challenge was converting complex, non-linear literary prose into an immersive spatial choreography.",
      exploring: "I wanted to visualize stream-of-consciousness by projecting letters as a flowing, responsive river of light, allowing users to scroll horizontally and browse stars of thoughts.",
      exploringFeatures: [
        { icon: "✦", label: "Star Fields", desc: "Constellations generated from real letters exchanged with Vita Sackville-West." },
        { icon: "✦", label: "Prose Flow", desc: "Horizontal scrolling that accelerates and decelerates like Woolf's inner monologues." },
        { icon: "✦", label: "Ambient Generator", desc: "Generative piano tracks based on cursor movements." }
      ],
      stack: ["Three.js", "WebGL Shaders", "GSAP (GreenSock)", "Web Audio API", "Custom Layout"],
      howBuilt: "Built using Three.js custom particle physics for the starfield. GSAP controls the letter flow transitions, dynamically aligning text to a curve in 3D space.",
      noticeQuote: "“Prose is not static ink; it is a current of consciousness. The screen should feel as fluid as the mind.”",
      noticeText: "Moving the mouse doesn't just rotate the scene; it creates ripples in the star field that align the letters into legible sentences.",
      stickyNote: "I am rooted, but I flow."
    }
  },
  { 
    title: "Cosmic Vinyl", 
    meta: "Vibecoding / Music", 
    category: "music",
    desc: "A gesture-controlled 3D audio gallery integrating MediaPipe hand tracking and the Web Audio API for an immersive vinyl browsing experience.",
    image: "/portfolio/cosmic-vinyl.png",
    fallbackImage: "/portfolio/cosmic-vinyl.svg",
    date: "May 24, 2026",
    path: "https://brookell.github.io/cosmic-vinyl/",
    displayUrl: "https://brookell.github.io/cosmic-vinyl/",
    deviceType: "browser",
    screenshots: [
      "/portfolio/cosmic-vinyl.png"
    ],
    details: {
      subtitle: "Flipping records in a starfield.",
      motivation: "Cosmic Vinyl addresses the loss of physical sensation in digital music browsing. By pairing gesture tracking with generative spatial audio, we recreate the tactile joy of record store crates in a cosmic virtual showroom.",
      exploring: "I explored spatial user interfaces where a user's physical hand can flip, zoom, and spin interactive 3D vinyl models without touching the keyboard.",
      exploringFeatures: [
        { icon: "✦", label: "Gesture Recognition", desc: "MediaPipe hand landmarks map swiping and grabbing gestures directly." },
        { icon: "✦", label: "Spatial Audio", desc: "Panned ambient vinyl crackle that shifts dynamically with records." },
        { icon: "✦", label: "Glassmorphism Crates", desc: "Futuristic glossy acrylic crates floating in a dark WebGL nebula." }
      ],
      stack: ["Three.js", "MediaPipe Hands", "Web Audio API", "Vanilla JavaScript", "Custom CSS"],
      howBuilt: "MediaPipe hand-landmark detections are piped to a coordinate mapping system to slide records. Custom Web Audio nodes synthesize live vinyl static noise.",
      noticeQuote: "“Music should be felt, both in ears and hands. Cosmic Vinyl restores the physical crate-digging ritual.”",
      noticeText: "Making a fist doesn't just select the record; it drops the virtual tone-arm, initiating the vinyl crackle sound effect.",
      stickyNote: "Bringing the texture of dust and vinyl back to digital streams."
    }
  },
  { 
    title: "More Creations", 
    meta: "Design / Showcase", 
    category: "sports",
    desc: "Click to explore screenshots of my other custom creations and digital prototypes.",
    image: "/portfolio/more.png",
    fallbackImage: "/portfolio/work-1.svg",
    date: "June 9, 2026",
    path: "#",
    displayUrl: "Gallery / Showcase",
    deviceType: "phone",
    isMoreCard: true,
    screenshots: [
      "/custom-gallery/1.png",
      "/custom-gallery/2.png",
      "/custom-gallery/3.png",
      "/custom-gallery/4.png",
      "/custom-gallery/5.png",
      "/custom-gallery/6.png",
      "/custom-gallery/7.png",
      "/custom-gallery/8.png"
    ],
    details: {
      subtitle: "More facets of my creations.",
      motivation: "A collection of miscellaneous design works and prototypes.",
      exploring: "This gallery showcases additional user interfaces and graphic experiments.",
      exploringFeatures: [],
      stack: ["React", "UI Design", "Figma", "Prototyping"],
      howBuilt: "Curated from various projects and stored in custom screenshot files.",
      noticeQuote: "“Every design is a step towards understanding user resonance.”",
      noticeText: "Browse through the screenshots using the slider in the mockup device.",
      stickyNote: "Never stop exploring."
    }
  }
]

const categories = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'film', label: 'Film', icon: Film },
  { id: 'literature', label: 'Literature', icon: BookOpen },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'coffee', label: 'Coffee', icon: Coffee },
  { id: 'sports', label: 'More', icon: MoreHorizontal }
]

function ProjectDetails({ project, device }) {
  return (
    <div className={`details-view-container ${device}-details`}>
      <div className="editorial-case-study">
        {/* Editorial Header */}
        <div className="editorial-header">
          <span className="editorial-meta-tag">• {project.meta}</span>
          <h2 className="editorial-title">{project.title}</h2>
          {project.details.subtitle && (
            <p className="editorial-subtitle">{project.details.subtitle}</p>
          )}
          <p className="editorial-description">
            {project.desc}
          </p>
          
          <div className="editorial-hero-actions">
            <a href={project.path} target="_blank" rel="noopener noreferrer" className="editorial-live-btn">
              ↗ Live Site
            </a>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="editorial-sections-grid">
          {/* Section 01 */}
          <div className="editorial-section sec-01">
            <div className="section-header-row">
              <span className="section-number">01</span>
              <h4>WHY I MADE THIS</h4>
            </div>
            <div className="section-content">
              <p>{project.details.motivation}</p>
            </div>
          </div>

          {/* Section 02 */}
          <div className="editorial-section sec-02">
            <div className="section-header-row">
              <span className="section-number">02</span>
              <h4>WHAT I WAS EXPLORING</h4>
            </div>
            <div className="section-content">
              <p className="section-intro-text">{project.details.exploring}</p>
              
              {project.details.exploringFeatures && (
                <div className="exploring-features-grid">
                  {project.details.exploringFeatures.map((feat, idx) => (
                    <div key={idx} className="exploring-feature-item">
                      <span className="feature-icon">{feat.icon}</span>
                      <div className="feature-info">
                        <h5>{feat.label}</h5>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section 03 */}
          <div className="editorial-section sec-03">
            <div className="section-header-row">
              <span className="section-number">03</span>
              <h4>HOW I BUILT IT</h4>
            </div>
            <div className="section-content">
              <div className="editorial-stack-tags">
                {project.details.stack.map(tech => (
                  <span key={tech} className="editorial-stack-tag">{tech}</span>
                ))}
              </div>
              <p>{project.details.howBuilt}</p>
            </div>
          </div>

          {/* Section 04 */}
          <div className="editorial-section sec-04">
            <div className="section-header-row">
              <span className="section-number">04</span>
              <h4>WHAT I WANT YOU TO NOTICE</h4>
            </div>
            <div className="section-content">
              {project.details.noticeQuote && (
                <blockquote className="editorial-notice-quote">
                  {project.details.noticeQuote}
                </blockquote>
              )}
              <p>{project.details.noticeText}</p>
            </div>
          </div>
        </div>

        {/* Sticky Note Feature */}
        {project.details.stickyNote && (
          <div className="editorial-sticky-note-wrapper">
            <div className="editorial-sticky-note">
              <div className="tape-effect"></div>
              <p className="sticky-note-text">
                “{project.details.stickyNote}”
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function DynamicWord() {
  const containerRef = useRef(null)
  const rotatingRef = useRef(null)
  const isInView = useInView(containerRef, { amount: 0.1 })

  useEffect(() => {
    if (isInView && rotatingRef.current) {
      rotatingRef.current.reset()
    }
  }, [isInView])

  const texts = ["demands.", "pressure.", "assignments.", "curiosity."]

  return (
    <span ref={containerRef} className="portfolio-dynamic-word-wrapper">
      <RotatingText
        ref={rotatingRef}
        texts={texts}
        mainClassName={(idx) => idx === texts.length - 1 ? "portfolio-title-gradient" : "portfolio-title-alt-word"}
        staggerFrom="first"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-120%", opacity: 0 }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        splitBy="characters"
        auto={true}
        loop={false}
      />
    </span>
  )
}

function ScreenshotSlider({ screenshots }) {
  const [validScreenshots, setValidScreenshots] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const checkImages = async () => {
      const checked = []
      for (const src of screenshots) {
        const fullSrc = `${import.meta.env.BASE_URL}${src.startsWith('/') ? src.slice(1) : src}`
        const isValid = await new Promise((resolve) => {
          const img = new Image()
          img.onload = () => resolve(true)
          img.onerror = () => resolve(false)
          img.src = fullSrc
        })
        if (isValid) {
          checked.push(src)
        }
      }
      if (active) {
        setValidScreenshots(checked)
        setLoading(false)
      }
    }
    checkImages()
    return () => { active = false }
  }, [screenshots])

  if (loading) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(255,255,255,0.6)' }}>Loading screenshots...</div>
  }

  if (validScreenshots.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(255,255,255,0.6)', padding: '20px', textAlign: 'center' }}>
        <p>No screenshots found in this gallery yet.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '8px' }}>Please place images (e.g. 1.png, 2.png) in public/custom-gallery/</p>
      </div>
    )
  }

  const nextSlide = (e) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev + 1) % validScreenshots.length)
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev - 1 + validScreenshots.length) % validScreenshots.length)
  }

  return (
    <div className="screenshot-slider" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f0f13' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={`${import.meta.env.BASE_URL}${validScreenshots[currentSlide].startsWith('/') ? validScreenshots[currentSlide].slice(1) : validScreenshots[currentSlide]}`}
          alt={`Screenshot ${currentSlide + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </AnimatePresence>

      {validScreenshots.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(15,15,15,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', zIndex: 10, transition: 'background 0.3s' }}
            onMouseEnter={(e) => e.target.style.background = 'var(--accent-pink)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(15,15,15,0.6)'}
          >
            ‹
          </button>
          <button 
            onClick={nextSlide}
            style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(15,15,15,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', zIndex: 10, transition: 'background 0.3s' }}
            onMouseEnter={(e) => e.target.style.background = 'var(--accent-pink)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(15,15,15,0.6)'}
          >
            ›
          </button>
          <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '8px', zIndex: 10 }}>
            {validScreenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', background: idx === currentSlide ? '#fff' : 'rgba(255,255,255,0.4)', padding: 0, cursor: 'pointer', transition: 'background 0.3s' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function SectionPortfolio() {
  const [activeProject, setActiveProject] = useState(null)
  const [modalTab, setModalTab] = useState('preview') // 'preview' or 'details'
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    if (activeProject) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [activeProject])

  // Filter works by active tab (exclude 'isMoreCard' from 'all' grid view)
  const filteredWorks = activeTab === 'all' 
    ? works.filter(w => !w.isMoreCard) 
    : works.filter(w => w.category === activeTab)

  const orderedSliderWorks = [
    works.find(w => w.category === 'film'),
    works.find(w => w.category === 'literature'),
    works.find(w => w.category === 'music'),
    works.find(w => w.category === 'coffee')
  ].filter(Boolean)

  const activeSliderIndex = ['film', 'literature', 'music', 'coffee'].indexOf(activeTab)

  return (
    <section id="portfolio" className="section portfolio-section-container" style={{ background: 'transparent' }}>
      <div className="container portfolio-outer-container">
        {/* Header styling matching reference */}
        <motion.div 
          className="portfolio-header-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portfolio-header-left">
            <span className="portfolio-label-accent">✦ MY PROJECTS</span>
            <h2 className="portfolio-title-fancy">
              Projects shaped by <DynamicWord />
            </h2>
            <p className="portfolio-subtitle">
              A collection of digital experiences inspired by the things I love — film, literature, music, coffee, and movement.
            </p>
          </div>
        </motion.div>
 
        <div className="portfolio-main-layout">
          {/* Left Vertical Category Nav Sidebar */}
          <motion.div 
            className="portfolio-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portfolio-timeline-wrapper">
              <div className="portfolio-timeline-line" />
              {categories.map((cat) => {
                const IconComponent = cat.icon
                const isMoreBtn = cat.id === 'sports'
                const isSelected = !isMoreBtn && activeTab === cat.id
                const isActiveOrAll = !isMoreBtn && (activeTab === 'all' || activeTab === cat.id)
                
                return (
                  <div
                    key={cat.id}
                    className={`portfolio-sidebar-item sidebar-item-${cat.id} ${isActiveOrAll ? 'active' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      if (isMoreBtn) {
                        const moreProject = works.find(w => w.isMoreCard)
                        if (moreProject) {
                          setActiveProject(moreProject)
                          setModalTab('preview')
                        }
                      } else {
                        setActiveTab(cat.id)
                      }
                    }}
                  >
                    <div className="portfolio-sidebar-icon-circle">
                      <IconComponent size={14} />
                    </div>
                    <span className="portfolio-sidebar-label">{cat.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
 
          {/* Right Projects Area */}
          <div className="portfolio-grid-area">
            <AnimatePresence mode="wait">
              {activeTab === 'all' ? (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="portfolio-new-grid"
                >
                  {filteredWorks.map((work) => {
                    const isFullWidth = work.title === 'MoveTrack' && activeTab === 'all'
                    
                    return (
                      <motion.div
                        key={work.title}
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.16, 1, 0.3, 1],
                          layout: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }
                        }}
                        className={`portfolio-premium-card ${isFullWidth ? 'full-width' : ''} ${work.isMoreCard ? 'more-card-style' : ''}`}
                        onClick={() => {
                          setActiveProject(work)
                          setModalTab('preview')
                        }}
                      >
                        {work.isMoreCard ? (
                          <div className="more-card-inner-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#0f0f13', color: '#fff', padding: '40px', textAlign: 'center', borderRadius: '24px', minHeight: '380px', border: '1px solid rgba(255,255,255,0.08)', width: '100%' }}>
                            <span style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '0.15em', color: '#fff', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>MORE</span>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '280px', margin: '0', fontWeight: '500', lineHeight: 1.5 }}>Click to explore screenshots of my other design works and prototypes.</p>
                          </div>
                        ) : (
                          <>
                            <motion.div 
                              layout 
                              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                              className="portfolio-premium-card-image-wrapper"
                            >
                              <img 
                                src={`${import.meta.env.BASE_URL}${work.image.startsWith('/') ? work.image.slice(1) : work.image}`} 
                                alt={work.title} 
                                className="portfolio-premium-card-image"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = `${import.meta.env.BASE_URL}${work.fallbackImage.startsWith('/') ? work.fallbackImage.slice(1) : work.fallbackImage}`;
                                }}
                              />
                            </motion.div>
                            
                            <motion.div 
                              layout 
                              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                              className="portfolio-premium-card-content"
                            >
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
                                    e.stopPropagation()
                                    setActiveProject(work)
                                    setModalTab('details')
                                  }}
                                >
                                  Details
                                </button>
                                <button 
                                  className="portfolio-action-btn-primary"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveProject(work)
                                    setModalTab('preview')
                                  }}
                                >
                                  Live
                                </button>
                              </div>
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    )
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="slider"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="portfolio-vertical-slider-container"
                >
                  <motion.div 
                    className="portfolio-vertical-slider-track"
                    animate={{ y: `-${activeSliderIndex * 100}%` }}
                    transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                  >
                    {orderedSliderWorks.map((work) => (
                      <div className="portfolio-slider-item" key={work.title}>
                        <div 
                          className={`portfolio-premium-card horizontal-layout ${work.isMoreCard ? 'more-card-style' : ''}`}
                          onClick={() => {
                            setActiveProject(work)
                            setModalTab('preview')
                          }}
                        >
                          {work.isMoreCard ? (
                            <div className="more-card-inner-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#0f0f13', color: '#fff', padding: '40px', textAlign: 'center', borderRadius: '24px', minHeight: '380px', border: '1px solid rgba(255,255,255,0.08)', width: '100%' }}>
                              <span style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '0.15em', color: '#fff', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>MORE</span>
                              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '280px', margin: '0', fontWeight: '500', lineHeight: 1.5 }}>Click to explore screenshots of my other design works and prototypes.</p>
                            </div>
                          ) : (
                            <>
                              <div className="portfolio-premium-card-image-wrapper">
                                <img 
                                  src={`${import.meta.env.BASE_URL}${work.image.startsWith('/') ? work.image.slice(1) : work.image}`} 
                                  alt={work.title} 
                                  className="portfolio-premium-card-image"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `${import.meta.env.BASE_URL}${work.fallbackImage.startsWith('/') ? work.fallbackImage.slice(1) : work.fallbackImage}`;
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
                                      e.stopPropagation()
                                      setActiveProject(work)
                                      setModalTab('details')
                                    }}
                                  >
                                    Details
                                  </button>
                                  <button 
                                    className="portfolio-action-btn-primary"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setActiveProject(work)
                                      setModalTab('preview')
                                    }}
                                  >
                                    Live
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
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
            onTouchMove={(e) => e.preventDefault()}
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
                  <div className="phone-info-overlay">
                    <div className="phone-info-title-area">
                      <span className="phone-info-meta">{activeProject.meta}</span>
                      <h3 className="phone-info-title">{activeProject.title}</h3>
                      <span className="phone-info-url">{activeProject.displayUrl}</span>
                    </div>

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
                        <span>Open</span>
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

                  <div className="phone-device-frame">
                    <div className="phone-side-button phone-vol-up"></div>
                    <div className="phone-side-button phone-vol-down"></div>
                    <div className="phone-side-button phone-power"></div>
                    
                    <div className="phone-screen">
                      {modalTab === 'preview' ? (
                        <ScreenshotSlider screenshots={activeProject.screenshots} />
                      ) : (
                        <ProjectDetails project={activeProject} device="phone" />
                      )}
                    </div>
                    
                    <div className="phone-home-bar"></div>
                  </div>
                </div>
              ) : (
                /* 💻 DESKTOP BROWSER WINDOW MOCKUP FRAME */
                <div className="browser-device-wrapper">
                  <div className="browser-mockup-header">
                    <div className="browser-traffic-lights">
                      <button className="dot red" onClick={() => setActiveProject(null)} title="Close"></button>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>

                    <div className="browser-mockup-tabs">
                      <button 
                        className={`browser-tab tab-preview ${modalTab === 'preview' ? 'active' : ''}`}
                        onClick={() => setModalTab('preview')}
                      >
                        <Globe size={13} className="tab-icon-svg" />
                        <span className="tab-title">Interactive Live</span>
                      </button>
                      <button 
                        className={`browser-tab tab-details ${modalTab === 'details' ? 'active' : ''}`}
                        onClick={() => setModalTab('details')}
                      >
                        <FileText size={13} className="tab-icon-svg" />
                        <span className="tab-title">Case Study</span>
                      </button>
                    </div>
                    
                    <div className="browser-address-bar">
                      <span className="address-bar-text">
                        {modalTab === 'preview' ? activeProject.displayUrl : `${activeProject.displayUrl}#case-study`}
                      </span>
                    </div>
                    
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
                  
                  <div className="browser-screen">
                    {modalTab === 'preview' ? (
                      <ScreenshotSlider screenshots={activeProject.screenshots} />
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
