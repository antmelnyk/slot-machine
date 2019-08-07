import { randomInteger } from '../randomizer'

import {
  slotsConfig,
  slotPlacement,
  slotPlacementConfig,
  reelPosition,
  mode,
  REEL_DELAY,
  REELS_NUMBER,
  PAYMENT_AMOUNT,
  MAX_BALANCE,
  SPINNING_DURATION,
} from './constants'

import {  
  START_SPINNING, 
  STOP_SPINNING,
  CHARGE_PAYMENT,
  SET_BALANCE,
  SET_ACTIVE_VICTORIES,
  RESET_VICTORIES,
  SELECT_MODE,
  CHANGE_SLOT_PLACEMENT,
  CHANGE_REEL_SLOT
} from './constants'

export function startSpinning() {
  return function (dispatch, getState) {

    dispatch({ type: RESET_VICTORIES })

    function calculateSpinning() {
      const reels = getState().reels.map(reel => {
        
        if (getState().activeMode == mode.FIXED) {
          return reel
        } 

        const activePlacement = slotPlacementConfig[randomInteger(slotPlacementConfig.length)];
        const activePosition = activePlacement == slotPlacement.CENTER ? reelPosition.SINGLE : reelPosition.DOUBLE;
        const activeSlot = slotsConfig[randomInteger(slotsConfig.length)];

        return {
          id: reel.id,
          activePlacement,
          activePosition,
          activeSlot
        }
      })

      reels.map((reel, index) => setTimeout(() => dispatch({
        type: STOP_SPINNING,
        reel
      }), index * REEL_DELAY));

      setTimeout(() => {
        checkWinConditions();
      }, REEL_DELAY * REELS_NUMBER);
    }

    function checkWinConditions() {     
      let victory_ids = [];
      getState().winConditions.forEach(win => {
        if (win.checkReelsForCondition(getState().reels)) {
          victory_ids.push(win.id)
        }
      })

      if(victory_ids.length > 0) {
        dispatch({
          type: SET_ACTIVE_VICTORIES,
          victory_ids
        })
      }
    }

    dispatch({ type: CHARGE_PAYMENT, amount: PAYMENT_AMOUNT })
    dispatch({ type: START_SPINNING })
    
    setTimeout(() => { 
      calculateSpinning();
    }, SPINNING_DURATION);
  };
}

export function setBalance(value) {
  return function(dispatch) {

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

export function changeSlotPlacement(reel_id, placement) {
  return {
    type: CHANGE_SLOT_PLACEMENT,
    reel_id,
    placement
  }
}

export function changeReelSlot(reel_id, slot) {
  return {
    type: CHANGE_REEL_SLOT,
    reel_id,
    slot
  }
}
