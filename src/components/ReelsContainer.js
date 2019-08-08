import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import getHighlightedSlots from '../functions/getHighlightedSlots';

import Reel from './Reel'
import { slotPlacementConfig } from '../store/configs';

const ReelsContainer = (props) => {

  function slotsToHighlight(reelIndex) {
    let slots = [];
    slotPlacementConfig.forEach(placement => {
      if(props.highlightedSlots[placement].every(slot => props.machineState[placement].includes(slot))) {
        if (props.highlightedSlots[placement].includes(props.machineState[placement][reelIndex])) {
          slots.push(props.machineState[placement][reelIndex])
        }
      }
    })
    return slots;
  }
 
  return (
    <div className='reels-container'>
      <div className='reels-container__slot-line'></div>
      <div className='reels-container__slot-line'></div>
      <div className='reels-container__slot-line'></div>

      {props.reels.map(reel => (
        <Reel 
          {...reel}
          key={reel.id}
          slotsToHighlight={slotsToHighlight(reel.id)}
        /> 
      ))}
      
    </div>
    
  )
}

ReelsContainer.propTypes = {
  reels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    activePlacement: PropTypes.string,
    activePosition: PropTypes.string,
    activeSlot: PropTypes.string,
    isSpinning: PropTypes.bool
  })),
  activeWinCondition: PropTypes.number,
  machineState: PropTypes.object,
  highlightedSlots: PropTypes.object
}

const mapStateToProps = state => ({ 
  reels: state.reels,
  machineState: state.machineState,
  highlightedSlots: getHighlightedSlots(state)
});
export default connect(mapStateToProps, null)(ReelsContainer)
