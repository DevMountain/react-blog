const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

const initialState = {
  like: 'false',
  count: 0
}

export function reducer(state = initialState, action = {}) {
  console.log(state);
  switch(action.type) {
    case LIKE:
      console.log(initialState.count);
      return {
        like: 'true',
        count: initialState.count++
      };
    case UNLIKE:
      return {
        like: 'false',
        count: initialState.count--
      };
    default:
      return state;
  }


}

export function likeBlog() {
  return {
    type: LIKE
  };
}

export function unlikeBlog() {
  return {
    type: UNLIKE
  };
}
