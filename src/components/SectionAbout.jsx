import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Zap, Mail, Linkedin, Github, MessageCircle, BookOpen, ChevronUp, ChevronDown, Sparkles, Code2, Orbit, FileText, BarChart3, Languages } from 'lucide-react'
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

export default function SectionAbout() {
  const [showEduModal, setShowEduModal] = useState(false)
  const [showSkillsModal, setShowSkillsModal] = useState(false)

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
              Liao Yuxin<br />
              Brooke
            </h3>

            <p className="profile-bio">
              A passionate MIB candidate and national table tennis athlete who bridges academic rigor with creative digital exploration.
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
              <h2 className="about-heading">
                DYNAMIC<br />
                <span className="about-heading-accent">STABILITY</span>
              </h2>
              <p className="about-description">
                Passionate about creating intuitive and engaging experiences. 
                Specializing in transforming ideas into beautifully crafted products — 
                from academic research to AI product operations and creative coding.
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
            <div className="feature-cards-row">
              <motion.div 
                className="feature-card feature-card-pink"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={() => setShowEduModal(true)}
              >
                <span className="feature-icon"><GraduationCap size={32} strokeWidth={1.5} /></span>
                <h4 className="feature-title">EDUCATIONAL BACKGROUND</h4>
              </motion.div>
              
              <motion.div 
                className="feature-card feature-card-cyan"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={() => setShowSkillsModal(true)}
              >
                <span className="feature-icon"><Zap size={32} strokeWidth={1.5} /></span>
                <h4 className="feature-title">SKILLS & EXPERTISE</h4>
              </motion.div>
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

    </section>
  )
}
