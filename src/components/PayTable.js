import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PayTable = (props) => {

  let activeWinConditionClass = '';

  const winConditions = props.winConditions.map(winCondition => {
    
    const hightlightedItemClass = props.activeWinConditions !== null && props.activeWinConditions.includes(winCondition.id) ?
      'pay-table-item--highlighted' : '';

    return (
      <div className={`pay-table-item ${hightlightedItemClass}`} key={winCondition.id}>

        <div className='pay-table-item__amount'>
          {/* If amount of slots is set then display them as images, otherwise display text */}
          {typeof winCondition.amount == 'string' ? winCondition.amount : ''}
        </div>

        <div className='pay-table-item__slots'>
          {winCondition.slots.map((slot, index) =>
            <div className={`pay-table-item__slot pay-table-item__slot--${slot}`} key={index}>
            </div>
          )}
        </div>
        
        <div className='pay-table-item__placement'>
          on {winCondition.where} line
        </div>
        <div className='pay-table-item__prize'>
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
