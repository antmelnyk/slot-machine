import { slot, slotPlacement, slotsConfig, reelPosition } from "./constants";

export const winConditions = [
  {
    // 3 CHERRY on top line
    id: 0,
    checkReelsForCondition(reels) {
      return reels.every(reel => (reel.activeSlot == slot.CHERRY && reel.activePlacement == slotPlacement.TOP) || 
      (reel.activeSlot == nextSlot(slot.CHERRY) && reel.activePlacement == slotPlacement.BOTTOM))
    },
    slots: [slot.CHERRY, slot.CHERRY, slot.CHERRY],
    amount: 3,
    where: slotPlacement.TOP,
    prize: 2000
  },
  {
    // 3 CHERRY on center line
    id: 1,
    checkReelsForCondition(reels) {
      return reels.every(reel => (reel.activeSlot == slot.CHERRY && reel.activePlacement == slotPlacement.CENTER))
    },
    slots: [slot.CHERRY, slot.CHERRY, slot.CHERRY],
    amount: 3,
    where: slotPlacement.CENTER,
    prize: 1000
  },
  {
    // 3 CHERRY on bottom line
    id: 2,
    checkReelsForCondition(reels) {
      return reels.every(reel => (reel.activeSlot == slot.CHERRY && reel.activePlacement == slotPlacement.BOTTOM) ||
        (reel.activeSlot == previousSlot(slot.CHERRY) && reel.activePlacement == slotPlacement.TOP))
    },
    slots: [slot.CHERRY, slot.CHERRY, slot.CHERRY],
    amount: 3,
    where: slotPlacement.BOTTOM,
    prize: 3000
  },
  {
    // 3 SEVEN on any line
    id: 3,
    checkReelsForCondition(reels) {
      return reels.every(reel => (reel.activeSlot == slot.SEVEN && reel.activePosition == reelPosition.SINGLE) || 
        (reel.activeSlot == slot.SEVEN && reel.activePosition == reelPosition.DOUBLE) ||
        (reel.activeSlot == previousSlot(slot.SEVEN) && reel.activePlacement == slotPlacement.TOP) ||
        (reel.activeSlot == nextSlot(slot.SEVEN) && reel.activePlacement == slotPlacement.BOTTOM)
      )
    },
    slots: [slot.SEVEN, slot.SEVEN, slot.SEVEN],
    amount: 3,
    where: 'any',
    prize: 150
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
