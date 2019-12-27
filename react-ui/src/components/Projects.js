import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppSection } from '../actions';

import SectionHero from './shared/SectionHero';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchAppSection("Projects");
  }

  render() {
    return (
      <div className="container">
        <SectionHero
          section={this.props.section}
          title="Projects"
          subtitle="Some of my projects, I guess?"
        />
        <section className="section">
          <div className="content is-medium">
            <p className="is-large">
              This is the projects section. Not a lot here, huh? I guess...
              mind your own business...
            </p>
            <figure className="image is-128x128">
              <img className="is-square" src="https://i.imgur.com/R7cxu39.gif" alt="Swanson"/>
            </figure>
            <p>JK. This section is under construction</p>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    section: state.appSections["Projects"]
  })
}

export default connect(
  mapStateToProps,
  {
    fetchAppSection
  }
)(Projects);
