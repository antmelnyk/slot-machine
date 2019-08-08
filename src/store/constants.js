import WinCondition from '../classes/WinCondition';

export const REELS_NUMBER = 3
export const SPINNING_DURATION = 2000
export const REEL_DELAY = 500
export const PAYMENT_AMOUNT = 1
export const MAX_BALANCE = 5000
export const SIGN = '$'

export const reelPosition = {
  SINGLE: 'single',
  DOUBLE: 'double'
}

export const slot = {
  BAR3X: 'BAR3X',
  BAR: 'BAR',
  BAR2X: 'BAR2X',
  SEVEN: 'SEVEN',
  CHERRY: 'CHERRY'
}

export const slotPlacement = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

export const mode = {
  RANDOM: 'random',
  FIXED: 'fixed'
}


// Win conditions
export const FILLED_TOP_LINE = 'FILLED_TOP_LINE'
export const FILLED_CENTER_LINE = 'FILLED_CENTER_LINE'
export const FILLED_BOTTOM_LINE = 'FILLED_BOTTOM_LINE'
export const FILLED_ANY_LINE = 'FILLED_ANY_LINE'
export const COMBO_ANY_LINE = 'COMBO_ANY_LINE'

// Actions
export const START_SPINNING = 'START_SPINNING'
export const STOP_SPINNING = 'STOP_SPINNING'
export const CHARGE_PAYMENT = 'CHARGE_PAYMENT'
export const SET_BALANCE = 'SET_BALANCE'
export const SELECT_MODE = 'SELECT_MODE'
export const CHANGE_SLOT_PLACEMENT = 'CHANGE_SLOT_PLACEMENT'
export const CHANGE_REEL_SLOT = 'CHANGE_REEL_SLOT'
export const SET_ACTIVE_WINS = 'SET_ACTIVE_WINS'
export const RESET_WINS = 'RESET_WINS'
export const CALCULATE_MACHINE_STATE = 'CALCULATE_MACHINE_STATE'
export const CALCULATE_HIGHLIGHTED_SLOTS = 'CALCULATE_HIGHLIGHTED_SLOTS'

// Win conditions
export const winConditions = [
  new WinCondition(0, FILLED_TOP_LINE, [slot.CHERRY], 3, 2000),
  new WinCondition(1, FILLED_CENTER_LINE, [slot.CHERRY], 3, 1000),
  new WinCondition(2, FILLED_BOTTOM_LINE, [slot.CHERRY], 3, 3000),
  new WinCondition(3, FILLED_ANY_LINE, [slot.SEVEN], 3, 2000),
  new WinCondition(4, COMBO_ANY_LINE, [slot.CHERRY, slot.SEVEN], null, 75)
]
