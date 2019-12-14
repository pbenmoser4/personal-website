// import {
//   FETCH_RESUME_DATA
// } from '../actions/types';
//
// export deafult (state = {}, action) => {
//   switch(action.type) {
//     case FETCH_RESUME_DATA:
//       return
//     default:
//       return state;
//   }
// }

import _ from 'lodash';

import {
  FETCH_RESUME_SKILLS,
  FETCH_RESUME_EXPERIENCE
} from '../actions/types';
import { skills, experience } from '../data';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_RESUME_SKILLS:
      return {...state, [action.payload.id]: action.payload}
    case FETCH_RESUME_EXPERIENCE:
      // action.payload = {"experience": "data"}
      return _.assign(state, action.payload)
    default:
      return state;
  }
}
