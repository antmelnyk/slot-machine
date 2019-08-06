import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Reel from './Reel'

const ReelsContainer = (props) => {

  return (
    <div className='reels-container'>
      <div className='reels-container__slot-line'></div>
      <div className='reels-container__slot-line'></div>
      <div className='reels-container__slot-line'></div>

      {props.reels.map(reel => (
        <Reel 
          {...reel}
          key={reel.id}
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
  }))
}

const mapStateToProps = state => ({ reels: state.reels });
export default connect(mapStateToProps, null)(ReelsContainer)
