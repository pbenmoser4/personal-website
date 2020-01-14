import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppSection, fetchProjects } from '../actions';

import SectionHero from './shared/SectionHero';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchAppSection("Projects");
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="container">
        <SectionHero
          section={this.props.section}
          title="Projects"
          subtitle="Free time = project time"
        />
        <section className="section">
          <div className="content is-medium">
            <div>
              {this.props.projects.map(project => {
                return (
                  <div>
                    <a href={project.url} key={project.name} target="_blank">{project.name}</a>
                    <div>{project.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    section: state.appSections["Projects"],
    projects: state.projects
  })
}

export default connect(
  mapStateToProps,
  {
    fetchAppSection,
    fetchProjects
  }
)(Projects);
