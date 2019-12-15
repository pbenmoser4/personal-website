import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionHero from '../shared/SectionHero';
import ResumeExperience from './ResumeExperience';
import ResumeSkill from './ResumeSkill';

import { fetchResumeExperience, fetchResumeSkills, fetchAppSection } from '../../actions';

class Resume extends Component{
  componentDidMount = () => {
    this.props.fetchResumeSkills();
    this.props.fetchResumeExperience();
    this.props.fetchAppSection("Resume");
  }

  renderName = () => {
    return (
      <div className="container" id="resume-name">
        <h1 className="title">Ben Moser</h1>
        <h2 className="subtitle">
          Product Manager, Startup Founder, Machine Learning Expert
        </h2>
      </div>
    )
  }

  textColor = () => {
    return this.props.section ? `has-text-${this.props.section.color}` : "";
  }

  renderOverview = () => {
    return (
      <div className="content" id="resume-overview">
        <h2 className={this.textColor()}>Professional Overview</h2>
        <p>
          Developed social media app after teaching myself how to code,
          convinced a few Stanford CS Masters students to drop out and work
          with me to build it. Won multiple industry awards and led a team
          of pre-sales engineers for a young health-tech startup; directly
          responsible for over 50% of closed revenue from technical
          perspective. Led a multi-continental team to develop the first
          machine learning product for a Forbes Cloud 100 unicorn ($1B+
          valuation), served as their resident machine learning expert.
          </p>
      </div>
    )
  }

  renderExperience = () => {
    if (this.props.experience) {
      const {experience} = this.props;
      return (
        <div className="content">
          <h2 className={this.textColor()}>Professional Experience</h2>
          {experience.map(record => {
            return <ResumeExperience
              experience={record}
              key={record.id}
              color={this.textColor()}
            />
          })}
        </div>
      )
    } else {
      return <div>No Experience. What a LOSER</div>
    }
  }

  renderSkills = () => {
    if (this.props.skills) {
      const {skills} = this.props;
      return (
        <div className="content">
          <h2 className={this.textColor()}>Applicable Skills</h2>
          {skills.map((skill, index) => {
            return <ResumeSkill
              skill={skill}
              key={index}
              color={this.textColor()}
              />
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <SectionHero
          section={this.props.section}
          title="Resume!"
          subtitle='"Wow, he sure has done a lot!" -You, of course'
        />
        <section className="section">
          {this.renderName()}
          <hr className="hr" />
          {this.renderOverview()}
          <hr className="hr" />
          {this.renderExperience()}
          <hr className="hr" />
          {this.renderSkills()}
        </section>
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
