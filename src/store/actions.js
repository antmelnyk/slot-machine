import { 
  randomInteger,
  randomProperty 
} from '../randomizer'

import { 
  slots, 
  reelPosition, 
  REEL_DELAY,
  PAYMENT_AMOUNT, 
  SPINNING_DURATION, 
  START_SPINNING, 
  STOP_SPINNING,
  CHARGE_PAYMENT 
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
