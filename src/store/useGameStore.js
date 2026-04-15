import { create } from 'zustand'

const useGameStore = create((set) => ({
  score: 0,
  highScore: 0,
  multiplier: 1,
  clicks: 0,
  click: () =>
    set((state) => {
      const nextScore = state.score + state.multiplier

      return {
        score: nextScore,
        highScore: Math.max(state.highScore, nextScore),
        clicks: state.clicks + 1,
      }
    }),
  buyUpgrade: () =>
    set((state) => {
      const cost = state.multiplier * 10

      if (state.score < cost) {
        return state
      }

      const nextScore = state.score - cost

      return {
        score: nextScore,
        highScore: Math.max(state.highScore, nextScore),
        multiplier: state.multiplier + 1,
      }
    }),
}))

export default useGameStore