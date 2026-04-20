import { createSlice } from '@reduxjs/toolkit'

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: [],
  reducers: {
    submitScore: (state, action) => {
      const score = Number(action.payload)

      if (!Number.isFinite(score)) {
        return
      }

      state.push(score)
      state.sort((a, b) => b - a)

      if (state.length > 5) {
        state.length = 5
      }
    },
  },
})

export const { submitScore } = leaderboardSlice.actions
export default leaderboardSlice.reducer