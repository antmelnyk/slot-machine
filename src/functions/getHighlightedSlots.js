import { slotPlacementConfig } from '../store/configs'

/**
 * Loop active win conditions to extract their slots that should be highlighted
 * Place highlighted slots in corresponding placements of their winCondition
 * @param {object[]} state
 */
export default function getHighlightedSlots(state) {

  let highlightedSlots = {}
  slotPlacementConfig.forEach(placement => highlightedSlots[placement] = []);

  if (state.activeWinConditions !== null) {
    state.winConditions.forEach(winCondition => {
      if (state.activeWinConditions.includes(winCondition.id)) {
        slotPlacementConfig.forEach(placement => {
          if(winCondition.isCombination) {            
            winCondition.slots.forEach(slot => {
              if (state.machineState[placement].includes(slot) && 
                state.machineState[placement].filter(s => winCondition.slots.includes(s)).length > 1) {
                highlightedSlots[placement].push(slot)
              }
            })
          } else {
            if (winCondition.slots.every(slot => state.machineState[placement].includes(slot))) {
              winCondition.slots.forEach(slot => highlightedSlots[placement].push(slot))
            }
          }
        })
      }
    })
  }

  return highlightedSlots;
}