import React from 'react'
import useGameStore from '../store/useGameStore'

function UpgradeShop() {
  const score = useGameStore((state) => state.score)
  const multiplier = useGameStore((state) => state.multiplier)
  const buyUpgrade = useGameStore((state) => state.buyUpgrade)

  const cost = multiplier * 10

  return (
    <div className="upgrade-shop">
      <h2>Upgrades</h2>
      <div className="upgrade">
        <div>
          <strong>Bigger Clicks</strong>
          <p>Each click earns +1 more point</p>
        </div>
        <button
          onClick={buyUpgrade}
          disabled={score < cost}
        >
          Buy ({cost} pts)
        </button>
      </div>
      <p className="multiplier-display">Current multiplier: x{multiplier}</p>
    </div>
  )
}

export default UpgradeShop
