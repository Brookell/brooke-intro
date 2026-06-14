import React, { useState, useEffect } from 'react'

export default function CuriosityColorPicker() {
  const [isOpen, setIsOpen] = useState(true)
  const [color1, setColor1] = useState('#ff5555')
  const [color2, setColor2] = useState('#00e5ff')
  const [angle, setAngle] = useState(135)
  const [mode, setMode] = useState('gradient') // 'gradient' | 'solid'

  useEffect(() => {
    // 动态注入样式覆盖
    let styleTag = document.getElementById('curiosity-color-override')
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'curiosity-color-override'
      document.head.appendChild(styleTag)
    }

    if (mode === 'gradient') {
      styleTag.textContent = `
        .portfolio-title-gradient .text-rotate-element {
          background: linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
      `
    } else {
      styleTag.textContent = `
        .portfolio-title-gradient .text-rotate-element {
          background: none !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: ${color1} !important;
          color: ${color1} !important;
        }
      `
    }
  }, [color1, color2, angle, mode])

  // 复制CSS代码
  const copyCSS = () => {
    const css = mode === 'gradient'
      ? `background: linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%);`
      : `color: ${color1};`
    navigator.clipboard.writeText(css).then(() => {
      alert('CSS已复制到剪贴板！')
    })
  }

  const presets = [
    { name: '粉红→蓝', c1: '#ff5555', c2: '#00e5ff', angle: 135 },
    { name: '主题粉色', c1: '#fe8989', c2: '#fe8989', angle: 135 },
    { name: '紫→粉', c1: '#d4a0ff', c2: '#ff7eb3', angle: 135 },
    { name: '金→橙', c1: '#f7c948', c2: '#ff8c42', angle: 135 },
    { name: '绿→青', c1: '#56e39f', c2: '#45b7d1', angle: 135 },
    { name: '纯黑', c1: '#1c1716', c2: '#1c1716', angle: 135 },
  ]

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 99999,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* 触发按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: 'none',
          background: `linear-gradient(135deg, ${color1}, ${color2})`,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease',
          zIndex: 1,
        }}
        title="调整 CURIOSITY 颜色"
      >
        🎨
      </button>

      {/* 面板 */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '60px',
          right: 0,
          width: '280px',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {/* 标题 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1c1716', letterSpacing: '0.02em' }}>
              🎨 CURIOSITY 颜色
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#999', padding: '0 4px' }}
            >×</button>
          </div>

          {/* 预览 */}
          <div style={{
            padding: '12px 16px',
            borderRadius: '12px',
            background: '#FAF8F5',
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
          }}>
            <span style={{
              background: mode === 'gradient'
                ? `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`
                : 'none',
              WebkitBackgroundClip: mode === 'gradient' ? 'text' : 'unset',
              WebkitTextFillColor: mode === 'gradient' ? 'transparent' : color1,
              color: mode === 'solid' ? color1 : undefined,
            }}>
              CURIOSITY.
            </span>
          </div>

          {/* 模式切换 */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['gradient', 'solid'].map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1,
                  padding: '6px 0',
                  border: '1px solid',
                  borderColor: mode === m ? '#fe8989' : 'rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  background: mode === m ? 'rgba(254,137,137,0.1)' : 'transparent',
                  color: mode === m ? '#fe8989' : '#666',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {m === 'gradient' ? '渐变色' : '纯色'}
              </button>
            ))}
          </div>

          {/* 颜色选择器 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontSize: '0.78rem', color: '#666', width: '48px', flexShrink: 0 }}>
                {mode === 'gradient' ? '起始色' : '颜色'}
              </label>
              <input
                type="color"
                value={color1}
                onChange={e => setColor1(e.target.value)}
                style={{ width: '36px', height: '28px', border: 'none', borderRadius: '6px', cursor: 'pointer', padding: 0 }}
              />
              <input
                type="text"
                value={color1}
                onChange={e => /^#[0-9A-Fa-f]{0,6}$/.test(e.target.value) && setColor1(e.target.value)}
                style={{
                  flex: 1,
                  padding: '4px 8px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontFamily: 'monospace',
                  color: '#1c1716',
                  background: 'rgba(0,0,0,0.02)',
                }}
              />
            </div>

            {mode === 'gradient' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label style={{ fontSize: '0.78rem', color: '#666', width: '48px', flexShrink: 0 }}>结束色</label>
                <input
                  type="color"
                  value={color2}
                  onChange={e => setColor2(e.target.value)}
                  style={{ width: '36px', height: '28px', border: 'none', borderRadius: '6px', cursor: 'pointer', padding: 0 }}
                />
                <input
                  type="text"
                  value={color2}
                  onChange={e => /^#[0-9A-Fa-f]{0,6}$/.test(e.target.value) && setColor2(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '4px 8px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontFamily: 'monospace',
                    color: '#1c1716',
                    background: 'rgba(0,0,0,0.02)',
                  }}
                />
              </div>
            )}

            {mode === 'gradient' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label style={{ fontSize: '0.78rem', color: '#666', width: '48px', flexShrink: 0 }}>角度</label>
                <input
                  type="range"
                  min={0} max={360}
                  value={angle}
                  onChange={e => setAngle(Number(e.target.value))}
                  style={{ flex: 1, accentColor: '#fe8989' }}
                />
                <span style={{ fontSize: '0.78rem', color: '#666', width: '36px', textAlign: 'right' }}>{angle}°</span>
              </div>
            )}
          </div>

          {/* 预设方案 */}
          <div>
            <p style={{ fontSize: '0.75rem', color: '#999', marginBottom: '8px', fontWeight: 600 }}>快速预设</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {presets.map(p => (
                <button
                  key={p.name}
                  onClick={() => { setColor1(p.c1); setColor2(p.c2); setAngle(p.angle); setMode(p.c1 === p.c2 ? 'solid' : 'gradient') }}
                  style={{
                    padding: '6px 8px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(0,0,0,0.02)',
                    color: '#444',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(254,137,137,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                >
                  <span style={{
                    width: '14px', height: '14px', borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg, ${p.c1}, ${p.c2})`,
                  }} />
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* 复制CSS */}
          <button
            onClick={copyCSS}
            style={{
              padding: '8px',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '10px',
              background: 'transparent',
              color: '#666',
              fontSize: '0.78rem',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1c1716'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666' }}
          >
            复制 CSS 代码
          </button>
        </div>
      )}
    </div>
  )
}
