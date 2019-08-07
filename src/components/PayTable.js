import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PayTable = (props) => {

  const winConditions = props.winConditions.map(winCondition => {
    
    const hightlightedItemClass = props.activeWinConditions !== null && props.activeWinConditions.includes(winCondition.id) ?
      'condition-item--highlighted' : '';

    return (
      <div className={`condition-item ${hightlightedItemClass}`} key={winCondition.id}>

        <div className='condition-item__amount'>
          {typeof winCondition.amount == 'string' ? winCondition.amount : ''} 
        </div>

        <div className='condition-item__slots'>
          {winCondition.displaySlots().map((slot, index) =>
            <div className={`condition-item__slot condition-item__slot--${slot}`} key={index}>
            </div>
          )}
        </div>
        
        <div className='condition-item__placement'>
          on {winCondition.placement} line
        </div>
        <div className='condition-item__prize'>
          {winCondition.prize}
        </div>

      </div>
    )
  })

  return (
    <div className='pay-table'>
      {winConditions}
    </div>
  )
}

PayTable.propTypes = {
  winConditions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    checkReelsForCondition: PropTypes.func,
    slots: PropTypes.arrayOf(PropTypes.string),
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    where: PropTypes.string,
    prize: PropTypes.number
  })),
  activeWinConditions: PropTypes.arrayOf(PropTypes.number)
}

const mapStateToProps = state => ({
  winConditions: state.winConditions,
  activeWinConditions: state.activeWinConditions
});
export default connect(mapStateToProps, null)(PayTable)
