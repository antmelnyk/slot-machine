
import { 
  FILLED_TOP_LINE,
  FILLED_CENTER_LINE,
  FILLED_BOTTOM_LINE,
  FILLED_ANY_LINE,
  COMBO_ANY_LINE,
  COMBINATION_ANY_LINE,
  slotPlacement
} from '../store/constants'

export default class WinCondition {

  /**
   * @param {number} id
   * @param {string} condition
   * @param {string[]} slots
   * @param {number | string} amount Usually 3 or 'any'
   * @param {number} prize
   * @param {boolean} isCombination
   */
  constructor(id, condition, slots, amount, prize, isCombination) {
    this.id = id;
    this.condition = condition;
    this.slots = slots;
    this.amount = amount === null ? 'any of' : amount;
    this.prize = prize;
    this.isCombination = isCombination;

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
  checkForWin(machineState) {

    const conditionSlot = this.slots[0]; 

    switch (this.condition) {

      case FILLED_TOP_LINE:
        return machineState[slotPlacement.TOP].every(slot => slot == conditionSlot)

      case FILLED_CENTER_LINE:
        return machineState[slotPlacement.CENTER].every(slot => slot == conditionSlot)

      case FILLED_BOTTOM_LINE:
        return machineState[slotPlacement.BOTTOM].every(slot => slot == conditionSlot)

      case FILLED_ANY_LINE:
        for (let placement in machineState) {
          if (machineState[placement].every(slot => slot == conditionSlot)) return true
        }
        return false

      case COMBO_ANY_LINE:      
        for (let placement in machineState) {
          if (this.slots.every(slot => machineState[placement].includes(slot))) return true
        }
        return false

      case COMBINATION_ANY_LINE:
        for (let placement in machineState) {
          let slotsCombination = [];
          this.slots.forEach(slot => {
            if (machineState[placement].includes(slot)) {              
              for (let index = 0; index < machineState[placement].filter(s => s == slot).length; index++) {
                slotsCombination.push(slot); 
              }
            }
          })
                    
          if (slotsCombination.length > 1) {
            return true
          }
        }
        return false

      default:
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