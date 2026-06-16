import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, Github, Linkedin, BookOpen } from 'lucide-react'
import { smoothScrollTo } from '../utils/scroll'
import { LocationMap } from './LocationMap'
import { RippleGrid } from './RippleGrid'

export default function SectionContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Collaboration',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', topic: 'General Collaboration', message: '' })
    }, 3000)
  }

  return (
    <section id="footer" className="section contact-section-new">
      <div className="container">
        
        {/* Section Header with Ripple Grid */}
        <div className="contact-header-new" style={{ textAlign: 'center', marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="label-mono" style={{ marginBottom: '15px' }}>05 — CONTACT</span>
          <RippleGrid />
        </div>

        <div className="contact-grid-new">
          
          {/* Left Side: Contact Information Card */}
          <div className="contact-info-card-new">
            <div className="contact-card-split">
              <div className="contact-card-left">
                <h3 className="contact-info-title-new" style={{ marginBottom: '25px' }}>Contact Information</h3>

                <div className="contact-details-list-new">
                  <div className="contact-detail-item-new">
                    <div className="contact-detail-icon-new">
                      <Phone size={18} strokeWidth={2} />
                    </div>
                    <div className="contact-detail-content-new">
                      <span className="contact-detail-label-new">PHONE NUMBER</span>
                      <a href="tel:+8615874242681" className="contact-detail-link-new" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
                        +86 158 7424 2681
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-item-new">
                    <div className="contact-detail-icon-new">
                      <Mail size={18} strokeWidth={2} />
                    </div>
                    <div className="contact-detail-content-new">
                      <span className="contact-detail-label-new">EMAIL ADDRESS</span>
                      <a href="mailto:brookel0619@163.com" className="contact-detail-link-new" style={{ fontWeight: 600, fontSize: '1.05rem' }}>
                        brookel0619@163.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-item-new">
                    <div className="contact-detail-icon-new">
                      <MapPin size={18} strokeWidth={2} />
                    </div>
                    <div className="contact-detail-content-new">
                      <span className="contact-detail-label-new">LOCATION</span>
                      <span className="contact-detail-text-new" style={{ fontWeight: 600, fontSize: '1.05rem', color: '#1c1716' }}>
                        Beijing Foreign Studies University
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card-right">
                <LocationMap location="北京外国语大学" coordinates="39.9575° N, 116.3075° E" />
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-advanced">
          {/* Logo row with lines */}
          <div className="footer-logo-row">
            <div className="footer-line"></div>
            <div className="footer-logo-brand" onClick={() => smoothScrollTo('home', 1200, 70)} style={{ cursor: 'pointer' }}>
              BROOKE LIAO
            </div>
            <div className="footer-line"></div>
          </div>

          {/* Three-column content */}
          <div className="footer-content-grid">
            {/* Left: MENU */}
            <div className="footer-col footer-col-left">
              <h4 className="footer-col-title">MENU</h4>
              <ul className="footer-links-list">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); smoothScrollTo('home', 1200, 70); }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about', 1200, 70); }}>About</a></li>
                <li><a href="#gallery" onClick={(e) => { e.preventDefault(); smoothScrollTo('gallery', 1200, 70); }}>Gallery</a></li>
                <li><a href="#footer" onClick={(e) => { e.preventDefault(); smoothScrollTo('footer', 1200, 70); }}>Contact</a></li>
              </ul>
            </div>

            {/* Center: Socials */}
            <div className="footer-col footer-col-center" style={{ justifyContent: 'center' }}>
              <span className="footer-social-tagline" style={{ fontSize: '0.8rem', color: 'rgba(15, 15, 15, 0.45)', fontWeight: '500', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Discover a different side of BROOKE
              </span>
              <div className="footer-social-circles">
                <a href="https://github.com/Brookell" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="GitHub">
                  <Github size={16} strokeWidth={2} />
                </a>
                <a href="https://www.linkedin.com/in/brooke-liao0619/" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="LinkedIn">
                  <Linkedin size={16} strokeWidth={2} />
                </a>
                <a href="https://www.xiaohongshu.com/user/profile/5f24e9e4000000000101dcc2" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="小红书">
                  <BookOpen size={16} strokeWidth={2} />
                </a>
                <a href="mailto:brookel0619@163.com" className="social-circle-btn" title="Email">
                  <Mail size={16} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Right: FOCUS */}
            <div className="footer-col footer-col-right">
              <h4 className="footer-col-title">FOCUS</h4>
              <ul className="footer-links-list">
                <li><span>AI Product Ops</span></li>
                <li><span>Creative Coding</span></li>
                <li><span>Table Tennis</span></li>
                <li><span>MIB Strategy</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="footer-bottom-copyright">
            © BROOKE LIAO 2026 | All rights Reserved.
          </div>
        </footer>

      </div>
    </section>
  )
}
