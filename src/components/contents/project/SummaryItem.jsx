import React from 'react';
import PropTypes from 'prop-types';

const SummaryItem = ({ width, value }) => (
  <div className='summaryItem' style={{ width }}>{value}</div>
);

SummaryItem.propTypes = {
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SummaryItem;
