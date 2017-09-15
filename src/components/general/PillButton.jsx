import React from 'react';
import PropTypes from 'prop-types';

const PillButton = ({
  title,
  value,
  onClose,
}) => (
  <div className='pillButton'>
    {title ? <div className='pillButtonTitle'>{title}:</div> : null}
    <div className='pillButtonValue'>{value}</div>
    <div className='pillButtonClose' onClick={onClose}>X</div>
  </div>
);

PillButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default PillButton;
