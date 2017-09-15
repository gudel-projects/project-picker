import {
  SEARCH,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
} from '../actions';

const INITIAL_STATE = false;

export const getIsLoading = state => state.loading;

const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return true;
    case SEARCH_SUCCESS:
      return false;
    case SEARCH_ERROR:
      return false;
    default:
      return state;
  }
};

export default loading;
