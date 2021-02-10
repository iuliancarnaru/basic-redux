import _ from 'lodash';
import jsonplaceholder from '../api/jsonPlaceholder';

// Async action creators
// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const responese = await jsonplaceholder.get('/posts');

//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: responese,
//     });
//   };
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  // returns an array of objects
  const response = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/*

// the downside is that we can't refetch for the same user id
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// lodash memoization
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
});

*/
