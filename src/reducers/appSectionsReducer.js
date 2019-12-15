import {
  FETCH_APP_SECTIONS
} from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_APP_SECTIONS:
      return action.payload;
    default:
      return state;
  }
}
