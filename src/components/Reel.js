import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { slotPlacement, reelPosition } from '../store/constants';

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
        let activeSlotIndex = props.slots.findIndex(slot => slot == props.activeSlot) - 1;
        console.log(props.slots.findIndex(slot => slot == props.activeSlot) - 1);
        
        if(activeSlotIndex == -1) {
          activeSlotIndex = props.slots.length - 1
        }
        spinnedSlotClass = 'reel--spinned-to-' + props.slots[activeSlotIndex]
      }
  } else {
    spinnedSlotClass = 'reel--spinned-to-' + props.activeSlot
  }
  
  const classes = `${isSpinningClass} ${spinnedPositionClass} ${spinnedSlotClass}`;

  const slots = props.slots.map(slot => (
    <div className={`slot slot--${slot}`} key={slot}>
    </div>
  )) 

  return (
    <div className={`reel ${classes}`}>
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
  slots: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => ({ slots: state.slots });
export default connect(mapStateToProps, null)(Reel)
