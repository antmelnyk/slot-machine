import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Slot = (props) => {
  const slotNameClass = `slot--${props.name}`;
  const slotHighlightedClass = isHighlighted() ? 'slot--highlighted' : '';

  function isHighlighted() {
    if (props.highlightedSlots !== null) {
      for (let placement in props.machineState) {
        if (props.highlightedSlots[placement].includes(props.name)) {
          return true
        }
      }
      return false
    }
  }

  return (
    <div className={`slot ${slotNameClass} ${slotHighlightedClass}`}>
    </div>
  )
}

Slot.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = state => ({
  machineState: state.machineState,
  highlightedSlots: state.highlightedSlots
});
export default connect(mapStateToProps, null)(Slot)
