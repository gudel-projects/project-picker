import { SET_FILTERS } from '../actions';

const INITIAL_STATE = {
  engineer: undefined,
  customer: undefined,
  'details.axis': { $in: [] },
  'details.robot': undefined,
  'details.velocity': { $gte: undefined, $lte: undefined },
  'details.model': undefined,
};

// selectors
export const getActiveFilters = (state) => {
  let activeFilters = [];
  const {
    engineer,
    customer,
    'details.axis': axis,
    'details.model': model,
    'details.robot': robot,
    'details.velocity': velocity,
  } = state;

  if (engineer) activeFilters.push({ engineer });
  if (customer) activeFilters.push({ customer });
  if (axis['$in'].length > 0) activeFilters.push({ 'details.axis': axis });
  if (robot) activeFilters.push({ 'details.robot': robot });
  if (velocity['$gte'] || velocity['$lte']) activeFilters.push({ 'details.velocity': velocity });
  if (model) activeFilters.push({ 'details.model': model });

  return activeFilters;
}

export const getModelFilterState = state => state.filters['details.model'];

// reducer
const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return action.filters;
    default:
      return state;
  }
};

export default filters;
