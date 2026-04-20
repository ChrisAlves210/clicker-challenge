import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { click } from '../store/gameSlice'

function Clicker() {
  const dispatch = useDispatch()
  const multiplier = useSelector((state) => state.game.multiplier)

  function handleClick() {
    dispatch(click())
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
