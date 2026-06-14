import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: "百度",
    companyEn: "Baidu, Inc. · Internship",
    role: "AI海外产品运营",
    roleEn: "AI Overseas Product Operations",
    time: "Apr 2026 - Present · 2 mos",
    location: "Beijing, China · On-site",
    description: [
      "AI应用创新与无代码搭建：熟练运用 MeDo 等前沿无代码开发工具，高效将创意转化为兼具高视觉反馈与流畅交互设计的创新 AI 应用。",
      "运营自动化与 Discord 生态建设：驱动全球用户增长并深度经营 Discord 官方社区；针对用户反馈散乱的痛点，自主设计Bug自动化 Skill，同时负责官方 Discord Bot 的功能配置与逻辑打通，成功构建“社区反馈-自动捕获-高效流转”的自动化工作流。",
      "海外全媒体内容冷启动与矩阵运营：独立主导海外主流新媒体账号（X/Twitter、官方 Blog、YouTube）的冷启动与内容生态建设。完成图片、文案、视频的多重内容制作。",
      "产品与市场调研：系统性地追踪、收集、分析主流竞品的功能亮点、应用场景及推广方式。"
    ]
  },
  {
    company: "生数科技",
    companyEn: "ShengShu · Internship",
    role: "海外用户运营",
    roleEn: "Overseas User Operations",
    time: "Mar 2026 - Apr 2026 · 2 mos",
    location: "Beijing, China · On-site",
    description: [
      "海外核心用户触达与生态搭建：聚焦全球顶尖 AI 视频大模型产品 Vidu 的海外推广，主导并执行海外核心视频创作者Creators与KOL的深度挖掘、商务触达与维护，巩固 Vidu 海外高粘性创作者生态。",
      "社群精细化运营与促活：运营海外创作者官方社群，通过策划专属活动与高频互动，提升社群活跃度，激励用户产出高质量 AI 视频内容。",
      "用户反馈协同与产品迭代：深度跟进海外用户与创作者的反馈及 Bug，建立高效的需求流转机制，定期输出优化报告，直接驱动产品的本土化迭代。"
    ]
  },
  {
    company: "安哲科技",
    companyEn: "Ancher · Internship",
    role: "海外内容运营",
    roleEn: "Overseas Content Operations",
    time: "Dec 2025 - Mar 2026 · 4 mos",
    location: "Beijing, China · On-site",
    description: [
      "产品内容中台建设与多端分发：负责 AI 聚合平台 Founder News 的后台内容架构管理；每日独立完成 30+ 条全球 AI 资讯的抓取、多维筛选与聚合分析，确保平台内容的高实效性与行业前瞻性。",
      "高信号 Newsletter 独立主理：独立主理 Substack Newsletter，累计采编并发送 40+ 期高信息密度内容；通过对 1500+ 条资讯的脱水整合，精准识别核心用户增长点，实现订阅用户增长。",
      "Prompt 闭环开发与 A/B 测试：针对不同海外社区语境，对提示词进行 8 个大版本及 100+ 次细分迭代；建立 50+ 条测试用例进行 A/B 测试，将模型生成内容的准确度与自然度提升 25%。"
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
              <span className="label-mono">02 — EXPERIENCE</span>
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
