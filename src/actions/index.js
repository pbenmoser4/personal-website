import {
  FETCH_RESUME_EXPERIENCE,
  FETCH_RESUME_SKILLS,
  FETCH_APP_SECTIONS
} from './types';

import { skills, experience, appSections } from '../data';

export const fetchResumeExperience = () => async dispatch => {
  dispatch({
    type: FETCH_RESUME_EXPERIENCE,
    payload: experience
  })
}

export const fetchResumeSkills = () => async dispatch => {
  dispatch({
    type: FETCH_RESUME_SKILLS,
    payload: skills
  })
}

export const fetchAppSections = () => async dispatch => {
  dispatch({
    type: FETCH_APP_SECTIONS,
    payload: appSections
  })
}
