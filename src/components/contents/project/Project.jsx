import React from 'react';

import ProjectDetails from './ProjectDetails';
import ProjectSummary from './ProjectSummary';

const Project = ({
  expanded,
  onToggle,
  id,
  customer,
  engineer,
  date,
  details
}) => (
  <div className='project'>
    <ProjectSummary
      expanded={expanded}
      onClick={onToggle}
      id={id}
      customer={customer}
      engineer={engineer}
      date={date}
    />
    {expanded ? <ProjectDetails details={details} /> : null}
  </div>
);

export default Project;
