import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Trophy, Sparkles, Eye, Leaf, Zap, Mountain } from 'lucide-react'

const pillars = [
  { 
    name: 'Bold', 
    desc: 'Competitive courage and decisive action. The fearless mindset cultivated through years of national-level table tennis competition.', 
    meta: 'National Athlete Spirit', 
    icon: Trophy,
    fileName: 'bold.jpg',
    gradient: 'linear-gradient(135deg, rgba(254, 137, 137, 0.05) 0%, rgba(254, 137, 137, 0.12) 100%)',
    shadow: '0 20px 40px rgba(254, 137, 137, 0.18), 0 8px 16px rgba(254, 137, 137, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.7)',
    textColor: '#fe8989',
    borderColor: 'rgba(254, 137, 137, 0.35)'
  },
  { 
    name: 'Relational', 
    desc: 'Emotional resonance and human connection. Building meaningful bridges between people, cultures, and ideas through empathy.', 
    meta: 'Digital Mentorship', 
    icon: Sparkles,
    fileName: 'relational.jpg',
    gradient: 'linear-gradient(135deg, rgba(126, 200, 227, 0.05) 0%, rgba(126, 200, 227, 0.12) 100%)',
    shadow: '0 20px 40px rgba(126, 200, 227, 0.18), 0 8px 16px rgba(126, 200, 227, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.7)',
    textColor: '#7ec8e3',
    borderColor: 'rgba(126, 200, 227, 0.35)'
  },
  { 
    name: 'Observant', 
    desc: 'Identifying patterns and hidden signals in data, behavior, and markets. Turning observation into strategic insight.', 
    meta: 'Strategy & Research', 
    icon: Eye,
    fileName: 'observant.jpg',
    gradient: 'linear-gradient(135deg, rgba(254, 137, 137, 0.05) 0%, rgba(254, 137, 137, 0.12) 100%)',
    shadow: '0 20px 40px rgba(254, 137, 137, 0.18), 0 8px 16px rgba(254, 137, 137, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.7)',
    textColor: '#fe8989',
    borderColor: 'rgba(254, 137, 0, 0.25)' 
  },
  { 
    name: 'Organic', 
    desc: 'Natural, intuitive growth rhythms. Embracing an aesthetic approach to technology that feels alive and human.', 
    meta: 'Vibe Coding Aesthetic', 
    icon: Leaf,
    fileName: 'organic.jpg',
    gradient: 'linear-gradient(135deg, rgba(126, 200, 227, 0.05) 0%, rgba(126, 200, 227, 0.12) 100%)',
    shadow: '0 20px 40px rgba(126, 200, 227, 0.18), 0 8px 16px rgba(126, 200, 227, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.7)',
    textColor: '#7ec8e3',
    borderColor: 'rgba(126, 200, 227, 0.35)'
  },
  { 
    name: 'Keen', 
    desc: 'High-signal curiosity and razor-sharp focus. Exploring the frontier of AI, tech, and creative tools with depth.', 
    meta: 'AI & Tech Exploration', 
    icon: Zap,
    fileName: 'keen.jpg',
    gradient: 'linear-gradient(135deg, rgba(254, 137, 137, 0.05) 0%, rgba(254, 137, 137, 0.12) 100%)',
    shadow: '0 20px 40px rgba(254, 137, 137, 0.18), 0 8px 16px rgba(254, 137, 137, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.7)',
    textColor: '#fe8989',
    borderColor: 'rgba(254, 137, 137, 0.35)'
  },
  { 
    name: 'Endurance', 
    desc: 'The "Rooted" foundation of grit. Years of discipline in both academics and athletics forged an unshakable core.', 
    meta: 'Academic & Physical', 
    icon: Mountain,
    fileName: 'endurance.jpg',
    gradient: 'linear-gradient(135deg, rgba(126, 200, 227, 0.05) 0%, rgba(126, 200, 227, 0.12) 100%)',
    shadow: '0 20px 40px rgba(126, 200, 227, 0.18), 0 8px 16px rgba(126, 200, 227, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.7)',
    textColor: '#7ec8e3',
    borderColor: 'rgba(126, 200, 227, 0.35)'
  },
]

