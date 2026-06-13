import React, { useEffect, useRef } from "react"
import "./RippleGrid.css"

const FONT = {
  A:[0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  C:[0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0, 0,1,1,1,1],
  E:[1,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,1],
  F:[1,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,1,1,1,0, 1,0,0,0,0, 1,0,0,0,0, 1,0,0,0,0],
  G:[0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 1,0,1,1,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,1],
  H:[1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  I:[1,1,1,1,1, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 1,1,1,1,1],
  K:[1,0,0,0,1, 1,0,0,1,0, 1,0,1,0,0, 1,1,0,0,0, 1,0,1,0,0, 1,0,0,1,0, 1,0,0,0,1],
  N:[1,0,0,0,1, 1,1,0,0,1, 1,0,1,0,1, 1,0,0,1,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1],
  O:[0,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  R:[1,1,1,1,0, 1,0,0,0,1, 1,0,0,0,1, 1,1,1,1,0, 1,0,1,0,0, 1,0,0,1,0, 1,0,0,0,1],
  S:[0,1,1,1,1, 1,0,0,0,0, 1,0,0,0,0, 0,1,1,1,0, 0,0,0,0,1, 0,0,0,0,1, 1,1,1,1,0],
  T:[1,1,1,1,1, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
  U:[1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 1,0,0,0,1, 0,1,1,1,0],
  Y:[1,0,0,0,1, 1,0,0,0,1, 0,1,0,1,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,0,1,0,0],
}

const COLS = 57
const ROWS = 9
const PHRASES = ["THANK YOU", "FOR YOUR", "CURIOSITY"]

function phraseWidth(phrase) {
  let w = 0
  for (const ch of phrase) w += ch === " " ? 4 : 6
  return w - 1
}

function buildSet(phrase) {
  const set = new Set()
  const startCol = Math.floor((COLS - phraseWidth(phrase)) / 2)
  let col = startCol
  for (const ch of phrase) {
    if (ch === " ") {
      col += 4
      continue
    }
    const b = FONT[ch]
    if (!b) {
      col += 6
      continue
    }
    for (let i = 0; i < 35; i++) {
      if (b[i]) set.add(`${1 + Math.floor(i / 5)},${col + (i % 5)}`)
    }
    col += 6
  }
  return set
}

const phraseSets = PHRASES.map(buildSet)

export function RippleGrid() {
  const gridRef = useRef(null)
  const stepRef = useRef(0)
  const pendingTimeoutsRef = useRef([])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    // Use 18px like the original for crisp, smooth animation
    grid.style.gridTemplateColumns = `repeat(${COLS}, 18px)`
    grid.style.gridTemplateRows = `repeat(${ROWS}, 18px)`
    grid.innerHTML = ""

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = document.createElement("div")
        cell.className = "ripple-grid-cell"
        cell.dataset.row = r
        cell.dataset.col = c
        grid.appendChild(cell)
      }
    }

    // Trigger ripple from a given cell
    function triggerRipple(targetCell) {
      // Cancel any in-progress animation timeouts
      pendingTimeoutsRef.current.forEach(clearTimeout)
      pendingTimeoutsRef.current = []

      // Clear all states immediately — no transitions involved
      const allCells = grid.querySelectorAll(".ripple-grid-cell")
      allCells.forEach((c) => {
        c.classList.remove("lit", "pulse")
      })

      const targetSet = phraseSets[stepRef.current]
      stepRef.current = (stepRef.current + 1) % PHRASES.length

      const cr = parseInt(targetCell.dataset.row)
      const cc = parseInt(targetCell.dataset.col)

      allCells.forEach((cell) => {
        const r = parseInt(cell.dataset.row)
        const c = parseInt(cell.dataset.col)
        const d = Math.abs(r - cr) + Math.abs(c - cc)
        const key = `${r},${c}`

        const t1 = setTimeout(() => {
          if (targetSet.has(key)) {
            cell.classList.add("lit")
          } else {
            cell.classList.add("pulse")
            const t2 = setTimeout(() => cell.classList.remove("pulse"), 400)
            pendingTimeoutsRef.current.push(t2)
          }
        }, d * 25)

        pendingTimeoutsRef.current.push(t1)
      })
    }

    // Auto-trigger on load from center
    const cells = grid.querySelectorAll(".ripple-grid-cell")
    const centerIdx = Math.floor(ROWS / 2) * COLS + Math.floor(COLS / 2)
    const centerCell = cells[centerIdx]
    if (centerCell) {
      setTimeout(() => {
        triggerRipple(centerCell)
      }, 300)
    }

    // Click handler
    function handleClick(e) {
      const target = e.target
      if (!target.classList.contains("ripple-grid-cell")) return
      triggerRipple(target)
    }

    grid.addEventListener("click", handleClick)

    return () => {
      grid.removeEventListener("click", handleClick)
      pendingTimeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="ripple-grid-wrapper">
      <div id="grid" ref={gridRef} className="ripple-grid-container" />
      <div className="ripple-grid-hint">Click the grid to ripple text</div>
    </div>
  )
}
