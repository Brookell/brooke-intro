import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, Globe } from 'lucide-react'

export default function About() {
  return (
    <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-mono">01 — Profile</span>
            <h2 className="title-main" style={{ fontSize: '4rem' }}>DYNAMIC<br />STABILITY</h2>
            <div className="glass-card" style={{ marginTop: '30px' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Brooke is a Master of International Business candidate at <strong>Beijing Foreign Studies University</strong> and a <strong>National Excellent Athlete</strong>. 
                Her identity is defined by maintaining a solid academic and physical foundation while fluidly navigating the frontiers of AI, film theory, and interactive design.
              </p>
            </div>
          </motion.div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Award size={40} color="var(--accent-gold)" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>National Excellent Athlete</h4>
                <p style={{ opacity: 0.7 }}>Physical grit and competitive courage.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Globe size={40} color="var(--accent-blue)" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Master of International Business</h4>
                <p style={{ opacity: 0.7 }}>Global perspective and academic excellence.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <User size={40} color="white" />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>AI & Vibe Coder</h4>
                <p style={{ opacity: 0.7 }}>Navigating the digital consciousness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
