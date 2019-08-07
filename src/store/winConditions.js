
import {
  slot,
  FILLED_TOP_LINE,
  FILLED_CENTER_LINE,
  FILLED_BOTTOM_LINE,
  FILLED_ANY_LINE,
  COMBO_ANY_LINE
} from '../store/constants'

import WinCondition from "../classes/WinCondition";

export const winConditions = [
  new WinCondition(0, FILLED_TOP_LINE, [slot.CHERRY], 3, 2000),
  new WinCondition(1, FILLED_CENTER_LINE, [slot.CHERRY], 3, 1000),
  new WinCondition(2, FILLED_BOTTOM_LINE, [slot.CHERRY], 3, 3000),
  new WinCondition(3, FILLED_ANY_LINE, [slot.SEVEN], 3, 2000),
  new WinCondition(4, COMBO_ANY_LINE, [slot.CHERRY, slot.SEVEN], null, 75)
]
