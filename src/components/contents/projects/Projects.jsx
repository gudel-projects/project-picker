import React from 'react';

import Project from '../project';

const Projects = ({ projects }) => (
  <div className='projects'>
    {projects.map(p => <Project key={p.id} {...p} />)}
  </div>
);

export default Projects;
