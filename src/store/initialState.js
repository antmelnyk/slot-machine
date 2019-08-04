import { 
  randomInteger,
  randomProperty
} from '../randomizer'

import { 
  mode,
  slots, 
  reelPosition,
  REELS_NUMBER
} from './constants'

const initialState = {

  activeMode: mode.RANDOM,
  slots,

  reels: [...Array(REELS_NUMBER)].map((e, index) => {
    return {
      isSpinning: false,
      id: index,
      position: randomProperty(reelPosition),
      // For SINGLE position active slot is in center
      // For DOUBLE position active slot is on top
      activeSlot: slots[randomInteger(slots.length)]
    }
  }),

  spinnedOnce: false,
  balance: 1,
  
}

export default initialState
