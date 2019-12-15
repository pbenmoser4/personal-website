import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppSection } from '../actions';

import SectionHero from './shared/SectionHero';

class Home extends Component {
  componentDidMount() {
    this.props.fetchAppSection("Home");
  }

  renderSectionHero = () => {
    if (this.props.section) {
      const section = this.props.section;
      return <SectionHero color={section.color}
        title="Hello, World!"
        subtitle="Welcome to Ben Moser's personal website."
      />
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderSectionHero()}
        <section className="section">
          <div className="content is-medium">
            <p className="is-large">
              Hi there! I'm Ben Moser, and you've somehow found your way to my
              personal website. Well done, whoever you are!
            </p>
            <p>
              I'm using this site as a staging area for everything about me.
              It's currently a work in progress, so bear with me, but for now
              you can find some more information about me, my formal resume,
              and if you're interested in reaching out for whatever reason, you
              can get my contact info as well. 
            </p>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    section: state.appSections["Home"]
  })
}

export default connect(
  mapStateToProps,
  {
    fetchAppSection
  }
)(Home);
