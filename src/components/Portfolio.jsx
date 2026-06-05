import React from 'react'
import { motion } from 'framer-motion'
import { Eye, GlassWater, Feather, Music } from 'lucide-react'

const projects = [
  {
    title: "hergaze",
    tag: "Vibecoding / Cinema",
    desc: "A breathtaking feminist editorial cinema platform exploring visual theories, reclaiming the gaze, and curating deep film criticism through a stunning minimalist grid.",
    icon: <Eye />
  },
  {
    title: "Catpuccino",
    tag: "Vibecoding / Web App",
    desc: "A playful, tactile hydration logger for cats, crafted with beautiful fluid-physics animations, adorable micro-interactions, and visual health insights.",
    icon: <GlassWater />
  },
  {
    title: "Virginia Woolf Space",
    tag: "Vibecoding / Literature",
    desc: "An immersive stream-of-consciousness web experience celebrating Virginia Woolf's literary legacy, centering around the philosophy 'I am rooted, but I flow.'",
    icon: <Feather />
  },
  {
    title: "Cosmic Vinyl",
    tag: "Vibecoding / Music",
    desc: "A gesture-controlled 3D audio gallery integrating MediaPipe hand tracking, Three.js spatial canvas, and the Web Audio API for an immersive vinyl browsing experience.",
    icon: <Music />
  }
]

export default function Portfolio() {
  return (
    <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <span className="label-mono">03 — Portfolio</span>
        <h2 className="title-main" style={{ fontSize: '4rem' }}>SELECTED WORK</h2>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card portfolio-item"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="label-mono">{project.tag}</span>
                  {project.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginTop: '20px' }}>{project.title}</h3>
              </div>
              <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' }}>
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <p className="quote-serif" style={{ fontSize: '1.5rem', opacity: 0.6 }}>
            "Designing for the intersection of grit and fluid intelligence."
          </p>
        </div>
      </div>
    </section>
  )
}
