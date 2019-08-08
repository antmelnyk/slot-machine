import initialState from './initialState'

import { 
  START_SPINNING,
  STOP_SPINNING,
  CHARGE_PAYMENT,
  SET_BALANCE,
  SELECT_MODE,
  CHANGE_SLOT_PLACEMENT,
  CHANGE_REEL_SLOT,
  SET_ACTIVE_WINS,
  RESET_WINS,
  CALCULATE_MACHINE_STATE,
  CALCULATE_HIGHLIGHTED_SLOTS,
  slotPlacement,
  reelPosition
} from './constants'

import machineState from '../functions/getMachineState'
import getHighlightedSlots from '../functions/getHighlightedSlots'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case START_SPINNING:
      return {
        ...state,
        spinnedOnce: true,
        reels: state.reels.map(reel => {
          return {
            ...reel,
            isSpinning: true
          }
        })
      }

    case STOP_SPINNING:
      return {
        ...state,
        reels: state.reels.map(reel => {
          if (reel.id === action.reel.id) {            
            return {
              ...action.reel,
              isSpinning: false
            };
          }
          return reel;
        })
      }

    case CHARGE_PAYMENT:
      return {
        ...state,
        balance: state.balance - 1
      }

    case SET_BALANCE:
      return {
        ...state,
        balance: action.value
      }

    case SET_ACTIVE_WINS:
      return {
        ...state,
        activeWinConditions: action.wins_ids
      }

    case CALCULATE_MACHINE_STATE:
      return {
        ...state,
        machineState: machineState(state.reels)
      }

    case CALCULATE_HIGHLIGHTED_SLOTS:
      return {
        ...state,
        highlightedSlots: getHighlightedSlots(state)
      }

    case RESET_WINS:
      return {
        ...state,
        activeWinConditions: null,
        highlightedSlots: null
      }

    case SELECT_MODE:
      return {
        ...state,
        activeMode: action.mode
      }

    case CHANGE_SLOT_PLACEMENT:
      return {
        ...state,
        highlightedSlots: null,
        reels: state.reels.map(reel => {
          if (reel.id === action.reel_id) {           
            return {
              ...reel,
              activePlacement: action.placement,
              activePosition: action.placement == slotPlacement.CENTER ?
                reelPosition.SINGLE :
                reelPosition.DOUBLE
            };
          }
          return reel;
        })
      }

    case CHANGE_REEL_SLOT:     
      return {
        ...state,
        highlightedSlots: null,
        reels: state.reels.map(reel => {
          if (reel.id === action.reel_id) {
            return {
              ...reel,
              activeSlot: action.slot
            };
          }
          return reel;
        })
      }

    default:
      return state
  }
}

export default rootReducer
