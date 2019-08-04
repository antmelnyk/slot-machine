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

export const slots = [
  slot.BAR3X,
  slot.BAR,
  slot.BAR2X,
  slot.SEVEN,
  slot.CHERRY
]

export const START_SPINNING = 'START_SPINNING'
export const STOP_SPINNING = 'STOP_SPINNING'
export const CHARGE_PAYMENT = 'CHARGE_PAYMENT'
export const SET_BALANCE = 'SET_BALANCE'
