import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    score: 0,
    highScore: 0,
    multiplier: 1,
    clicks: 0,
  },
  reducers: {
    click: (state) => {
      const nextScore = state.score + state.multiplier
      state.score = nextScore
      state.highScore = Math.max(state.highScore, nextScore)
      state.clicks += 1
    },
    buyUpgrade: (state) => {
      const cost = state.multiplier * 10

      if (state.score < cost) {
        return
      }

      const nextScore = state.score - cost
      state.score = nextScore
      state.highScore = Math.max(state.highScore, nextScore)
      state.multiplier += 1
    },
  },
})

export const { click, buyUpgrade } = gameSlice.actions
export default gameSlice.reducer