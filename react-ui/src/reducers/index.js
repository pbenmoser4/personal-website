import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';
import skillsReducer from './skillsReducer';
import appSectionsReducer from './appSectionsReducer';
import educationReducer from './educationReducer';
import appReducer from './appReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
  experience: experienceReducer,
  skills: skillsReducer,
  appSections: appSectionsReducer,
  education: educationReducer,
  app: appReducer,
  projects: projectsReducer
});
