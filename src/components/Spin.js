import React from 'react';
import { connect } from 'react-redux'

import { startSpinning } from '../store/actions'

const Spin = (props) => {
  
  function handleSpin() {
    if (!props.isSpinning) props.startSpinning()
  }

  return (
    <button className={`spin-button ${ props.isSpinning ? 'spin-button--locked' : ''}`} onClick={handleSpin}>
      SPIN
    </button>
  )
}

const mapStateToProps = state => ({ isSpinning: state.reels.some(reel => reel.isSpinning) });
const mapDispatchToProps = { startSpinning };
export default connect(mapStateToProps, mapDispatchToProps)(Spin)
