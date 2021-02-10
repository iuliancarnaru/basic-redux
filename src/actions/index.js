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
  const responese = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: responese.data });
};
