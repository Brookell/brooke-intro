import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Zap, Mail, Linkedin, Github, MessageCircle, BookOpen, ChevronUp, ChevronDown, Sparkles, Code2, Orbit, FileText, BarChart3, Languages, Heart, Music, Film, Coffee, ChevronLeft, ChevronRight, Sliders, Camera } from 'lucide-react'
import { smoothScrollTo } from '../utils/scroll'

const stats = [
  { number: '3.85', label: 'GPA SCORE' },
  { number: '8+', label: 'YEARS OF\nATHLETICS' },
  { number: '5+', label: 'PROJECTS\nCOMPLETED' },
]

const skillsList = [
  {
    title: "AI Product Operations",
    desc: "Overseas localization, visual LLM community building, and product operations at Baidu & ShengShu.",
    icon: Sparkles,
    tags: ["Product Ops", "Visual LLM", "Localization", "Community Curation"]
  },
  {
    title: "Vibecoding & Prototyping",
    desc: "Rapid interactive web prototyping using React, Framer Motion, and AI-agent workflows.",
    icon: Code2,
    tags: ["Vibecoding", "React", "Framer Motion", "Vite"]
  },
  {
    title: "Creative Development",
    desc: "Immersive WebGL graphics and interactive 3D storytelling with Three.js and GSAP.",
    icon: Orbit,
    tags: ["Three.js", "WebGL", "GSAP Animations", "Creative Coding"]
  },
  {
    title: "Content Strategy & Curation",
    desc: "Multi-platform content incubation, curation, and cultural/film critique writing.",
    icon: FileText,
    tags: ["Content Matrix", "Curation", "Film Theory", "TikTok/Redbook"]
  },
  {
    title: "Global Business Strategy",
    desc: "Multinational strategies, M&A pricing models, and market scope economics.",
    icon: BarChart3,
    tags: ["MIB", "M&A Strategy", "Economics of Scope", "Market Analysis"]
  },
  {
    title: "Bilingual Communication",
    desc: "Fluent English & Chinese communication enabling cross-border team collaborations.",
    icon: Languages,
    tags: ["Bilingual", "Cross-cultural", "Public Relations", "Team Lead"]
  }
]

const hobbiesList = [
  {
    title: "Reading & Film",
    titleZh: "阅读与电影",
    desc: "A quiet observer of the world, often found gathering fragments of life through literature and films. Sharing reviews on TikTok/Redbook and engaging with cinema culture.",
    icon: BookOpen,
    color: "#fe8989",
    images: [
      "/hobbies/read1.jpg",
      "/hobbies/read2.jpg",
      "/hobbies/read3.jpg",
      "/hobbies/read4.jpg",
      "/hobbies/read5.jpg"
    ]
  },
  {
    title: "Music",
    titleZh: "音乐",
    desc: "Drawn to indie waves, rock beats, and deep ambient soundscapes. Enjoying the warmth of vinyl records and discovering new rhythms to fuel creative coding.",
    icon: Music,
    color: "#b8a6ff",
    images: [
      "/hobbies/music1.jpg",
      "/hobbies/music2.jpg",
      "/hobbies/music3.jpg",
      "/hobbies/music4.jpg",
      "/hobbies/music5.jpg",
      "/hobbies/music6.jpg"
    ]
  },
  {
    title: "Sports",
    titleZh: "运动",
    desc: "Competitive grit built through years of standard athletic training. Striving for mental endurance and steady inner strength through active sports and running.",
    icon: Zap,
    color: "#7ec8e3",
    images: [
      "/hobbies/sport1.jpg",
      "/hobbies/sport2.jpg",
      "/hobbies/sport3.jpg",
      "/hobbies/sport4.jpg",
      "/hobbies/sport5.jpg",
      "/hobbies/sport6.jpg"
    ]
  },
  {
    title: "Photography",
    titleZh: "拍照",
    desc: "Capturing fragments of light and shadow in daily life and travels. Preserving fleeting moments, urban architectures, and warm human connections through the lens.",
    icon: Camera,
    color: "#fb923c",
    images: [
      "/hobbies/photo1.jpg",
      "/hobbies/photo2.jpg",
      "/hobbies/photo3.jpg",
      "/hobbies/photo4.jpg",
      "/hobbies/photo5.jpg",
      "/hobbies/photo6.jpg"
    ]
  }
]

