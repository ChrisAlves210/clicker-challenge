import React from 'react'
import useGameStore from '../store/useGameStore'

function Header() {
  const score = useGameStore((state) => state.score)
  const highScore = useGameStore((state) => state.highScore)
  const totalClicks = useGameStore((state) => state.clicks)

  return (
    <header className="header">
      <h1>Clicker Game</h1>
      <div className="header-stats">
        <span className="header-score">Score: {score}</span>
        <span className="header-clicks">High score: {highScore}</span>
        <span className="header-clicks">Total clicks: {totalClicks}</span>
      </div>
    </header>
  )
}

export default Header
