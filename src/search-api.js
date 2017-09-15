import _ from 'underscore';

const BASE_URL = 'https://api.mlab.com/api/1';
// const BASE_URL = 'https://www.foo.com';
const DATABASE_PATH = '/databases/projects/collections/projects';
const API_KEY = 'DRGGxwj_kb8S_v6Ev6eRefnsTyBtxjI9';

/*
  Make a get request to the mlab REST api
*/
const makeRequest = (query) => {
  return fetch(BASE_URL + DATABASE_PATH + '?apiKey=' + API_KEY + '&q=' + JSON.stringify(query) + '&s={ id: 1}');
}

/*
  Generate a query object that the mlab REST api can use
*/
const generateQuery = (term, columns, exact_only, active_filters) => {
  const term_query = (_.isEmpty(term))
    ? undefined
    : { $or: columns.map(c => ({ [c]: { $regex: (exact_only) ? '^'+term+'$' : term, $options: 'i' } })) };
  return (active_filters.length > 0)
    ? (term_query) ? { $and: [term_query, ...active_filters] } : { $and : active_filters }
    : (term_query) ? term_query : {};
}

/*
  Perform a search against the mlab REST api with the given parameters

  params:
    onSuccess - func([PROJECT]) - called when the data is successfully fetched
    onError - func(ERROR) - called when an error occurs while fetching the data
    term - STRING or NULL - value to search for in the database
    columns - [STRING] - columns to search in for the term
    exact_only - BOOL - whether to only match a project if it has the term exactly (case-insensitive) in any of the columns
    active_filters - [FILTER] - only return projects that match these criteria
*/
export const search = (onSuccess, onError, term, columns, exact_only, active_filters) => {
  return makeRequest(generateQuery(term, columns, exact_only, active_filters))
    .then(resp => resp.json())
    .then(data => onSuccess(data))
    .catch(err => onError(err));
}
