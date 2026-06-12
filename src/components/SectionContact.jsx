import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, Github, Linkedin, BookOpen } from 'lucide-react'
import { smoothScrollTo } from '../utils/scroll'

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
        
        {/* Section Header */}
        <div className="contact-header-new" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="label-mono">05 — Get In Touch</span>
          <h2 className="title-display" style={{ fontSize: 'clamp(2.0rem, 5vw, 3.8rem)', textTransform: 'uppercase', marginBottom: '10px', wordSpacing: '0.15em' }}>
            Thank you for your curiosity
          </h2>
        </div>

        <div className="contact-grid-new">
          
          {/* Left Side: Contact Information Card */}
          <div className="contact-info-card-new">
            <h3 className="contact-info-title-new">Contact Information</h3>
            <p className="contact-info-desc-new">
              Let's build something extraordinary together. Reach out via email, phone, or find me at BFSU.
            </p>

            <div className="contact-details-list-new">
              
              <div className="contact-detail-item-new">
                <div className="contact-detail-icon-new">
                  <Phone size={18} strokeWidth={2} />
                </div>
                <div className="contact-detail-content-new">
                  <span className="contact-detail-label-new">Phone Number</span>
                  <a href="tel:+8615874242681" className="contact-detail-link-new">
                    +86 158 7424 2681
                  </a>
                </div>
              </div>

              <div className="contact-detail-item-new">
                <div className="contact-detail-icon-new">
                  <Mail size={18} strokeWidth={2} />
                </div>
                <div className="contact-detail-content-new">
                  <span className="contact-detail-label-new">Email Address</span>
                  <a href="mailto:brookel0619@163.com" className="contact-detail-link-new">
                    brookel0619@163.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item-new">
                <div className="contact-detail-icon-new">
                  <Clock size={18} strokeWidth={2} />
                </div>
                <div className="contact-detail-content-new">
                  <span className="contact-detail-label-new">Response Time</span>
                  <span className="contact-detail-text-new">
                    Usually replies within 24 hours
                  </span>
                </div>
              </div>

              <div className="contact-detail-item-new">
                <div className="contact-detail-icon-new">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <div className="contact-detail-content-new">
                  <span className="contact-detail-label-new">Our Location</span>
                  <span className="contact-detail-text-new">
                    East Campus of Beijing Foreign Studies University, Beijing, China
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Contact Form */}
          {/* Right Side: Contact Form */}
          <div className="contact-form-card-new">
            <div className="contact-form-badge-new">
              <span className="badge-dot-new">✦</span> Get In Touch
            </div>
            <h3 className="contact-form-title-new">Send a Message</h3>
            
            {submitted ? (
              <motion.div 
                className="contact-success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="success-icon-new">✦</span>
                <h4>Thank You!</h4>
                <p>Your message has been sent successfully. I will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-new">
                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Your email address" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-new">
                  <div className="form-group-new">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="text" 
                      id="phone" 
                      placeholder="Your phone number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group-new">
                    <label htmlFor="topic">Topic of Interest</label>
                    <select 
                      id="topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    >
                      <option value="General Collaboration">General Collaboration</option>
                      <option value="AI / Product Operations">AI / Product Operations</option>
                      <option value="Creative Coding Prototyping">Creative Coding / Prototyping</option>
                      <option value="Table Tennis / Sports Coaching">Table Tennis / Sports</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-new full-width-new">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Tell me about your project or inquiry..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn-new">
                  Send Message <Send size={14} style={{ marginLeft: '6px' }} />
                </button>
              </form>
            )}
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
                <li><span>Table Tennis (Athlete)</span></li>
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
