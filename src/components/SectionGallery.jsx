import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Code2, Orbit, FileText, BarChart3, Languages } from 'lucide-react'

const skillsList = [
  {
    title: "AI Product Operations",
    desc: "Overseas product localization, visual LLM community building, user lifecycle management, and data-driven product iterations. Hands-on experience at Baidu & ShengShu.",
    icon: Sparkles,
    tags: ["Product Ops", "Visual LLM", "Localization", "Community Curation"],
    isDark: true
  },
  {
    title: "Vibecoding & Prototyping",
    desc: "Rapid full-stack prototyping, interactive UI building, and agile web curation utilizing AI-agent workflows, React, Framer Motion, and Tailwind architectures.",
    icon: Code2,
    tags: ["Vibecoding", "React", "Framer Motion", "Vite"],
    isDark: false
  },
  {
    title: "Creative Development",
    desc: "Crafting immersive, highly responsive WebGL graphics, physics engines, interactive 3D elements, and smooth web storytelling with Three.js & GSAP.",
    icon: Orbit,
    tags: ["Three.js", "WebGL", "GSAP Animations", "Creative Coding"],
    isDark: true
  },
  {
    title: "Content Strategy & Curation",
    desc: "Multi-platform international media incubation, cinematic curations, and cultural critique writing (e.g. 'Reclaiming the Gaze' feminist film critique).",
    icon: FileText,
    tags: ["Content Matrix", "Curation", "Film Theory", "TikTok/Redbook"],
    isDark: false
  },
  {
    title: "Global Business Strategy",
    desc: "Deep theoretical research on multinational strategies, cross-border M&A price discrimination models, and global industry scope economics (Anta Group Case Study).",
    icon: BarChart3,
    tags: ["MIB", "M&A Strategy", "Economics of Scope", "Market Analysis"],
    isDark: true
  },
  {
    title: "Bilingual Communication",
    desc: "Fluent written and oral English & Chinese communication, enabling cross-border partnerships, global user community management, and localization campaigns.",
    icon: Languages,
    tags: ["Bilingual", "Cross-cultural", "Public Relations", "Team Lead"],
    isDark: false
  }
]

export default function SectionGallery() {
  return (
    <section id="skills" className="section gallery-section" style={{ background: 'transparent' }}>
      {/* Ambient atmospheric glows */}
      <div className="aura-blob aura-pink" style={{ top: '10%', right: '-10%', opacity: 0.07, width: '500px', height: '500px' }} />
      <div className="aura-blob aura-blue" style={{ bottom: '10%', left: '-10%', opacity: 0.06, width: '400px', height: '400px' }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-mono">04 — Expertise</span>
          <h2 className="title-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '10px' }}>
            SKILLS & ABILITIES
          </h2>
          <p className="text-serif" style={{ opacity: 0.6, marginBottom: '20px', maxWidth: '560px' }}>
            A multidisciplinary synthesis of AI operations, rapid technical prototyping, global market research, and creative curation.
          </p>
        </motion.div>

        {/* Bento Grid Skills Section */}
        <div className="skills-grid">
          {skillsList.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                className={`skills-card ${skill.isDark ? 'dark-card' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="skills-card-header">
                  <h3 className="skills-card-title">{skill.title}</h3>
                  <div className="skills-icon-wrapper">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="skills-card-body">
                  <p className="skills-card-desc">{skill.desc}</p>
                </div>

                <div className="skills-tags">
                  {skill.tags.map(tag => (
                    <span key={tag} className="skills-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
