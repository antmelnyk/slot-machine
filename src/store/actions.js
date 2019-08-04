import { 
  randomInteger,
  randomProperty 
} from '../randomizer'

import {
  slots,
  reelPosition,
  REEL_DELAY,
  PAYMENT_AMOUNT,
  MAX_BALANCE,
  SPINNING_DURATION
} from './constants'

import {  
  START_SPINNING, 
  STOP_SPINNING,
  CHARGE_PAYMENT,
  SET_BALANCE,
  SELECT_MODE
} from './constants'

export function startSpinning() {
  return function (dispatch, getState) {

    function dispatchSpinningStop() {
      const reels = getState().reels.map(reel => {
        const position = randomProperty(reelPosition);
        const activeSlot = slots[randomInteger(slots.length)];
        return {
          id: reel.id,
          position,
          activeSlot
        }
      })

      reels.map((reel, index) => setTimeout(() => dispatch({
        type: STOP_SPINNING,
        reel
      }), index * REEL_DELAY));
    }

    dispatch({ type: CHARGE_PAYMENT, amount: PAYMENT_AMOUNT })
    dispatch({ type: START_SPINNING })
    setTimeout(() => { dispatchSpinningStop() }, SPINNING_DURATION);
  };
}

export function setBalance(value) {
  return function(dispatch, getState) {

    let numericValue = parseInt(value, 10);
    
    if (isNaN(numericValue)) {
      numericValue = 0;
    } else if (value < 0) {
      numericValue = 0;
    } else if (value > MAX_BALANCE) {
      numericValue = MAX_BALANCE
    }

    dispatch({
      type: SET_BALANCE,
      value: numericValue
    })
  }
}

export function selectMode(mode) {
  return {
    type: SELECT_MODE,
    mode
  }
}
