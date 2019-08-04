import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setBalance } from '../store/actions'
import { SIGN } from '../store/constants'

const Balance = (props) => {
  
  // Need number to string conversion because of React issue with left pad 0 in number input
  // Read more: https://github.com/facebook/react/issues/9402
  const balance = props.balance + '';

  function handleBalanceChange(event) {
    props.setBalance(event.target.value)
  }
  
  return (
    <div className='balance'>
      <span className='balance__sign'>{SIGN}</span>
      <input type='number' value={balance} onChange={handleBalanceChange} />
    </div>
  )
}

Balance.propTypes = {
  balance: PropTypes.number,
  setBalance: PropTypes.func
}

const mapStateToProps = state => ({ balance: state.balance });
const mapDispatchToProps = { setBalance };
export default connect(mapStateToProps, mapDispatchToProps)(Balance)
