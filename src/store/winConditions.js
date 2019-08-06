import { slot, slotPlacement, slotsConfig } from "./constants";

export const winConditions = [
  {
    id: 0,
    checkReelsForCondition(reels) {
      return reels.every(reel => (reel.activeSlot == slot.CHERRY && reel.activePlacement == slotPlacement.TOP) || 
      (reel.activeSlot == nextSlot(slot.CHERRY) && reel.activePlacement == slotPlacement.BOTTOM))
    },
    slots: [slot.CHERRY, slot.CHERRY, slot.CHERRY],
    amount: 3,
    where: slotPlacement.TOP,
    prize: 3000
  }
]

export function previousSlot(slot) {
  const index = slotsConfig.findIndex(s => slot == s);
  let previousIndex;
  if(index == 0) {
    previousIndex = slotsConfig.length - 1
  } else {
    previousIndex = index - 1
  }
  return slotsConfig[previousIndex]
}

export function nextSlot(slot) {  
  const index = slotsConfig.findIndex(s => slot == s);
  let nextIndex;
  if (index == slotsConfig.length - 1) {
    nextIndex = 0
  } else {
    nextIndex = index + 1
  }
  return slotsConfig[nextIndex]
}
