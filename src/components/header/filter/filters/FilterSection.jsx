import React from 'react';

import PillButton from '../../../general/PillButton';

const FilterSection = ({ label, value, onClear, children }) => (
  <div className='filterSection'>
    <div className='filterSectionHeader'>
      <div className='filterSectionLabel'>{label}:</div>
      {value
        ? <PillButton value={value} onClose={onClear} />
        : null
      }
    </div>
    {children}
  </div>
);

export default FilterSection;
