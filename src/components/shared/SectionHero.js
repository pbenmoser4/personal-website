import React from 'react';

const SectionHero = props => {
  return (
      <section className={`hero ${props.color ? `is-${props.color}` : ""}`}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {props.title}
            </h1>
            <h2 className="subtitle">
              {props.subtitle}
            </h2>
          </div>
        </div>
      </section>
  )
}

export default SectionHero;