export default function SectionFramework() {
  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const scrollbarTrackRef = useRef(null)

  const x = useMotionValue(0)
  const [maxDrag, setMaxDrag] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})

  const [cardWidth, setCardWidth] = useState(384)
  const gap = 24

  // Dynamically calculate cardWidth to ensure exactly 3 cards fit in the viewport container on desktop
  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth
      let numCards = 3
      if (screenWidth < 640) {
        numCards = 1
      } else if (screenWidth < 1024) {
        numCards = 2
      }

      // Calculate container width equivalent (max 1200px, padding 8vw on both sides)
      const padding = screenWidth > 1200 ? (screenWidth - 1200) / 2 + screenWidth * 0.08 : screenWidth * 0.08
      const visibleWidth = screenWidth - padding * 2
      
      const computedWidth = (visibleWidth - gap * (numCards - 1)) / numCards
      setCardWidth(Math.max(280, computedWidth))
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Calculate max drag distance dynamically
  useEffect(() => {
    const updateMaxDrag = () => {
      if (!viewportRef.current || !trackRef.current) return
      const screenWidth = window.innerWidth
      const padding = screenWidth > 1200 ? (screenWidth - 1200) / 2 + screenWidth * 0.08 : screenWidth * 0.08
      const visibleWidth = screenWidth - padding * 2
      const trackWidth = trackRef.current.scrollWidth
      setMaxDrag(Math.max(0, trackWidth - visibleWidth))
    }
    updateMaxDrag()
    window.addEventListener('resize', updateMaxDrag)
    const timer = setTimeout(updateMaxDrag, 100)
    return () => {
      window.removeEventListener('resize', updateMaxDrag)
      clearTimeout(timer)
    }
  }, [cardWidth])

  // Map motion value x to scrollProgress [0, 1]
  useEffect(() => {
    return x.onChange((latest) => {
      if (maxDrag <= 0) return
      const progress = -latest / maxDrag
      setScrollProgress(Math.max(0, Math.min(1, progress)))
    })
  }, [maxDrag, x])

  // Trackpad horizontal swipe / wheel scroll support
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const handleWheel = (e) => {
      // Check horizontal wheel scrolling
      if (Math.abs(e.deltaX) > 4) {
        e.preventDefault()
        const newX = x.get() - e.deltaX * 1.2
        x.set(Math.max(-maxDrag, Math.min(0, newX)))
      }
    }

    viewport.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      viewport.removeEventListener('wheel', handleWheel)
    }
  }, [maxDrag, x])

  // Keyboard arrow keys navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
        return
      }

      const step = cardWidth + gap
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        const newX = Math.max(-maxDrag, x.get() - step)
        animate(x, newX, { type: 'spring', stiffness: 300, damping: 30 })
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const newX = Math.min(0, x.get() + step)
        animate(x, newX, { type: 'spring', stiffness: 300, damping: 30 })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [maxDrag, cardWidth, gap, x])

  // Drag handlers for scrollbar thumb
  const handleScrollbarPointerDown = (e) => {
    setIsDraggingScrollbar(true)
    updateScrollPosition(e)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handleScrollbarPointerMove = (e) => {
    if (!isDraggingScrollbar) return
    updateScrollPosition(e)
  }

  const handleScrollbarPointerUp = (e) => {
    setIsDraggingScrollbar(false)
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch (err) {}
  }

  const updateScrollPosition = (e) => {
    if (!scrollbarTrackRef.current || maxDrag <= 0) return
    const rect = scrollbarTrackRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(1, clickX / rect.width))
    x.set(-percentage * maxDrag)
  }

  const toggleFlip = (index) => {
    if (isDragging) return
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section id="framework" className="section" style={{ background: 'transparent', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-mono">02 — The Framework</span>
          <h2 className="title-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '10px' }}>
            THE BROOKE CORE
          </h2>
        </motion.div>
      </div>

      {/* Slider Viewport Container */}
      <div className="carousel-viewport-wrapper" style={{ position: 'relative', width: '100%' }}>

        <div 
          className="carousel-viewport" 
          ref={viewportRef}
          style={{ overflow: 'visible', width: '100%', paddingBottom: '90px' }}
        >
          <motion.div
            ref={trackRef}
            className="carousel-track"
            drag="x"
            dragConstraints={{
              left: -maxDrag,
              right: 0
            }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
            style={{ x, cursor: isDragging ? 'grabbing' : 'grab' }}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
          >
            {pillars.map((item, i) => {
              const isFlipped = !!flippedCards[i]
              const isPink = item.textColor === '#fe8989'

              return (
                <motion.div
                  key={`${item.name}-${i}`}
                  className="pillar-card-wrapper"
                  onClick={() => toggleFlip(i)}
                  whileHover={{
                    y: -15,
                    scale: 1.05
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  style={{
                    width: cardWidth,
                    minWidth: cardWidth,
                    height: '380px',
                  }}
                >
                <motion.div
                  className="pillar-card-inner"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* ── Front Side: Core Pill Keyword ── */}
                  <div 
                    className="pillar-card-front"
                    style={{
                      background: item.gradient,
                      boxShadow: item.shadow,
                      borderColor: item.borderColor,
                      '--border-color': item.borderColor,
                      '--bg-letter-color': isPink ? 'rgba(254, 137, 137, 0.16)' : 'rgba(126, 200, 227, 0.16)',
                      '--bg-letter-color-hover': isPink ? 'rgba(254, 137, 137, 0.32)' : 'rgba(126, 200, 227, 0.32)'
                    }}
                  >
                    {/* Giant background letter spelling BROOKE */}
                    <div className="pillar-bg-letter">{item.name[0]}</div>

                    <div className="pillar-card-top">
                      <span className="pillar-icon" style={{ color: item.textColor }}>
                        <item.icon size={36} strokeWidth={1.5} />
                      </span>
                      <span className="pillar-meta" style={{ color: 'rgba(28, 23, 22, 0.5)' }}>{item.meta}</span>
                    </div>
                    
                    <div className="pillar-front-middle">
                      <h3 className="pillar-front-name" style={{ color: '#1c1716' }}>{item.name}</h3>
                    </div>
                    
                    <div className="pillar-discover-btn" style={{ color: item.textColor }}>
                      Discover &rarr;
                    </div>
                  </div>

                  {/* ── Back Side: Photography/Curations ── */}
                  <div className="pillar-card-back">
                    <div className="pillar-back-content">
                      <span className="pillar-back-meta">{item.meta}</span>
                      <p className="pillar-back-desc">{item.desc}</p>
                      
                      <div className="pillar-back-close">
                        &larr; Close Card
                      </div>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>

      {/* Horizontal Scrollbar Drag-bar */}
      <div className="carousel-scrollbar-container">
        <div 
          className="carousel-scrollbar-track"
          ref={scrollbarTrackRef}
          onPointerDown={handleScrollbarPointerDown}
          onPointerMove={handleScrollbarPointerMove}
          onPointerUp={handleScrollbarPointerUp}
          style={{ touchAction: 'none' }}
        >
          <div 
            className="carousel-scrollbar-thumb"
            style={{
              width: `${100 / pillars.length}%`,
              left: `${scrollProgress * (100 - 100 / pillars.length)}%`
            }}
          />
        </div>
      </div>
    </section>
  )
}
