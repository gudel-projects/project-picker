import { combineReducers } from 'redux';

import expanded from './expanded';
import filters from './filters';
import loading from './loading';
import projects from './projects';
import query from './query';

export default combineReducers({
  projects,
  expanded,
  query,
  filters,
  loading,
});
