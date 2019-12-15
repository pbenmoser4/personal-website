import React from 'react';

const ResumeEducation = props => {
  const {education} = props;
  return (
    <div className="content">
      <h4>
        <span className={props.color}>{education.name}</span>
        <span className="has-text-grey-light">{` | ${education.location}`}</span>
      </h4>
      {education.degrees.map((item, index) => {
        return (
          <div key={index}>
            <span className="has-text-grey-darker">{item.name}</span>
            <span className="has-text-grey">{item.awards.length > 0 ? ` | ${item.awards}` : ''}</span>
            <span className="has-text-grey-light">{item.additionalSource ? ` | ${item.additionalSource}` : ''}</span>
            <span className="has-text-grey-lighter">{` | ${item.dates}`}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ResumeEducation;
