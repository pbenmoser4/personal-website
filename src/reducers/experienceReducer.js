import {
  FETCH_RESUME_EXPERIENCE
} from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_RESUME_EXPERIENCE:
      // action.payload = {"experience": "data"}
      return action.payload;
    default:
      return state;
  }
}
