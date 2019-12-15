import React from 'react';

const ResumeExperience = (props) => {
  const {experience} = props;

  return (
    <div className="content">
      <h4 className={props.color}>{experience.name}</h4>
      <h6 className="has-text-grey-light">
        <span className="has-text-grey">{`${experience.position}`}</span>
        <span className="has-text-grey-light">{` | ${experience.dates}`}</span>
      </h6>
      <ul>
        {experience.details.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default ResumeExperience;
