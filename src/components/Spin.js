import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { startSpinning } from '../store/actions'

const Spin = (props) => {
  
  const canSpin = !props.isSpinning && props.balance > 0
  
  function handleSpin() {
    if (canSpin) props.startSpinning()
  } 
  
  return (
    <button className={`spin-button ${ canSpin ? '' : 'spin-button--locked' }`} onClick={handleSpin}>
      {props.balance > 0 ? 'SPIN' : 'INSERT COIN'}
    </button>
  )
}

Spin.propTypes = {
  isSpinning: PropTypes.bool,
  balance: PropTypes.number,
  startSpinning: PropTypes.func
}

const mapStateToProps = state => ({ 
  isSpinning: state.reels.some(reel => reel.isSpinning),
  balance: state.balance
});
const mapDispatchToProps = { startSpinning };
export default connect(mapStateToProps, mapDispatchToProps)(Spin)
