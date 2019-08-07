
import { 
  FILLED_TOP_LINE,
  FILLED_CENTER_LINE,
  FILLED_BOTTOM_LINE,
  FILLED_ANY_LINE,
  COMBO_ANY_LINE,
  reelPosition,
  slotPlacement
} from '../store/constants'

import { nextSlot, previousSlot } from '../helpers'

export default class WinCondition {

  /**
   * @param {number} id
   * @param {string} condition
   * @param {string[]} slots
   * @param {number | string} amount Usually 3 or 'any'
   * @param {number} prize
   */
  constructor(id, condition, slots, amount, prize) {
    this.id = id;
    this.condition = condition;
    this.slots = slots;
    this.amount = amount === null ? 'any of' : amount;
    this.prize = prize;

    if (condition.includes('TOP')) {
      this.placement = slotPlacement.TOP
    } else if (condition.includes('CENTER')) {
      this.placement = slotPlacement.CENTER
    } else if (condition.includes('BOTTOM')) {
      this.placement = slotPlacement.BOTTOM
    } else {
      this.placement = 'any';
    }
  }

  /**
   * @param {object[]} reels
   * @param {string} condition
   * @param {...string} slots
   */
  checkForWin(reels) {

    const slot = this.slots[0];

    switch (this.condition) {

      case FILLED_TOP_LINE:
        
        return reels.every(reel => (reel.activeSlot == slot && reel.activePlacement == slotPlacement.TOP) ||
          (reel.activeSlot == nextSlot(slot) && reel.activePlacement == slotPlacement.BOTTOM))

      case FILLED_CENTER_LINE:
        return reels.every(reel => (reel.activeSlot == slot && reel.activePlacement == slotPlacement.CENTER))

      case FILLED_BOTTOM_LINE:
        return reels.every(reel => (reel.activeSlot == slot && reel.activePlacement == slotPlacement.BOTTOM) ||
          (reel.activeSlot == previousSlot(slot) && reel.activePlacement == slotPlacement.TOP))

      case FILLED_ANY_LINE:
        return reels.every(reel => (reel.activeSlot == slot && reel.activePosition == reelPosition.SINGLE) ||
          (reel.activeSlot == slot && reel.activePosition == reelPosition.DOUBLE) ||
          (reel.activeSlot == previousSlot(slot) && reel.activePlacement == slotPlacement.TOP) ||
          (reel.activeSlot == nextSlot(slot) && reel.activePlacement == slotPlacement.BOTTOM)
        )

      case COMBO_ANY_LINE:
        return false
    
      default:
        console.info('Unknown win condition');
        return false
    }
  }

  /**
   * @returns {string[]} Returns slots that should be visually displayed in PayTable component
   */
  displaySlots() {
    if(typeof this.amount == 'number') return [...Array(this.amount)].map((e, index) => this.slots[0]);
    return this.slots;
  }
}