import React from 'react';
import PropTypes from 'prop-types';

import SummaryItem from './SummaryItem';

/*
  NB: the widths of the SummaryItems must add up to 100%
*/
const ProjectSummary = ({
  expanded,
  onClick,
  id,
  customer,
  engineer,
  date,
}) => (
  <div className='projectSummary' onClick={() => onClick(id)}>
    <SummaryItem value={id} width='15%' />
    <SummaryItem value={customer} width='45%' />
    <SummaryItem value={engineer} width='25%' />
    <SummaryItem value={date} width='15%' />
  </div>
);

ProjectSummary.propTypes = {
  customer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  engineer: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectSummary;
