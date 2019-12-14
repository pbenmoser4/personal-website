import {
  FETCH_RESUME_EXPERIENCE,
  FETCH_RESUME_SKILLS
} from './types';

import { skills, experience } from '../data';

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
