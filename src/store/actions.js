import { randomInteger } from '../helpers'
import getHighlightSlots from '../functions/getHighlightedSlots'

import {
  slotPlacement,
  reelPosition,
  mode,
  REEL_DELAY,
  REELS_NUMBER,
  PAYMENT_AMOUNT,
  MAX_BALANCE,
  SPINNING_DURATION,
} from './constants'

import {
  slotsConfig,
  slotPlacementConfig
} from './configs'

import {  
  START_SPINNING, 
  STOP_SPINNING,
  CHARGE_PAYMENT,
  SET_BALANCE,
  SET_ACTIVE_WINS,
  RESET_WINS,
  SELECT_MODE,
  CHANGE_SLOT_PLACEMENT,
  CHANGE_REEL_SLOT,
  CALCULATE_MACHINE_STATE,
  CALCULATE_HIGHLIGHTED_SLOTS
} from './constants'

export function startSpinning() {
  return function (dispatch, getState) {

    // Reset previous win before playing again
    dispatch({ type: RESET_WINS })

    // Charge payment and play
    dispatch({ type: CHARGE_PAYMENT, amount: PAYMENT_AMOUNT })
    dispatch({ type: START_SPINNING })
    setTimeout(() => {
      calculateSpinning();
    }, SPINNING_DURATION);

    // Doing spins for every reel and setting new active slots based on current mode
    function calculateSpinning() {
      const reels = getState().reels.map(reel => {
        const activePlacement = slotPlacementConfig[randomInteger(slotPlacementConfig.length)];
        const activePosition = activePlacement == slotPlacement.CENTER ? reelPosition.SINGLE : reelPosition.DOUBLE;
        const activeSlot = slotsConfig[randomInteger(slotsConfig.length)];

        if (getState().activeMode == mode.FIXED) {
          return reel
        }

        if (getState().activeMode == mode.RANDOM) {
          return {
            id: reel.id,
            activePlacement,
            activePosition,
            activeSlot
          }
        }
      })

      // Stop reels one by one
      reels.map((reel, index) => setTimeout(() => dispatch({
        type: STOP_SPINNING,
        reel
      }), index * REEL_DELAY));

      // After spinning is done we can calculate new machine state and check if there are some matching win condition
      setTimeout(() => {
        dispatch({ type: CALCULATE_MACHINE_STATE })
        checkWinConditions()
        dispatch({ type: CALCULATE_HIGHLIGHTED_SLOTS })
      }, REEL_DELAY * REELS_NUMBER);
    }

    function checkWinConditions() {
      let wins_ids = [];
      getState().winConditions.forEach(win => {
        if (win.checkForWin(getState().machineState)) {
          wins_ids.push(win.id)
        }
      })

      // If there were win conditions found set them as active
      if (wins_ids.length > 0) {
        dispatch({
          type: SET_ACTIVE_WINS,
          wins_ids
        })
      }
    }
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
