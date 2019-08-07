import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Slot from './Slot'
import { slotPlacement, reelPosition } from '../store/constants';
import { previousSlot } from '../helpers';

const Reel = (props) => {
  const isSpinningClass = props.isSpinning ? 'reel--spinning' : '';
  const spinnedPositionClass = !props.isSpinning ? 'reel--spinned-' + props.activePosition : '';
  let spinnedSlotClass;

  // Detect to which slot reel should be animated baseD on its placement and position
  if(props.isSpinning) {
    spinnedSlotClass = '';
  } else if (props.activePosition == reelPosition.DOUBLE) {    
      if (props.activePlacement == slotPlacement.TOP) {
        spinnedSlotClass = 'reel--spinned-to-' + props.activeSlot
      } else if (props.activePlacement == slotPlacement.BOTTOM) {
        spinnedSlotClass = 'reel--spinned-to-' + previousSlot(props.activeSlot)
      }
  } else {
    spinnedSlotClass = 'reel--spinned-to-' + props.activeSlot
  }
  
  const slots = props.slots.map(slot => (
    <Slot 
      key={slot}
      name={slot}
      isHighlighted={props.highlightSlots.includes(slot)}
    />
  )) 

  return (
    <div className={`reel ${isSpinningClass} ${spinnedPositionClass} ${spinnedSlotClass}`}>
      {/* Display some extra slots to make visual illusion of endless reel */}
      { slots }
      { slots }
    </div>
  )
}

Reel.propTypes = {
  id: PropTypes.number,
  activePlacement: PropTypes.string,
  activePosition: PropTypes.string,
  activeSlot: PropTypes.string,
  isSpinning: PropTypes.bool,
  slots: PropTypes.arrayOf(PropTypes.string),
  activeWinCondition: PropTypes.number,
  highlightSlots: PropTypes.arrayOf(PropTypes.string)
}

// Loop active win conditions to extract their slots that should be highlighted
function getHighlightSlots(state) {
  
  if (state.activeWinConditions !== null) {
    return state.winConditions.reduce((acc, current) => {
      if (state.activeWinConditions.includes(current.id)) {       
        current.slots.forEach(slot => acc.push(slot))
      }
      return acc;
    }, [])
  }
  return [];
}

const mapStateToProps = state => ({ 
  slots: state.slots, 
  activeWinConditions: state.activeWinConditions,
  highlightSlots: getHighlightSlots(state)
});
export default connect(mapStateToProps, null)(Reel)
