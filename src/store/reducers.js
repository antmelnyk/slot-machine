import initialState from './initialState'

import { 
  START_SPINNING,
  STOP_SPINNING,
  CHARGE_PAYMENT,
  SET_BALANCE
} from './constants'

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

    default:
      return state
  }
}

export default rootReducer
