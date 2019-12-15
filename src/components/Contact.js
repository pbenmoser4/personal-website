import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionHero from './shared/SectionHero';

import { fetchAppSection } from '../actions';

class Contact extends Component {
  componentDidMount() {
    this.props.fetchAppSection("Contact");
  }

  render() {
    console.log(this.props.appSections)
    return (
      <div className="container">
        <SectionHero
          section={this.props.section}
          title="Contact"
          subtitle="Ground Control to Major Ben."
        />
        <section className="section">
          <div className="content is-medium">
            <p className="is-large">
              under construction!
            </p>
            <p>
              Email: pbenmoser4@gmail.com
            </p>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    section: state.appSections["Contact"]
  })
}

export default connect(
  mapStateToProps,
  {fetchAppSection}
)(Contact);
