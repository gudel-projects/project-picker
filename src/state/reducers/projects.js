import { SEARCH_SUCCESS } from '../actions';

const INITIAL_STATE = [];

export const getProjectCount = state => state.projects.length;

const projects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return action.projects;
    default:
      return state;
  }
};

export default projects;
