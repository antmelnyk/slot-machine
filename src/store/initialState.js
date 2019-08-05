import { randomInteger } from '../randomizer'

import { 
  REELS_NUMBER,
  mode,
  slotPlacementConfig,
  slotPlacement,
  slotsConfig,
  reelPosition,
} from './constants'

const activePlacement = slotPlacementConfig[randomInteger(slotPlacementConfig.length)];
const activePosition = activePlacement == slotPlacement.CENTER ? reelPosition.SINGLE : reelPosition.DOUBLE;

const initialState = {

  reels: [...Array(REELS_NUMBER)].map((e, index) => {
    return {
      isSpinning: false,
      id: index,
      activePlacement,
      activePosition,
      activeSlot: slotsConfig[randomInteger(slotsConfig.length)]
    }
  }),
  
  activeMode: mode.RANDOM,
  slots: slotsConfig,
  spinnedOnce: false,
  balance: 1,
  
}

export default initialState
