import {
  reelPosition,
  slot,
  slotPlacement,
  mode
} from './constants'

export const reelsPositionConfig = [
  reelPosition.SINGLE,
  reelPosition.DOUBLE
]

export const slotsConfig = [
  slot.BAR3X,
  slot.BAR,
  slot.BAR2X,
  slot.SEVEN,
  slot.CHERRY
]

export const slotPlacementConfig = [
  slotPlacement.TOP,
  slotPlacement.CENTER,
  slotPlacement.BOTTOM
]

export const modesConfig = [
  mode.RANDOM, mode.FIXED
]
