import React from 'react';
import PropTypes from 'prop-types';

const Column = ({
  label,
  accessor,
  width,
  data,
}) => (
  <div className='column' style={{ width }}>
    {label}
    {data.map((d, i) => <div key={i} className='columnValue'>{d[accessor]}</div>)}
  </div>
);

Column.propTypes = {
  accessor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default Column;
