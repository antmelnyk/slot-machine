import React from 'react'
import { connect } from 'react-redux'

const Reel = (props) => {
  
  const slots = props.slots.map(slot => (
    <div className={`slot slot--${slot}`} key={slot}>
    </div>
  )) 

  return (
    <div className='reel'>
      {slots}
    </div>
  )
}

const mapStateToProps = state => ({ slots: state.slots });
export default connect(mapStateToProps, null)(Reel)
