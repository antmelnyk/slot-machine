import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectMode } from '../store/actions'
import { modes } from '../store/constants'

const DebugArea = (props) => {

  function handleModeSelection(event) {
    props.selectMode(event.target.value)
  }  

  return (
    <div className='debug-area'>

      <div className='mode-selector'>
        <span className='mode-selector__title'>Select mode: </span>
          <form>
            {modes.map(mode => (
              <div className='mode-selector__variant' key={mode}>
                <label>
                  <input type='radio' value={mode}
                    checked={props.activeMode === mode}
                    onChange={handleModeSelection} />
                  {mode.toUpperCase()}
                </label>
              </div>
            ))}
          </form>
      </div>

      <div className='mode-configuration'>

      </div>
      
    </div>
  )
}

DebugArea.propTypes = {
  activeMode: PropTypes.string,
  selectMode: PropTypes.func
}

const mapStateToProps = state => ({
  activeMode: state.activeMode
});
const mapDispatchToProps = { selectMode };
export default connect(mapStateToProps, mapDispatchToProps)(DebugArea)
