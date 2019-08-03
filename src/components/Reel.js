import React from 'react';
import { connect } from 'react-redux'

const Reel = (props) => {
  
  const isSpinningClass = props.isSpinning ? 'reel--spinning' : '';
  const spinnedPositionClass = !props.isSpinning ? 'reel--spinned-' + props.position : '';
  const spinnedSlotClass = !props.isSpinning ? 'reel--spinned-to-' + props.activeSlot : '';

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

const mapStateToProps = state => ({ slots: state.slots });
export default connect(mapStateToProps, null)(Reel)
