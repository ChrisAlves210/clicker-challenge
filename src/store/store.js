import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameSlice'
import leaderboardReducer from './leaderboardSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    leaderboard: leaderboardReducer,
  },
})
