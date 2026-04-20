import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitScore } from '../store/leaderboardSlice'

function Header() {
  const dispatch = useDispatch()
  const score = useSelector((state) => state.game.score)
  const highScore = useSelector((state) => state.game.highScore)
  const totalClicks = useSelector((state) => state.game.clicks)

  function handleSubmitScore() {
    dispatch(submitScore(score))
  }

  return (
    <header className="header">
      <h1>Clicker Game</h1>
      <div className="header-stats">
        <span className="header-score">Score: {score}</span>
        <span className="header-clicks">High score: {highScore}</span>
        <span className="header-clicks">Total clicks: {totalClicks}</span>
        <button className="submit-score-button" onClick={handleSubmitScore}>
          Submit Score
        </button>
      </div>
    </header>
  )
}

export default Header
