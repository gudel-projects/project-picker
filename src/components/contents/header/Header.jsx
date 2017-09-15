import React from 'react';

import PillButton from '../../general/PillButton';

const Header = ({ count, term, onClearTerm }) => (
  <div className='projectsHeader'>
    <div className='projectsHeaderCount'>
      {count} Project{(count === 1) ? null : 's'}
    </div>
    <div className='projectsHeaderQuery'>
      {term
        ? <PillButton value={term} onClose={onClearTerm} />
        : null
      }
    </div>
  </div>
);

export default Header;
