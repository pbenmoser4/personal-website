import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAppSection } from '../actions';

import SectionHero from './shared/SectionHero';

class Home extends Component {
  componentDidMount() {
    this.props.fetchAppSection("Home");
  }

  render() {
    return (
      <div className="container">
        <SectionHero
          section={this.props.section}
          title="Hello, World!"
          subtitle="Welcome to Ben Moser's personal website."
        />
        <section className="section">
          <div className="content is-medium">
            <p className="is-large">
              Hi there! I'm Ben Moser, and you've somehow found your way to my
              personal website. Well done, whoever you are! I spent a lot of
              time making the silly little icon in the header, and even more
              coding it, so I hope you enjoy!
            </p>
            <p>
              I'm using this site as a staging area for everything about me.
              It's currently a work in progress, so bear with me, but for now
              you can find some more information about me, my formal resume,
              and if you're interested in reaching out for whatever reason, you
              can get my contact info as well (TODO: add contact info :/ ).
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
