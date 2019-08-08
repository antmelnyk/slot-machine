import { slotPlacement, reelPosition } from '../store/constants'
import { slotPlacementConfig } from '../store/configs'
import { previousSlot, nextSlot } from '../helpers'

/**
 * Machine state is a combination of slots grouped by their placement
 * We can calculate it based on reels configuration
 * @param {object[]} reels 
 */
export default function machineState(reels) {
  let machineState = {};

  slotPlacementConfig.forEach(placement => {
    machineState[placement] = reels.map(reel => {
      if (placement == slotPlacement.TOP) {
        if (reel.activePosition == reelPosition.DOUBLE) {
          if (reel.activePlacement == slotPlacement.TOP) return reel.activeSlot
          if (reel.activePlacement == slotPlacement.BOTTOM) return previousSlot(reel.activeSlot)
        }
      } else if (placement == slotPlacement.CENTER) {
        if (reel.activePosition == reelPosition.SINGLE) return reel.activeSlot
      } else if (placement == slotPlacement.BOTTOM) {
        if (reel.activePosition == reelPosition.DOUBLE) {
          if (reel.activePlacement == slotPlacement.TOP) return nextSlot(reel.activeSlot)
          if (reel.activePlacement == slotPlacement.BOTTOM) return reel.activeSlot
        }
      }
    })
  });

  return machineState
}
