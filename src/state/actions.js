import _ from 'underscore';

import { search as doSearch } from '../search-api';
import { getActiveFilters } from './reducers/filters';

/*
  To add additional filters, scroll down to the filters section
*/

/** SEARCH **/
export const SEARCH = 'SEARCH';
export const search = () => {
  return (dispatch, getState) => {
    dispatch({ type: SEARCH });
    const { filters, query: { term, columns, exact_only } } = getState();
    const success = projects => dispatch(searchSuccess(projects));
    const error = err => dispatch(searchError(err));
    return doSearch(
      success,
      error,
      term,
      columns,
      exact_only,
      getActiveFilters(filters)
    );
  }
}

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const searchSuccess = (projects) => ({
  type: SEARCH_SUCCESS,
  projects,
});

export const SEARCH_ERROR = 'SEARCH_ERROR';
const searchError = (err) => ({
  type: SEARCH_ERROR,
  err,
});

/** EXPANDED PROJECTS **/
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const toggleProject = (id) => ({
  type: TOGGLE_PROJECT,
  id,
});

/** QUERY **/
export const SET_QUERY = 'SET_QUERY';
export const setQuery = (query) => {
  return dispatch => {
    dispatch({ type: SET_QUERY, query });
    return dispatch(search());
  }
};

export const setTerm = (term) => {
  return (dispatch, getState) => {
    const { query } = getState();
    return dispatch(setQuery(Object.assign({}, query, { term })));
  }
}

export const toggleSearchableColumn = (column) => {
  return (dispatch, getState) => {
    const { query, query: { columns } } = getState();
    const newColumns = columns.includes(column) ? _.without(columns, column) : [...columns, column];
    return dispatch(setQuery(Object.assign({}, query, { columns: newColumns })));
  }
}

export const toggleExactOnly = () => {
  return (dispatch, getState) => {
    const { query, query: { exact_only } } = getState();
    return dispatch(setQuery(Object.assign({}, query, { exact_only: !exact_only })));
  }
}

/** FILTERS **/
/*
  NB: If you wish to add an additional filter, please read

  To add an additional filter, you will need to add a method below.  The idea
  is to take the new value as an input parameter create a new filter state with
  this updated information, then return dispatch(setFilters(newFilters));  Note
  that setFilters updates the filters state and kicks off a search
*/
export const SET_FILTERS = 'SET_FILTERS';
export const setFilters = (filters) => {
  return dispatch => {
    dispatch({ type: SET_FILTERS, filters });
    return dispatch(search());
  }
}

export const setModel = (value) => {
  return (dispatch, getState) => {
    const { filters } = getState();
    const newFilters = Object.assign({}, filters, { 'details.model': value });
    return dispatch(setFilters(newFilters));
  }
}

export const setRobot = (name) => {
  return (dispatch, getState) => {
    const { filters } = getState();
    const newFilters = Object.assign({}, filters, { 'details.robot': name });
    return dispatch(setFilters(newFilters));
  }
}

export const setMinVelocity = (value) => {
  return (dispatch, getState) => {
    const { filters, filters: { velocity } } = getState();
    const newVelocity = Object.assign({}, velocity, { $gte: value });
    const newFilters = Object.assign({}, filters, { 'details.velocity': newVelocity });
    return dispatch(setFilters(newFilters));
  }
}

export const setMaxVelocity = (value) => {
  return (dispatch, getState) => {
    const { filters, filters: { velocity } } = getState();
    const newVelocity = Object.assign({}, velocity, { $lte: value });
    const newFilters = Object.assign({}, filters, { 'details.velocity': newVelocity });
    return dispatch(setFilters(newFilters));
  }
}

export const toggleAxis = (value) => {
  return (dispatch, getState) => {
    const { filters, filters: { 'details.axis': axis } } = getState();
    const currentAxes = axis['$in'];
    const newAxes = (currentAxes.includes(value))
      ? _.without(currentAxes, value)
      : [...currentAxes, value];
    const newFilters = Object.assign({}, filters, { 'details.axis': { '$in': newAxes } });
    return dispatch(setFilters(newFilters));
  }
}
