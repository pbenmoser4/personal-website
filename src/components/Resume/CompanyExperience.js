import React from 'react';

const CompanyExperience = (props) => {
  const info = props.info;
  // console.log(info);

  return (
    <div className="ui segments">
      <div className="ui top attached segment">
        <h3 className="ui blue header">
          {info['name']}
          <div className="sub header">
            {info['position']}
          </div>
        </h3>
        <span className="ui bold content">
          {info['location']}
        </span>
        <span style={{color:"grey"}}> {info['dates']}</span>
      </div>
      <div className="ui buttom attached segment">
        <div className="ui bulleted list">
          {info['details'].map((det) => <div className="item">{det}</div>)}
        </div>
      </div>
    </div>
  )
}

export default CompanyExperience;
