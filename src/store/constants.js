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

export const reelsPositionConfig = [
  reelPosition.SINGLE,
  reelPosition.DOUBLE
]

export const slot = {
  BAR3X: 'BAR3X',
  BAR: 'BAR',
  BAR2X: 'BAR2X',
  SEVEN: 'SEVEN',
  CHERRY: 'CHERRY'
}

export const slotsConfig = [
  slot.BAR3X,
  slot.BAR,
  slot.BAR2X,
  slot.SEVEN,
  slot.CHERRY
]

export const slotPlacement = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

export const slotPlacementConfig = [
  slotPlacement.TOP,
  slotPlacement.CENTER,
  slotPlacement.BOTTOM
]

export const mode = {
  RANDOM: 'random',
  FIXED: 'fixed'
}

export const modesConfig = [
  mode.RANDOM, mode.FIXED
]

// Actions
export const START_SPINNING = 'START_SPINNING'
export const STOP_SPINNING = 'STOP_SPINNING'
export const CHARGE_PAYMENT = 'CHARGE_PAYMENT'
export const SET_BALANCE = 'SET_BALANCE'
export const SELECT_MODE = 'SELECT_MODE'
export const CHANGE_SLOT_PLACEMENT = 'CHANGE_SLOT_PLACEMENT'
export const CHANGE_REEL_SLOT = 'CHANGE_REEL_SLOT'
export const SET_ACTIVE_VICTORIES = 'SET_ACTIVE_VICTORIES'
export const RESET_VICTORIES = 'RESET_VICTORIES'
