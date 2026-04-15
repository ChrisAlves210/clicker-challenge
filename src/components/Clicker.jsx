import React from 'react'
import useGameStore from '../store/useGameStore'

function Clicker() {
  const click = useGameStore((state) => state.click)
  const multiplier = useGameStore((state) => state.multiplier)

  function handleClick() {
    click()
  }

  return (
    <div className="clicker">
      <button className="click-button" onClick={handleClick}>
        Click!
      </button>
      <p>+{multiplier} per click</p>
    </div>
  )
}

export default Clicker