export default function SectionAbout() {
  const [showEduModal, setShowEduModal] = useState(false)
  const [showSkillsModal, setShowSkillsModal] = useState(false)
  const [showHobbiesModal, setShowHobbiesModal] = useState(false)

  const [currentHobby, setCurrentHobby] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)

  React.useEffect(() => {
    setImageError(false)
  }, [currentHobby, currentImageIndex])

  const [isEditingLayout, setIsEditingLayout] = useState(false)
  const [cardStyles, setCardStyles] = useState(() => {
    try {
      const saved = localStorage.getItem('customFeatureCardStyles')
      return saved ? JSON.parse(saved) : {
        minHeight: 56,
        paddingY: 12,
        paddingX: 16,
        gap: 16,
        fontSize: 0.76
      }
    } catch (e) {
      return {
        minHeight: 56,
        paddingY: 12,
        paddingX: 16,
        gap: 16,
        fontSize: 0.76
      }
    }
  })
  const [saveStatus, setSaveStatus] = useState("保存配置")

  const handleStyleChange = (key, value) => {
    setCardStyles(prev => ({
      ...prev,
      [key]: value
    }))
    setSaveStatus("保存配置")
  }

  const handleSaveStyles = () => {
    localStorage.setItem('customFeatureCardStyles', JSON.stringify(cardStyles))
    setSaveStatus("已保存！请通知助手 ✅")
  }

  const handleHobbyChange = (newIndex) => {
    setCurrentHobby(newIndex)
    setCurrentImageIndex(0)
  }

  return (
    <section id="about" className="section about-section">


      <div className="container">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ── Left Column: Profile Card ── */}
          <motion.div 
            className="profile-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Photo placeholder */}
            <div className="profile-photo">
              <img src={`${import.meta.env.BASE_URL}about.png`} alt="Brooke" className="photo-img" />
            </div>

            <h3 className="profile-name">
              Brooke
            </h3>

            <p className="profile-bio">
              MIB @ BFSU.
              {"\n"}Competitive grit × Creative soul.
              {"\n"}Rooted yet fluid.
            </p>

            <div className="profile-socials">
              <a href="mailto:brookel0619@163.com" className="social-icon" title="Email"><Mail size={16} strokeWidth={2} /></a>
              <a href="https://www.linkedin.com/in/brooke-liao0619/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><Linkedin size={16} strokeWidth={2} /></a>
              <a href="https://www.xiaohongshu.com/user/profile/5f24e9e4000000000101dcc2" target="_blank" rel="noopener noreferrer" className="social-icon" title="小红书"><BookOpen size={16} strokeWidth={2} /></a>
              <a href="https://github.com/Brookell" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><Github size={16} strokeWidth={2} /></a>
              <a href="sms:15874242681" className="social-icon" title="SMS"><MessageCircle size={16} strokeWidth={2} /></a>
            </div>
          </motion.div>

          {/* ── Right Column ── */}
          <div className="about-right">
            {/* Title Block */}
            <motion.div
              className="about-title-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="label-mono">01 — ABOUT</span>
              <h2 className="about-heading">
                DYNAMIC <span className="about-heading-accent">STABILITY</span>
              </h2>
              <p className="about-description">
                Rooted in structured business strategy.
                {"\n"}Flowing through AI-driven creations.
                {"\n"}Fueled by literature, indie waves, and deep sleep.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="stats-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Feature Cards Row */}
            <div 
              className="feature-cards-row"
              style={{
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: `${cardStyles.gap}px`
              }}
            >
              <motion.div 
                className="feature-card feature-card-pink"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={() => setShowEduModal(true)}
                style={{
                  minHeight: `${cardStyles.minHeight}px`,
                  padding: `${cardStyles.paddingY}px ${cardStyles.paddingX}px`
                }}
              >
                <span className="feature-icon"><GraduationCap size={24} strokeWidth={1.5} /></span>
                <h4 className="feature-title" style={{ fontSize: `${cardStyles.fontSize}rem` }}>EDUCATIONAL BACKGROUND</h4>
              </motion.div>
              
              <motion.div 
                className="feature-card feature-card-cyan"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={() => setShowSkillsModal(true)}
                style={{
                  minHeight: `${cardStyles.minHeight}px`,
                  padding: `${cardStyles.paddingY}px ${cardStyles.paddingX}px`
                }}
              >
                <span className="feature-icon"><Zap size={24} strokeWidth={1.5} /></span>
                <h4 className="feature-title" style={{ fontSize: `${cardStyles.fontSize}rem` }}>SKILLS & EXPERTISE</h4>
              </motion.div>

              <motion.div 
                className="feature-card feature-card-lavender"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onClick={() => setShowHobbiesModal(true)}
                style={{
                  minHeight: `${cardStyles.minHeight}px`,
                  padding: `${cardStyles.paddingY}px ${cardStyles.paddingX}px`
                }}
              >
                <span className="feature-icon"><Heart size={24} strokeWidth={1.5} /></span>
                <h4 className="feature-title" style={{ fontSize: `${cardStyles.fontSize}rem` }}>HOBBIES & INTERESTS</h4>
              </motion.div>
            </div>

            {/* Visual Editor Controller */}
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button 
                onClick={() => setIsEditingLayout(!isEditingLayout)}
                style={{
                  background: 'rgba(28, 23, 22, 0.05)',
                  border: '1px dashed rgba(28, 23, 22, 0.15)',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: '#1c1716',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s ease'
                }}
              >
                <Sliders size={12} />
                {isEditingLayout ? '隐藏卡片调节器' : '🔧 调节卡片大小 (拖动调节)'}
              </button>

              <AnimatePresence>
                {isEditingLayout && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.65)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      padding: '16px',
                      marginTop: '12px',
                      border: '1px solid rgba(28, 23, 22, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      {/* Min Height */}
                      <div className="layout-editor-slider-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: '700', color: 'rgba(28, 23, 22, 0.6)' }}>
                          最小高度: {cardStyles.minHeight}px
                        </label>
                        <input 
                          type="range" 
                          min="40" 
                          max="150" 
                          value={cardStyles.minHeight}
                          onChange={(e) => handleStyleChange('minHeight', parseInt(e.target.value))}
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </div>

                      {/* Font Size */}
                      <div className="layout-editor-slider-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: '700', color: 'rgba(28, 23, 22, 0.6)' }}>
                          文字大小: {cardStyles.fontSize}rem
                        </label>
                        <input 
                          type="range" 
                          min="0.5" 
                          max="1.2" 
                          step="0.02"
                          value={cardStyles.fontSize}
                          onChange={(e) => handleStyleChange('fontSize', parseFloat(e.target.value))}
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </div>

                      {/* Padding Y */}
                      <div className="layout-editor-slider-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: '700', color: 'rgba(28, 23, 22, 0.6)' }}>
                          上下内边距: {cardStyles.paddingY}px
                        </label>
                        <input 
                          type="range" 
                          min="4" 
                          max="30" 
                          value={cardStyles.paddingY}
                          onChange={(e) => handleStyleChange('paddingY', parseInt(e.target.value))}
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </div>

                      {/* Padding X */}
                      <div className="layout-editor-slider-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: '700', color: 'rgba(28, 23, 22, 0.6)' }}>
                          左右内边距: {cardStyles.paddingX}px
                        </label>
                        <input 
                          type="range" 
                          min="8" 
                          max="40" 
                          value={cardStyles.paddingX}
                          onChange={(e) => handleStyleChange('paddingX', parseInt(e.target.value))}
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </div>

                      {/* Gap */}
                      <div className="layout-editor-slider-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: '700', color: 'rgba(28, 23, 22, 0.6)' }}>
                          卡片间距: {cardStyles.gap}px
                        </label>
                        <input 
                          type="range" 
                          min="4" 
                          max="40" 
                          value={cardStyles.gap}
                          onChange={(e) => handleStyleChange('gap', parseInt(e.target.value))}
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </div>
                    </div>

                    <button 
                      onClick={handleSaveStyles}
                      style={{
                        alignSelf: 'flex-start',
                        marginTop: '8px',
                        background: '#1c1716',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {saveStatus}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Education Timeline Modal */}
      <AnimatePresence>
        {showEduModal && (
          <motion.div 
            className="edu-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEduModal(false)}
          >
            <motion.div 
              className="edu-modal-content"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="edu-modal-close" onClick={() => setShowEduModal(false)}>✕</button>
              
              <div className="edu-modal-header">
                <span className="edu-modal-tag">Education Background</span>
                <h3 className="edu-modal-title">Academic Journey</h3>
              </div>
              
              <div className="edu-timeline">
                <div className="edu-timeline-item">
                  <div className="edu-timeline-badge">M.S.</div>
                  <div className="edu-timeline-info">
                    <h4 className="edu-school">Beijing Foreign Studies University</h4>
                    <p className="edu-major">International Business (Master's Degree)</p>
                  </div>
                </div>

                <div className="edu-timeline-item">
                  <div className="edu-timeline-badge">B.A.</div>
                  <div className="edu-timeline-info">
                    <h4 className="edu-school">Xiangtan University</h4>
                    <p className="edu-major">English Major (Bachelor's Degree)</p>
                  </div>
                </div>

                <div className="edu-timeline-item">
                  <div className="edu-timeline-badge">H.S.</div>
                  <div className="edu-timeline-info">
                    <h4 className="edu-school">The No.1 High School of Changsha</h4>
                    <p className="edu-major">High School Diploma</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills Modal */}
      <AnimatePresence>
        {showSkillsModal && (
          <motion.div 
            className="edu-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSkillsModal(false)}
          >
            <motion.div 
              className="edu-modal-content skills-modal-content"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="edu-modal-close" onClick={() => setShowSkillsModal(false)}>✕</button>
              
              <div className="edu-modal-header">
                <span className="edu-modal-tag">Expertise & Abilities</span>
                <h3 className="edu-modal-title">Skills Overview</h3>
              </div>
              
              <div className="skills-modal-list">
                {skillsList.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.title} className="skills-modal-item">
                      <div className="skills-modal-item-header">
                        <div className="skills-modal-icon-wrapper">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <h4 className="skills-modal-item-title">{skill.title}</h4>
                      </div>
                      <p className="skills-modal-item-desc">{skill.desc}</p>
                      <div className="skills-modal-tags">
                        {skill.tags.map(tag => (
                          <span key={tag} className="skills-modal-tag-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hobbies Modal */}
      <AnimatePresence>
        {showHobbiesModal && (
          <motion.div 
            className="edu-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHobbiesModal(false)}
          >
            <motion.div 
              className="edu-modal-content hobbies-carousel-modal"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="edu-modal-close" onClick={() => setShowHobbiesModal(false)}>✕</button>
              
              <div className="edu-modal-header">
                <span className="edu-modal-tag">Interests & Hobbies</span>
                <h3 className="edu-modal-title">Personal Curations</h3>
              </div>

              {/* Main Carousel Wrapper */}
              <div className="hobbies-main-wrapper" style={{ padding: '0 10px' }}>
                
                {/* Inner Content Area */}
                <div className="hobbies-slide-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHobby}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="hobbies-content-grid"
                    >
                      {/* Left: Image Viewer */}
                      <div className="hobbies-gallery-container">
                        <div className="hobbies-gallery-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                          {/* Image Viewer */}
                          <div 
                            className="hobbies-image-viewer"
                            onClick={() => {
                              // Cycle image on clicking the image itself
                              const total = hobbiesList[currentHobby].images.length
                              setCurrentImageIndex((currentImageIndex + 1) % total)
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            {!imageError && (
                              <>
                                <img 
                                  src={`${import.meta.env.BASE_URL}${hobbiesList[currentHobby].images[currentImageIndex].substring(1)}`}
                                  alt=""
                                  className="hobbies-main-image-blur"
                                />
                                <img 
                                  src={`${import.meta.env.BASE_URL}${hobbiesList[currentHobby].images[currentImageIndex].substring(1)}`}
                                  alt={`${hobbiesList[currentHobby].title}`}
                                  className="hobbies-main-image"
                                  onError={() => setImageError(true)}
                                />
                              </>
                            )}
                            {imageError && (
                              <div className="hobbies-image-placeholder" style={{ display: 'flex', background: `linear-gradient(135deg, ${hobbiesList[currentHobby].color}20 0%, ${hobbiesList[currentHobby].color}40 100%)` }}>
                                <div className="placeholder-icon-wrapper" style={{ color: hobbiesList[currentHobby].color }}>
                                  {React.createElement(hobbiesList[currentHobby].icon, { size: 48, strokeWidth: 1.5 })}
                                </div>
                                <span className="placeholder-text">Please put image into public{hobbiesList[currentHobby].images[currentImageIndex]}</span>
                              </div>
                            )}

                            {/* Image Pagination Number Overlay */}
                            <div className="hobbies-image-counter">
                              {currentImageIndex + 1}/{hobbiesList[currentHobby].images.length}
                            </div>
                          </div>

                        </div>

                        {/* Thumbnail Dots */}
                        <div className="hobbies-thumbnail-dots">
                          {hobbiesList[currentHobby].images.map((_, idx) => (
                            <button
                              key={idx}
                              className={`hobby-thumb-dot ${idx === currentImageIndex ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setCurrentImageIndex(idx)
                              }}
                              style={{ '--active-color': hobbiesList[currentHobby].color }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right: Description & Info */}
                      <div className="hobbies-details-panel">
                        <div className="hobby-title-row">
                          <div className="hobby-icon-box" style={{ backgroundColor: `${hobbiesList[currentHobby].color}15`, color: hobbiesList[currentHobby].color }}>
                            {React.createElement(hobbiesList[currentHobby].icon, { size: 24, strokeWidth: 1.5 })}
                          </div>
                          <div>
                            <h4 className="hobby-name-en">{hobbiesList[currentHobby].title}</h4>
                          </div>
                        </div>
                        <p className="hobby-desc-text">{hobbiesList[currentHobby].desc}</p>
                        
                        <div className="hobby-tip">
                          💡 Tip: Click the image or side arrows to switch photos
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Bottom Main Categories Navigation Indicator */}
              <div className="hobbies-bottom-nav">
                {hobbiesList.map((hobby, idx) => (
                  <button
                    key={idx}
                    className={`hobbies-tab-btn ${idx === currentHobby ? 'active' : ''}`}
                    style={{ '--tab-color': hobby.color }}
                    onClick={() => handleHobbyChange(idx)}
                  >
                    {hobby.title}
                  </button>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
