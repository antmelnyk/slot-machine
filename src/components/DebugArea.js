import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectMode, changeSlotPlacement, changeReelSlot } from '../store/actions'
import { mode } from '../store/constants'

const DebugArea = (props) => {
  
  function handleModeSelection(event) {
    props.selectMode(event.target.value)
  }

  function handleSlotPlacementChange(reel_id, event) {
    props.changeSlotPlacement(reel_id, event.target.value)
  }

  function handleReelSlotChange(reel_id, event) {
    props.changeReelSlot(reel_id, event.target.value)
  }

  const modeSelector = props.modesConfig.map(mode => (
      <div className='mode-selector__variant' key={mode}>
        <label>
          <input type='radio' value={mode}
            checked={props.activeMode === mode}
            onChange={handleModeSelection} />
          {mode.toUpperCase()}
        </label>
      </div>
    ))

  const modesConfigurations = (function (activeMode) {
    
    switch (activeMode) {
      case mode.RANDOM:
        return <span>Reels will land at random positions.</span>;
      case mode.FIXED:
        return (
          <React.Fragment>
            <span>Select active slot(s) for each reel. The reels will land at the specified slots.</span>
            <div className='fixed-mode-config'>
              {props.reels.map(reel => {
                return (
                  <div className='config-reel' key={reel.id}>
                    <span className='config-reel__title'>Reel #{reel.id + 1}</span>
                    <div className='config-reel__position'>
                      <select value={reel.activePlacement} onChange={(e) => handleSlotPlacementChange(reel.id, e)}>
                        {props.slotPlacementConfig.map(placement => {
                          return <option value={placement} key={placement}>{placement}</option>
                        })}
                      </select>
                    </div>
                    <div className='config-reel__slot'>
                      <select value={reel.activeSlot} onChange={(e) => handleReelSlotChange(reel.id, e)}>
                        {props.slots.map(slot => {
                          return <option value={slot} key={slot}>{slot}</option>
                        })}
                      </select>
                    </div>
                  </div>
                )
              })}
            </div>
          </React.Fragment>
        );
      default:
        return <span>Unknown mode.</span>;
    }
  })(props.activeMode);

  return (
    <div className='debug-area'>

      <div className='mode-selector'>
        <span className='mode-selector__title'>Select mode: </span>
        <form className='mode-selector__list'>
          {modeSelector}
        </form>
      </div>

      <div className='mode-configuration'>
        <span className='mode-configuration__title'>Mode configuration: </span>
        <div className='mode-configuration__body'>
          {modesConfigurations}
        </div>
      </div>
      
    </div>
  )
}

DebugArea.propTypes = {
  modesConfig: PropTypes.arrayOf(PropTypes.string),
  reelsPositionConfig: PropTypes.arrayOf(PropTypes.string),
  slotPlacementConfig: PropTypes.arrayOf(PropTypes.string),
  reels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    position: PropTypes.string,
    activeSlot: PropTypes.string,
    isSpinning: PropTypes.bool
  })),
  slots: PropTypes.arrayOf(PropTypes.string),
  activeMode: PropTypes.string,
  selectMode: PropTypes.func
}

const mapStateToProps = state => ({
  activeMode: state.activeMode,
  reels: state.reels,
  slots: state.slots
});
const mapDispatchToProps = { selectMode, changeSlotPlacement, changeReelSlot };
export default connect(mapStateToProps, mapDispatchToProps)(DebugArea)
