import React from 'react'
import { connect } from 'react-redux'

import Reel from './Reel'

const ReelsContainer = (props) => {

  return (
    <div className='reels-container'>
      {props.reels.map(reel => <Reel {...reel} key={reel.id} /> )}
    </div>
    
  )
}

const mapStateToProps = state => ({ reels: state.reels });
export default connect(mapStateToProps, null)(ReelsContainer)
