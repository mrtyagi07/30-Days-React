import React from 'react';
// TechList Component
// class base component
const TechList = props => {
  const { techs } = props;
  const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>);
  return techsFormatted;
};
export default TechList;
