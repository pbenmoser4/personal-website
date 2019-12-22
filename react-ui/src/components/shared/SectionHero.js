import React from 'react';

const SectionHero = props => {

  if (props.section){
    const { color, icon } = props.section
    return (
        <section className={`hero ${color ? `is-${color}` : ""}`}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <span className="icon is-large">
                  <i className={`fa fa-${icon}`}></i>
                </span>
                {props.title}
              </h1>
              <h2 className="subtitle">
                {props.subtitle}
              </h2>
            </div>
          </div>
        </section>
    )
  } else {
    return <div>What the what!?</div>
  }
}

export default SectionHero;
