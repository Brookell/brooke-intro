import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Zap, Mail, Linkedin, Github, MessageCircle, BookOpen, ChevronUp, ChevronDown } from 'lucide-react'
import { smoothScrollTo } from '../utils/scroll'

const stats = [
  { number: '3.85', label: 'GPA SCORE' },
  { number: '8+', label: 'YEARS OF\nATHLETICS' },
  { number: '5+', label: 'PROJECTS\nCOMPLETED' },
]

export default function SectionAbout() {
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
              >
                <span className="feature-icon"><GraduationCap size={32} strokeWidth={1.5} /></span>
                <h4 className="feature-title">ACADEMIC RESEARCH,<br/>MIB STRATEGY</h4>
              </motion.div>
              
              <motion.div 
                className="feature-card feature-card-cyan"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="feature-icon"><Zap size={32} strokeWidth={1.5} /></span>
                <h4 className="feature-title">AI PRODUCT OPS,<br/>CREATIVE CODING</h4>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  )
}
