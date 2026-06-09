import React from 'react'
import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'

export default function Hero() {
  return (
    <section className="section">
      <ThreeScene />
      
      {/* 3D Canvas Interaction Hint */}
      <div className="three-interaction-hint">
        <span className="hint-icon">✦</span>
        <span className="hint-text">两指缩放，三指旋转 3D 空间</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-content"
        >
          <span className="label-mono">Brooke (廖雨鑫) — 2026</span>
          <h1 className="title-main">
            ROOTED<br />
            BUT I FLOW.
          </h1>
          <p className="quote-serif">
            "I am rooted, but I flow." — Virginia Woolf
          </p>
          
          <div className="glass-card" style={{ maxWidth: '500px', padding: '24px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>
              Bridging the gap between the physical grit of a national athlete 
              and the digital consciousness of a Vibe Coder.
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-footer">
        <div className="label-mono" style={{ color: 'var(--accent-gold)' }}>[ NATIONAL ATHLETE ]</div>
        <div className="label-mono" style={{ color: 'var(--text-primary)' }}>[ AI EXPLORER ]</div>
        <div className="label-mono" style={{ color: 'var(--text-secondary)' }}>[ VIBE CODER ]</div>
      </div>
    </section>
  )
}
