import React from 'react';

import Filter from './filter';
import Search from './search';

const Header = () => (
  <div className='header'>
    <Search />
    <Filter />
  </div>
);

export default Header;
