import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Sparkles, Eye, Leaf, Zap, Mountain } from 'lucide-react'

const pillars = [
  { 
    name: 'Bold', 
    desc: 'Competitive courage and decisive action. The fearless mindset cultivated through years of national-level table tennis competition.', 
    meta: 'National Athlete Spirit', 
    icon: Trophy,
    fileName: 'bold.jpg',
    gradient: 'linear-gradient(135deg, #1c1c24 0%, #101015 100%)',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
  { 
    name: 'Relational', 
    desc: 'Emotional resonance and human connection. Building meaningful bridges between people, cultures, and ideas through empathy.', 
    meta: 'Digital Mentorship', 
    icon: Sparkles,
    fileName: 'relational.jpg',
    gradient: 'linear-gradient(135deg, #1c1c24 0%, #101015 100%)',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
  { 
    name: 'Observant', 
    desc: 'Identifying patterns and hidden signals in data, behavior, and markets. Turning observation into strategic insight.', 
    meta: 'Strategy & Research', 
    icon: Eye,
    fileName: 'observant.jpg',
    gradient: 'linear-gradient(135deg, #1c1c24 0%, #101015 100%)',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
  { 
    name: 'Organic', 
    desc: 'Natural, intuitive growth rhythms. Embracing an aesthetic approach to technology that feels alive and human.', 
    meta: 'Vibe Coding Aesthetic', 
    icon: Leaf,
    fileName: 'organic.jpg',
    gradient: 'linear-gradient(135deg, #1c1c24 0%, #101015 100%)',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
  { 
    name: 'Keen', 
    desc: 'High-signal curiosity and razor-sharp focus. Exploring the frontier of AI, tech, and creative tools with depth.', 
    meta: 'AI & Tech Exploration', 
    icon: Zap,
    fileName: 'keen.jpg',
    gradient: 'linear-gradient(135deg, #1c1c24 0%, #101015 100%)',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
  { 
    name: 'Endurance', 
    desc: 'The "Rooted" foundation of grit. Years of discipline in both academics and athletics forged an unshakable core.', 
    meta: 'Academic & Physical', 
    icon: Mountain,
    fileName: 'endurance.jpg',
    gradient: 'linear-gradient(135deg, #1c1c24 0%, #101015 100%)',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
]

export default function SectionFramework() {
  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const scrollbarTrackRef = useRef(null)
  
  // Tripled list mapping to ensure card E is followed seamlessly by B, and B by E
  const extendedPillars = [...pillars, ...pillars, ...pillars]
  const totalCards = extendedPillars.length // 18
  
  // Start at index 6 (middle copy's first card "Bold")
  const [currentIndex, setCurrentIndex] = useState(6)
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

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
    if (!scrollbarTrackRef.current) return
    const rect = scrollbarTrackRef.current.getBoundingClientRect()
    const clientX = e.clientX
    const clickX = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, clickX / rect.width))
    const targetIndex = Math.round(percentage * (pillars.length - 1))
    goTo(targetIndex)
  }
  
  // Tracking individual card flip states (0 to 5 index representing the root pillars)
  const [flippedCards, setFlippedCards] = useState({})
  const lastScrollTime = useRef(0)

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

  // Instant warp teleportation on boundaries when sliding
  const handleAnimationComplete = () => {
    if (currentIndex >= 12) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex - 6)
    } else if (currentIndex < 6) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex + 6)
    }
  }

  // Restore transition mode on the frame following the teleport warp
  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => {
        setTransitionEnabled(true)
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [transitionEnabled])

  // Trackpad horizontal swipe / wheel scroll support
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let accumulatedDelta = 0
    let scrollTimeout = null

    const handleWheel = (e) => {
      // Check horizontal wheel scrolling
      if (Math.abs(e.deltaX) > 4) {
        // Prevent browser's native history swipe navigation gestures
        e.preventDefault()
        
        accumulatedDelta += e.deltaX
        
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          accumulatedDelta = 0
        }, 150)

        // Threshold of 70px horizontal swipe to scroll to next/prev card
        const swipeThreshold = 70
        const now = Date.now()
        if (Math.abs(accumulatedDelta) >= swipeThreshold) {
          if (now - lastScrollTime.current > 500) { // 500ms swipe throttle
            if (accumulatedDelta > 0) {
              setCurrentIndex(prev => prev + 1)
            } else {
              setCurrentIndex(prev => prev - 1)
            }
            lastScrollTime.current = now
          }
          accumulatedDelta = 0
        }
      }
    }

    viewport.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      viewport.removeEventListener('wheel', handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [cardWidth])



  // Drag logic with silky momentum flick and multi-card advances
  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const offset = info.offset.x
    const velocity = info.velocity.x
    const cardStep = cardWidth + gap

    const swipeThreshold = 50
    const velocityThreshold = 300

    let cardsToMove = 0

    if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > velocityThreshold) {
      // Calculate how many cards dragged physically
      const physicalDragged = -offset / cardStep
      // Add velocity contribution for the silky flick inertia
      const flickContribution = -velocity * 0.0015
      
      const totalEstimatedMove = physicalDragged + flickContribution
      
      if (totalEstimatedMove > 0) {
        cardsToMove = Math.max(1, Math.round(totalEstimatedMove))
      } else {
        cardsToMove = Math.min(-1, Math.round(totalEstimatedMove))
      }
    }

    // Limit maximum move per swipe to 3 cards to keep it elegant and controllable
    const finalMove = Math.max(-3, Math.min(3, cardsToMove))

    if (finalMove !== 0) {
      setCurrentIndex(prev => prev + finalMove)
    }
  }

  const toggleFlip = (index) => {
    if (isDragging) return
    const pillarIdx = index % 6
    setFlippedCards(prev => ({
      ...prev,
      [pillarIdx]: !prev[pillarIdx]
    }))
  }

  const goTo = (index) => {
    setCurrentIndex(index + 6)
  }

  const activeIndex = ((currentIndex % 6) + 6) % 6

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
              left: -currentIndex * (cardWidth + gap) - 180,
              right: -currentIndex * (cardWidth + gap) + 180
            }}
            dragElastic={0.4}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * (cardWidth + gap) }}
            onAnimationComplete={handleAnimationComplete}
            transition={transitionEnabled ? { type: 'spring', stiffness: 180, damping: 24, mass: 0.8 } : { duration: 0 }}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {extendedPillars.map((item, i) => {
              const isFlipped = !!flippedCards[i % 6]
              const offsetIndex = i - currentIndex
              
              // Clean straight horizontal layout
              const arcY = 0
              const arcRotateZ = 0
              const arcScale = i === currentIndex ? 1 : 0.95

              return (
                <motion.div
                  key={`${item.name}-${i}`}
                  className="pillar-card-wrapper"
                  onClick={() => toggleFlip(i)}
                  animate={{ 
                    y: arcY,
                    rotateZ: arcRotateZ,
                    scale: arcScale
                  }}
                  whileHover={{
                    y: -15,
                    scale: i === currentIndex ? 1.08 : 1.04
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
                      boxShadow: `0 12px 40px ${item.shadow}`,
                    }}
                  >
                    <div className="pillar-card-top">
                      <span className="pillar-icon">
                        <item.icon size={36} strokeWidth={1.5} />
                      </span>
                      <span className="pillar-meta">{item.meta}</span>
                    </div>
                    
                    <div className="pillar-front-middle">
                      <h3 className="pillar-front-name">{item.name}</h3>
                    </div>
                    
                    <div className="pillar-discover-btn">
                      Discover &rarr;
                    </div>
                  </div>

                  {/* ── Back Side: Photography/Curations ── */}
                  <div className="pillar-card-back">
                    <div className="pillar-back-content">
                      
                      {/* Media Image Frame with Guide text */}
                      <div className="pillar-media-placeholder">
                        <img 
                          src={`/pillars/${item.fileName}`} 
                          alt={item.name} 
                          className="pillar-media-img"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div className="pillar-media-info">
                          <span className="placeholder-text-folder">public/pillars/</span>
                          <span className="placeholder-text-filename">{item.fileName}</span>
                        </div>
                      </div>

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
              left: `${(activeIndex / pillars.length) * 100}%`
            }}
          />
        </div>
      </div>
    </section>
  )
}
