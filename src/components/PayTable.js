import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PayTable = (props) => {

  const winConditions = props.winConditions.map(winCondition => {
    return (
      <div className='pay-table-item' key={winCondition.id}>
        <div className='pay-table-item__amount'>
          {typeof winCondition.amount == 'string' ? winCondition.amount : ''}
        </div>
        <div className='pay-table-item__slots'>
          {winCondition.slots.map(slot =>
            <div className={`pay-table-item__slot pay-table-item__slot--${slot}`} key={slot}>
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
  activeWinCondition: PropTypes.number
}

const mapStateToProps = state => ({
  winConditions: state.winConditions,
  activeWinCondition: state.activeWinCondition
});
export default connect(mapStateToProps, null)(PayTable)
