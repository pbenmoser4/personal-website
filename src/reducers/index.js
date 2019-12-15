import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';
import skillsReducer from './skillsReducer';
import appSectionsReducer from './appSectionsReducer';

export default combineReducers({
  experience: experienceReducer,
  skills: skillsReducer,
  appSections: appSectionsReducer
});
