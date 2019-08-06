import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Slot from './Slot'
import { slotPlacement, reelPosition } from '../store/constants';
import { previousSlot } from '../store/winConditions';

const Reel = (props) => {
  const isSpinningClass = props.isSpinning ? 'reel--spinning' : '';
  const spinnedPositionClass = !props.isSpinning ? 'reel--spinned-' + props.activePosition : '';
  let spinnedSlotClass;

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
      {slots}
      {slots}
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
  activeVictory: PropTypes.number,
  highlightSlots: PropTypes.array
}

const mapStateToProps = state => ({ 
  slots: state.slots, 
  activeVictory: state.activeVictory,
  highlightSlots: state.activeVictory !== null ? state.winConditions[state.activeVictory].highlightSlots : []
});
export default connect(mapStateToProps, null)(Reel)
