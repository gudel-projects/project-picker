import _ from 'underscore';

import { SEARCH_SUCCESS, TOGGLE_PROJECT } from '../actions';

const INITIAL_STATE = [];

export const getIsExpanded = (state, id) => state.expanded.includes(id);

const expanded = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PROJECT:
      const { id } = action;
      return state.includes(id) ? _.without(state, id) : [...state, id];
    case SEARCH_SUCCESS:
      return [];  // after a search, collapse all projects
    default:
      return state;
  }
};

export default expanded;
