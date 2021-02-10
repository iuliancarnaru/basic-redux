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

export const fetchPosts = () => async (dispatch) => {
  // returns an array of objects
  const response = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  // returns an object
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
