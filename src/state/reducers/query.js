import { SET_QUERY } from '../actions';

const INITIAL_STATE = {
  term: '',
  columns: ['customer', 'engineer', 'details.robot', 'details.model'],
  exact_only: false
};

// selectors
export const getTerm = state => state.query.term;

const query = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.query;
    default:
      return state;
  }
};

export default query;
