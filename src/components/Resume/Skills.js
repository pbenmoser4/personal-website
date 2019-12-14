import React from 'react';

const renderSkill = (skill) => {
  const skillString = skill['data'].join(' | ');

  return (
    <div style={{marginBottom:"30px"}}>
      <div className="ui blue header">
        {skill['name']}
      </div>
      {skillString}
    </div>
  )
}

const Skills = (props) => {
  return (
    <div className="ui segment">
      <h3 className="ui blue dividing header">
        Applicable Skills
      </h3>
      {props.skills.map(s => renderSkill(s))}
    </div>
  )
}

export default Skills;
