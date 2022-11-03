import React from 'react';
import ReactDom from 'react-dom';
import techIMG from './images/minh-pham-HI6gy-p-WBI-unsplash.jpg';
import css from './app.css';

//!Mapping array of arrays
const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
];

//! Mapping array of objects
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
];

// City Component

const City = ({ city: { name, city } }) => (
  <div>
    <h2>{name}</h2>
    <small> {city}</small>
  </div>
);

//Countries Componenet

const Countries = ({ countries }) => {
  const countryList = countries.map(city => (
    <City key={city.name} city={city} />
  ));
  return <div>{countryList}</div>;
};

// Skill component

const Skill = ({ skill: [tech, level] }) => (
  // const skillList = skill.map(skill => <li>{skill}</li>);
  // return skillList;
  <li>
    {tech} {level}
  </li>
);

// Skills Component

const Skills = ({ skills }) => {
  const skillsList = skills.map(skill => <Skill skill={skill} />);
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

//Number Component
const Numbers = ({ numbers }) => {
  const list = numbers.map(number => <li>{number}</li>);
  return list;
};

const App = () => {
  //!Mapping array of numbers
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <h1>Number List</h1>
      <ul>
        <Numbers numbers={numbers} />
      </ul>
      <h1>Skills Level</h1>
      <Skills skills={skills} />
      <h1>Countries Capital</h1>
      <Countries countries={countries} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
