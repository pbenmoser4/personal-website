import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';
import skillsReducer from './skillsReducer';

export default combineReducers({
  experience: experienceReducer,
  skills: skillsReducer
});
