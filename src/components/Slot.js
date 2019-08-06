import React from 'react';
import PropTypes from 'prop-types'

const Slot = (props) => {

  const slotNameClass = `slot--${props.name}`;
  const slotHighlightedClass = props.isHighlighted ? 'slot--highlighted' : '';

  const classes = `slot ${slotNameClass} ${slotHighlightedClass}`;

  return (
    <div className={classes}>
    </div>
  )
}

Slot.propTypes = {
  name: PropTypes.string,
  isHighlighted: PropTypes.bool
}
export default Slot
