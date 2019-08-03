import { randomInteger, randomProperty } from '../randomizer'
import { slots, reelPosition, REEL_DELAY, SPINNING_DURATION, START_SPINNING, STOP_SPINNING } from './constants'

export function startSpinning() {
  return function (dispatch, getState) {

    dispatch({ type: START_SPINNING })

    setTimeout(() => {
      
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

    }, SPINNING_DURATION);
  };
}
