import {
  FETCH_MENU_STATUS,
  UPDATE_MENU_STATUS,
  SET_MENU_STATUS
} from '../actions/types';

const initialState = {
  "menu": {"isActive": false}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MENU_STATUS:
      return state;
    case UPDATE_MENU_STATUS:
      return {
        ...state,
        "menu": {"isActive": action.payload}
      }
    case SET_MENU_STATUS:
      return {
        ...state,
        "menu": {"isActive": action.payload}
      }
    default:
      return state;
  }
}
