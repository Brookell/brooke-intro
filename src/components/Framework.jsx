import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  { name: 'Bold', desc: 'Decisive action and competitive courage.', context: 'National Table Tennis Athlete experience.' },
  { name: 'Relational', desc: 'Deep emotional resonance and human connection.', context: 'Digital mentorship and soul friendships.' },
  { name: 'Observant', desc: 'A keen eye for patterns and signals.', context: 'Film theory, MIB research, and strategy.' },
  { name: 'Organic', desc: 'Growth that follows natural rhythms.', context: 'Skeuomorphic design and Vibe Coding.' },
  { name: 'Keen', desc: 'High-signal curiosity and sharp focus.', context: 'AI tech and IELTS 8.0 ambition.' },
  { name: 'Endurance', desc: 'The "Rooted" foundation of grit.', context: 'GPA 3.85 and athletic training.' },
]

export default function Framework() {
  return (
    <section className="section">
      <div className="container">
        <span className="label-mono">02 — The BROOKE Framework</span>
        <h2 className="title-main" style={{ fontSize: '4rem' }}>IDENTITY PILLARS</h2>
        
        <div className="framework-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card pillar-card"
            >
              <div>
                <span className="label-mono" style={{ color: 'var(--accent-gold)' }}>0{index + 1}</span>
                <h3 className="pillar-name">{pillar.name}</h3>
              </div>
              <div>
                <p style={{ fontWeight: '500', marginBottom: '8px' }}>{pillar.desc}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, borderTop: '1px solid var(--glass-border)', paddingTop: '8px' }}>
                  {pillar.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
