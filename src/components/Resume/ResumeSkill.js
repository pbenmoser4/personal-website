import React from 'react';

const ResumeSkill = (props) => {
  const {skill} = props
  return (
    <div className="ui segment">
      <span className={props.color}>{`${skill.name} `}</span> 
      <span>{skill.details.join(' | ')}</span>
    </div>
  )
}

export default ResumeSkill;
