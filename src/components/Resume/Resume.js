import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';
import SectionHero from '../shared/SectionHero';

import { fetchResumeExperience, fetchResumeSkills, fetchAppSection } from '../../actions';

class Resume extends Component{
  componentDidMount = () => {
    this.props.fetchResumeSkills();
    this.props.fetchResumeExperience();
    this.props.fetchAppSection("Resume");
  }

  renderSectionHero() {
    if (this.props.section) {
      const section = this.props.section;
      return <SectionHero color={section.color}
        title="Resume!"
        subtitle='"Wow, he sure has done a lot!" -You'
      />
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderSectionHero()}
        Resume
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    skills: state.skills,
    section: state.appSections["Resume"]
  }
}

export default connect(
  mapStateToProps,
  {fetchResumeExperience, fetchResumeSkills, fetchAppSection}
)(Resume);
