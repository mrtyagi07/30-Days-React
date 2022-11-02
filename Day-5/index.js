// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`;
};

// calling a functons

console.log(getUserInfo('Vaibhav', 'Tyagi', 'India'));

// User component, component should start with an uppercase
const User = props => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.secondName}
      </h1>
      <small>{props.country}</small>
    </div>
  );
};

// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
<User firstName="Vaibhav" secondName="Tyagi" country="India" />;

import React from 'react';
import ReactDom from 'react-dom';
import techIMG from './images/minh-pham-HI6gy-p-WBI-unsplash.jpg';
import css from './app.css';

// const welcome = 'Welcome to 30 Days Of React';
// const title = 'Getting Started React';
// const subtitle = 'JavaScript Library';
// const author = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// };
// const date = 'Oct 4, 2020';

//Header Component
/* const Header = props => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  );
}; */

//date function
const showDate = function (time) {
  const month = time.toLocaleString('default', { month: 'long' });
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

//? Header Component using destructure

//Destructure in one line
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// props => {
//   const data = props.data;
//   const {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   } = data;

// const { firstName, lastName } = author;

//!Number props type

// const Age = props => <div>The person age is {props.age}</div>;
// const Weight = props => (
//   <p>The weight of the object on earth is {props.weight} N.</p>
// );

//!Boolean props type

/* const Status = props => {
  let status = props.status ? 'He is an adult' : 'He is not an adult';
  return <p>{status}</p>;
}; */

//! Array props type

/*
const Header = props => {
  return (
    <div className="header-wrapper">
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.title}</h2>
      <h3>{props.data.subtitle}</h3>
      <p>
        {props.data.author.firstName} {props.data.author.lastName}
      </p>
      <small>{showDate(props.data.date)}</small>
    </div>
  );
}; */

/* const Skills = props => {
  // modifying the skills array

  const skillSet = props.skills.map(skill => <li>{skill}</li>);
  return <ul>{skillSet}</ul>;
}; */

//! TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map(tech => <li key={tech}>{tech}</li>);
  return techList;
};

//! User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

//A button Component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
};

//! Main component

const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

//! Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

//!Object props type

// The App, or the parent or the container component
// Functional Component
const App = () => {
  // const welcome = 'Welcome to 30 Days Of React';
  // const title = 'Getting Started React';
  // const subtitle = 'JavaScript Library';
  // const firstName = 'Vaibhav';
  // const lastName = 'Tyagi';
  // const date = 'Oct 4, 2020';

  /*   let currentYear = 2022;
  let birthYear = 2010;
  const age = currentYear - birthYear;
  let status = age > 18;
  const gravity = 9.81;
  const mass = 75; */

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Vaibhav',
      lastName: 'Tyagi',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  };

  const date = new Date();
  const techs = ['HTML', 'CSS', 'JavaScript'];
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: techIMG };
  //! Function prop types

  // const sayHi = function () {
  //   alert('Hi');
  // };

  const handleTime = () => {
    alert(showDate(new Date()));
  };

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  };

  const showTime = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    alert(`${month} ${day}, ${year}`);
  };

  return (
    <div className="app">
      {/* <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      /> */}
      {/* <Age age={age} />
      <Weight weight={gravity * mass} /> */}
      {/* <Status status={status} /> */}
      {/*  <Skills skills={['HTML', 'CSS', 'JAVASCRIPT']} /> */}

      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />

      {/* <Button text="Greet People" onClick={greetPeople} />
      <Button text="Show Time" onClick={showTime} /> */}

      {/* <Button text="Say Hi" onClick={sayHi} /> */}
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDom.render(<App />, rootElement);
