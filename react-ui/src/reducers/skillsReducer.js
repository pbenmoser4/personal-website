import {
  FETCH_RESUME_SKILLS
} from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_RESUME_SKILLS:
      // action.payload = {"experience": "data"}
      return action.payload;
    default:
      return state;
  }
}
