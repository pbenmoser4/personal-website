import {
  FETCH_APP_SECTIONS,
  FETCH_APP_SECTION
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_APP_SECTIONS:
      return action.payload;
    case FETCH_APP_SECTION:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
