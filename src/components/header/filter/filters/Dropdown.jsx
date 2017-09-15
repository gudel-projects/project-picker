import React from 'react'
import PropTypes from 'prop-types';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

const Dropdown = ({ onChange, options }) => (
  <Creatable
    autoBlur
    className='dropdownFilter'
    placeholder='Search...'
    onChange={onChange}
    shouldKeyDownEventCreateNewOption={() => false}
    promptTextCreator={label => label}
    options={options}
  />
);

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

export default Dropdown;
