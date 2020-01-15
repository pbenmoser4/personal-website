import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
              personal website. I spent a lot of time making the silly little
              icon in the header, and even more coding it, so I hope you enjoy!
            </p>
            <p>
              I'm a product manager from Philadelphia currently living in
              beautiful New York City, where, to quote Liz Lemon,
              <a href="https://www.youtube.com/watch?v=knnIEY3bmQI" target="_blank">
                {` "it's where dreams are *made up*, there's nothing you *can do*"`}
              </a>. I currently work at <a href="https://www.collibra.com/" target="_blank">{`Collibra `}</a>
              as product manager of Smart Catalog initiatives. Every day, I get
              to work with a ton of smart, motivated people, and I spend a good
              deal of my time thinking about Machine Learning, a personal passion.
              I also help out as talent for some of their <a href="https://www.youtube.com/watch?v=bgDMwg3boAM&feature=youtu.be" target="_blank">{`Marketing Material`}</a>,
              trying not to stutter whenever possible.
            </p>
            <p>
              In my free time, I spend a lot of time running (I ran my first
              marathon in 2019), and building out my own personal
              <Link to="/projects">{` projects`}</Link> using <a href="https://reactjs.org/" target="_blank">{`react.js `}</a>
              when I feel like front-end dev (this site also uses <a href="https://bulma.io/" target="_blank">{`bulma`}</a>),
              and <a href="https://www.python.org/" target="_blank">{`python `}</a>
              when I feel like crunching numbers. I also spend an inordinate
              amount of time watching and tracking
              <a href="https://www.youtube.com/watch?v=DjobyMt0LeU" target="_blank">{` the`}</a>
              <a href="https://www.youtube.com/watch?v=ILcEJhThIoU" target="_blank">{` Philadelphia`}</a>
              <a href="https://www.youtube.com/watch?v=xSX0FfmpiyY" target="_blank">{` Flyers`}</a>,
              which gives me a fun opportunity to play around with Data Science
              using python.
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
