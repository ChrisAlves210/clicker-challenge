import React from 'react'
import Clicker from './Clicker'
import UpgradeShop from './UpgradeShop'
import Leaderboard from './Leaderboard'

function GameArea() {
  return (
    <div className="game-area">
      <Clicker />
      <UpgradeShop />
      <Leaderboard />
    </div>
  )
}

export default GameArea
