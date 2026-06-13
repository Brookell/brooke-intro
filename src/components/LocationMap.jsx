"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import "./LocationMap.css"

export function LocationMap({
  location = "北京外国语大学",
  coordinates = "39.9575° N, 116.3075° E",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`location-map-container ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="location-map-card"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 360 : 240,
          height: isExpanded ? 240 : 140, // 调整了展开高度以更好地适应容器排版
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* 渐变遮罩 */}
        <div className="location-map-gradient" />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="location-map-expanded-area"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="location-map-bg-muted" />

              <svg className="location-map-svg" preserveAspectRatio="none">
                {/* 西三环北路 */}
                <motion.line
                  x1="22%"
                  y1="0%"
                  x2="22%"
                  y2="100%"
                  className="location-map-road-main-1"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* 魏公村路 */}
                <motion.line
                  x1="0%"
                  y1="38%"
                  x2="100%"
                  y2="38%"
                  className="location-map-road-main-1"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* 中关村南大街 */}
                <motion.line
                  x1="88%"
                  y1="0%"
                  x2="88%"
                  y2="100%"
                  className="location-map-road-main-2"
                  strokeWidth="3.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                {/* 民族大学南路 */}
                <motion.line
                  x1="0%"
                  y1="85%"
                  x2="100%"
                  y2="85%"
                  className="location-map-road-main-2"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* 其他小支路 */}
                <motion.line
                  x1="45%"
                  y1="38%"
                  x2="45%"
                  y2="85%"
                  className="location-map-road-sub"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                <motion.line
                  x1="22%"
                  y1="18%"
                  x2="88%"
                  y2="18%"
                  className="location-map-road-sub"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </svg>

              {/* 建筑物模块 */}
              {/* 万寿寺 */}
              <motion.div
                className="location-map-building"
                style={{ top: "88%", left: "5%", width: "12%", height: "10%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
              {/* 北京理工大学 */}
              <motion.div
                className="location-map-building"
                style={{ top: "10%", left: "45%", width: "16%", height: "18%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
              {/* 中央民族大学 */}
              <motion.div
                className="location-map-building"
                style={{ top: "52%", left: "68%", width: "16%", height: "22%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              {/* 北京舞蹈学院 */}
              <motion.div
                className="location-map-building"
                style={{ top: "88%", left: "55%", width: "18%", height: "10%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              />

              {/* 定位销钉 (北京外国语大学东区) */}
              <motion.div
                className="location-map-pin-container"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="location-map-pin-svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#34D399" />
                  <circle cx="12" cy="9" r="2.5" fill="#f3f4f6" />
                </svg>
              </motion.div>

              {/* 道路名称标签 */}
              <motion.div
                className="location-map-label-vertical"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                style={{ left: "24%" }}
              >
                西三环北路
              </motion.div>

              <motion.div
                className="location-map-label-horizontal"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                style={{ top: "32%", left: "32%" }}
              >
                魏公村路
              </motion.div>

              {/* 地铁站标注 */}
              {/* 苏州桥地铁站 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "25%", top: "7%", display: "flex", alignItems: "center", gap: "2px", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#3b82f6" }} />
                <span style={{ fontSize: "7px", color: "#3b82f6", fontWeight: "600" }}>苏州桥站</span>
              </motion.div>

              {/* 魏公村地铁站 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "74%", top: "22%", display: "flex", alignItems: "center", gap: "2px", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <span style={{ fontSize: "7px", color: "#3b82f6", fontWeight: "600" }}>魏公村站</span>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#3b82f6" }} />
              </motion.div>

              {/* 万寿寺地铁站 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "25%", top: "86%", display: "flex", alignItems: "center", gap: "2px", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#3b82f6" }} />
                <span style={{ fontSize: "7px", color: "#3b82f6", fontWeight: "600" }}>万寿寺站</span>
              </motion.div>

              {/* 周边地标标注 */}
              {/* 北京理工大学 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "48%", top: "15%", fontSize: "8px", color: "rgba(0, 0, 0, 0.45)", fontWeight: "500", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                北京理工大学
              </motion.div>

              {/* 中央民族大学 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "65%", top: "52%", fontSize: "8px", color: "rgba(0, 0, 0, 0.45)", fontWeight: "500", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                中央民族大学
              </motion.div>

              {/* 万寿寺 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "5%", top: "78%", fontSize: "8px", color: "rgba(0, 0, 0, 0.45)", fontWeight: "500", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                万寿寺
              </motion.div>

              {/* 北京舞蹈学院 */}
              <motion.div
                className="location-map-landmark"
                style={{ position: "absolute", left: "55%", top: "78%", fontSize: "8px", color: "rgba(0, 0, 0, 0.45)", fontWeight: "500", pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
              >
                北京舞蹈学院
              </motion.div>

              <div className="location-map-gradient" style={{ background: "linear-gradient(to top, #f3f4f6, transparent, transparent)" }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 网格背景 */}
        <motion.div
          className="location-map-grid-overlay"
          animate={{ opacity: isExpanded ? 0 : 0.03 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="location-map-grid-svg">
            <defs>
              <pattern id="grid-portfolio" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" className="location-map-grid-path" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-portfolio)" />
          </svg>
        </motion.div>

        {/* 内容布局 */}
        <div className="location-map-content">
          <div className="location-map-top">
            <div style={{ position: "relative" }}>
              <motion.div
                style={{ position: "relative" }}
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500"
                  animate={{
                    filter: isHovered
                      ? "drop-shadow(0 0 8px rgba(52, 211, 153, 0.4))"
                      : "drop-shadow(0 0 4px rgba(52, 211, 153, 0.2))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </motion.svg>
              </motion.div>
            </div>

            <motion.div
              className="location-map-status"
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="location-map-status-dot" />
              <span className="location-map-status-text">Live</span>
            </motion.div>
          </div>

          <div className="location-map-bottom">
            <motion.h3
              className="location-map-h3"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "3px" }}>
                  <motion.p
                    key="district"
                    className="location-map-district"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    style={{ fontSize: "10px", color: "rgba(0, 0, 0, 0.55)", margin: "0", fontWeight: "600", letterSpacing: "0.02em" }}
                  >
                    北京市海淀区
                  </motion.p>
                  <motion.p
                    key="coords"
                    className="location-map-coords"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    style={{ margin: "0" }}
                  >
                    {coordinates}
                  </motion.p>
                </div>
              )}
            </AnimatePresence>

            <motion.div
              className="location-map-underline"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      <motion.p
        className="location-map-hint"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered && !isExpanded ? 1 : 0,
          y: isHovered ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>
    </motion.div>
  )
}
