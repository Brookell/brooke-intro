import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: "百度",
    companyEn: "Baidu, Inc. · Internship",
    role: "AI海外产品运营",
    roleEn: "Baidu, Inc. · Internship",
    time: "Apr 2026 - Present · 2 mos",
    location: "Beijing, China · On-site",
    description: [
      "负责AI大模型海外产品的日常运营与本地化策略制定，深度挖掘目标市场用户痛点，优化产品在不同国家 and 地区的本地化体验。",
      "通过用户行为数据分析，推进产品功能的迭代与优化，实现核心运营指标与海外活跃用户的显著增长。",
      "与跨职能团队高效协同，策划多元化海外推广方案，助力AI产品出海品牌影响力的全面提升。"
    ]
  },
  {
    company: "生数科技",
    companyEn: "ShengShu · Internship",
    role: "海外用户运营",
    roleEn: "ShengShu · Internship",
    time: "Mar 2026 - Apr 2026 · 2 mos",
    location: "Beijing, China · On-site",
    description: [
      "深度挖掘海外创作者及专业用户群体的需求，搭建高黏性的海外用户社群，策划并落地多场跨国社群创意运营活动。",
      "负责视觉大语言模型及AI生图/生视频产品的海外用户生命周期管理，建立健全海外用户反馈处理 with 需求转化机制。",
      "协同产研团队推进产品海外本地化版本升级，促进海外留存率及用户参与度的有效提升。"
    ]
  },
  {
    company: "安哲科技",
    companyEn: "Ancher · Internship",
    role: "海外内容运营",
    roleEn: "Ancher · Internship",
    time: "Dec 2025 - Mar 2026 · 4 mos",
    location: "Beijing, China",
    description: [
      "负责海外主流社媒平台（TikTok, Instagram, YouTube等）的账号矩阵孵化与长短期内容策略制定，产出高质量多媒体宣发内容。",
      "研究海外流行趋势 with 受众偏好，针对不同垂直领域进行本土化内容创作与翻译润色，提高内容曝光与粉丝转化率。",
      "监测海外社媒核心数据，根据内容反馈持续优化宣发逻辑，成功打造多款具有海外传播效应的爆款内容。"
    ]
  }
]

export default function SectionExperience() {
  return (
    <section id="experience" className="section experience-section" style={{ background: 'transparent' }}>
      {/* Ambient background glows specific to the experience section */}
      <div className="aura-blob aura-pink" style={{ top: '20%', right: '-15%', opacity: 0.08, width: '500px', height: '500px' }} />
      <div className="aura-blob aura-blue" style={{ bottom: '20%', left: '-15%', opacity: 0.06, width: '450px', height: '450px' }} />

      <div className="container">
        <div className="experience-grid">
          
          {/* ── Left Column: Sticky Editorial Heading ── */}
          <div className="experience-left">
            <div className="experience-title-sticky">
              <span className="label-mono">03 — Experience</span>
              <h2 className="experience-huge-title">
                INTERNSHIP<br />
                <span className="stroke-text">EXPERIENCE</span>
              </h2>
              <p className="experience-subtitle">
                A track record of driving user engagement, content strategy, and product optimization in cutting-edge AI and tech companies.
              </p>
            </div>
          </div>

          {/* ── Right Column: Timeline Path ── */}
          <div className="experience-right">
            <div className="timeline-container">
              {/* Vertical connection line */}
              <div className="timeline-spine-track">
                <div className="timeline-spine-glow" />
              </div>

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {/* Glowing Node on the timeline */}
                  <div className="timeline-node">
                    <div className="node-inner" />
                    <div className="node-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="timeline-card-wrapper">
                    <div className="timeline-card">
                      
                      <div className="timeline-card-header">
                        <div className="company-info" style={{ width: '100%' }}>
                          <div className="company-row">
                            <h3 className="role-title" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: '700', color: 'var(--text-primary)' }}>
                              {exp.role}
                            </h3>
                            <div className="experience-arrow">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px' }}>
                            <span style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                              {exp.company} · {exp.companyEn}
                            </span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                              {exp.time}
                            </span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="experience-desc-list">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="desc-bullet">
                            <span className="bullet-dot" />
                            <p>{bullet}</p>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
