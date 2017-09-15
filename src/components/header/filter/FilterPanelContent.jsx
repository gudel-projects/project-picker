import React from 'react';

import Dropdown from './filters/Dropdown';
import FilterSection from './filters/FilterSection';

const MOCK_OPTIONS = [
  { value: 'tmv-3', label: 'tmv-3' },
  { value: 'tmv-4', label: 'tmv-4' },
  { value: 'tmf', label: 'tmf' },
  { value: 'tmz-3', label: 'tmz-3' },
];

const FilterPanelContent = ({
  model,
  onChangeModel,
}) => (
  <div className='filterPanelContent'>
    <FilterSection label='Model' value={model} onClear={() => onChangeModel()} >
      <Dropdown onChange={(value) => onChangeModel(value.value)} options={MOCK_OPTIONS} />
    </FilterSection>
  </div>
);

export default FilterPanelContent;
