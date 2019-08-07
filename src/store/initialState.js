import { randomInteger } from '../helpers'

import { 
  REELS_NUMBER,
  mode,
  slotPlacement,
  reelPosition
} from './constants'

import {
  slotsConfig,
  slotPlacementConfig
} from './configs'

import { winConditions } from './winConditions'

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
  winConditions: winConditions,
  activeWinConditions: null
}

export default initialState
