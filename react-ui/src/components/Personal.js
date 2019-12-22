import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppSection } from '../actions';

import SectionHero from './shared/SectionHero';

class Personal extends Component {
  componentDidMount() {
    this.props.fetchAppSection("Personal");
  }

  render() {
    return (
      <div className="container">
        <SectionHero
          section={this.props.section}
          title="About Me!"
          subtitle="Welcome to Ben Moser's personal website."
        />
        <section className="section">
          <div className="content is-medium">
            <p className="is-large">
              This is the personal section. Not a lot here, huh? I guess...
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
    section: state.appSections["Personal"]
  })
}

export default connect(
  mapStateToProps,
  {
    fetchAppSection
  }
)(Personal);
