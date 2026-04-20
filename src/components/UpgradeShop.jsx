import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyUpgrade } from '../store/gameSlice'

function UpgradeShop() {
  const dispatch = useDispatch()
  const score = useSelector((state) => state.game.score)
  const multiplier = useSelector((state) => state.game.multiplier)

  const cost = multiplier * 10

  function handleBuyUpgrade() {
    dispatch(buyUpgrade())
  }

  return (
    <div className="upgrade-shop">
      <h2>Upgrades</h2>
      <div className="upgrade">
        <div>
          <strong>Bigger Clicks</strong>
          <p>Each click earns +1 more point</p>
        </div>
        <button
          onClick={handleBuyUpgrade}
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
