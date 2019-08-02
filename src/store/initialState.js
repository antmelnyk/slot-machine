import { slot, reelPosition, REELS_NUMBER } from './constants'

const initialState = {

  slots: [
    slot.BAR3X,
    slot.BAR,
    slot.BAR2X,
    slot.SEVEN,
    slot.CHERRY
  ],

  reels: [...Array(REELS_NUMBER)].map((v, index) => {
    return {
      id: index,
      position: reelPosition.SINGLE,
      activeSlot: [0]
    }
  }),

  isSpinning: false
}

export default initialState
