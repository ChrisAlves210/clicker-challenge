import React from 'react'
import { useSelector } from 'react-redux'

function Leaderboard() {
  const scores = useSelector((state) => state.leaderboard)

  return (
    <section className="leaderboard">
      <h2>Top Scores</h2>
      {scores.length === 0 ? (
        <p className="leaderboard-empty">No scores submitted yet.</p>
      ) : (
        <ol className="leaderboard-list">
          {scores.map((score, index) => (
            <li key={`${score}-${index}`}>{score}</li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default Leaderboard