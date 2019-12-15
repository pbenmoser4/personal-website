import React from 'react';
import { connect } from 'react-redux';

import CompanyExperience from './CompanyExperience';
import Skills from './Skills';
import { experience, skills } from '../../data';
import { fetchResumeExperience, fetchResumeSkills } from '../../actions';

class Resume extends React.Component{
  componentDidMount = () => {
    this.props.fetchResumeSkills()
    this.props.fetchResumeExperience()
  }

  onSectionTitleClick = (event) => {
    // console.log(event.target.id);
  }

  renderSkills = () => {
    if (this.props.skills) {
      return <Skills skills={this.props.skills}/>
    } else {
    }
  }

  renderExperience = () => {
    if (this.props.experience) {
      // console.log("experience available");
      // console.log(this.props.experience);
      return (
        this.props.experience.map(exp =>
          <CompanyExperience key={exp.id} info={exp}></CompanyExperience>
        )
    )
    } else {
      // console.log("no experience");
    }
  }

  render() {
    return (
      <div className="ui two column grid">
        <div className="ui ten wide column">
          <div className="ui text ">
            <h1 className="ui blue header">
              <div>
                Ben Moser
                <div className="sub header">
                  Tech Product Manager, Startup Founder, Machine Learning Expert
                </div>
              </div>
            </h1>
            <div>
              <i className="envelope blue icon"></i>
              <a href="mailto:pbenmoser4@gmail.com">pbenmoser4@gmail.com</a>
            </div>
            <div>
              <i className="linkedin blue icon"></i>
              <a href="https://www.linkedin.com/in/ben-moser-7b714542/">Ben Moser</a>
            </div>
            <div>
              <i className="twitter blue icon"></i>
              <a href="https://twitter.com/pbenmoser4">pbenmoser4</a>
            </div>
            <div>
              <i className="phone alternate blue icon"></i>
              610.716.9582
            </div>
          </div>

          <div className="ui text" style={{marginTop:"20px"}}>
            <h2 className="ui blue dividing header">Professional Overview</h2>
            <div className="ui">
              Developed social media app after teaching myself how to code,
              convinced a few Stanford CS Masters students to drop out and work
              with me to build it. Won multiple industry awards and led a team
              of pre-sales engineers for health-tech startup; directly responsible
              for over 50% of closed revenue from technical perspective. Led a
              multi-continental team to develop the first machine learning product
              for a Forbes Cloud 100 unicorn ($1B+ valuation), served as their
              resident machine learning expert.
            </div>
          </div>

          <div className="ui text" style={{marginTop:"20px"}}>
            <h2 className="ui blue dividing header">
              Professional Experience
            </h2>
            {this.renderExperience()}
          </div>
        </div>
        <div className="ui six wide column">
          {this.renderSkills()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    skills: state.skills
  }
}

export default connect(
  mapStateToProps,
  {fetchResumeExperience, fetchResumeSkills}
)(Resume);
