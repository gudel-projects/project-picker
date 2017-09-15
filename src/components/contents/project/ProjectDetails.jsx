import React from 'react';

import Column from './Column';

const ProjectDetails = ({ details }) => (
  <div className='projectDetails'>
    <div className='projectDetailsContainer'>
      <Column label='Axis' accessor='axis' width={75} data={details} />
      <Column label='Velocity m/s' accessor='velocity' width={150} data={details} />
      <Column label='Acceleration m/s^2' accessor='acceleration' width={250} data={details} />
      <Column label='Robot' accessor='robot' width={125} data={details} />
      <Column label='Model' accessor='model' width={125} data={details} />
    </div>
  </div>
);

export default ProjectDetails;
