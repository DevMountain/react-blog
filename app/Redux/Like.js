const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

const initialState = {
  like: 'false'
}

export function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case LIKE:
      return {
        like: 'true'
      };
    case UNLIKE:
      return {
        like: 'false'
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
