import {
  FETCH_RESUME_EDUCATION
} from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_RESUME_EDUCATION:
      return action.payload;
    default:
      return state;
  }
}
