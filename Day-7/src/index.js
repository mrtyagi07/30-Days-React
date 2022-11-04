import React from 'react';
import ReactDom, { render } from 'react-dom';
import css from './app.css';
import img from './images/minh-pham-HI6gy-p-WBI-unsplash.jpg';

//! Day-7

// Pure JavaScript class and child
// Imagine this what we import from React package
// class Component {
//   constructor(props) {}
// }

// This how we make class based components by inheriting from the parent
// class Child extends Component {
//   constructor(props) {
//     super(props);
//   }
// }

//! User Card Component

class Usercard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, lastName, img } = this.props.user;
    return (
      <div className="user-card">
        <img src={img} alt={firstName}></img>
        <h2>
          {firstName}
          {lastName}
        </h2>
      </div>
    );
  }
}

// A button component
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }

  //!Methods in Class based component
  greetPeople = () => {
    alert('Hey Vaibhav!');
  };

  render() {
    //! We can avoid this repetition using destructuring.
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <h3>
            {firstName} {lastName}
          </h3>
          <small>{date}</small>
          <button onClick={this.greetPeople}>Touch me</button>
        </div>
      </header>
    );
  }
}

// TechList Component
// functional component
// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'JavaScript'];
//   const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>);
//   return techsFormatted;
// };

//! TechList Component
//! class component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techsFormatted = this.props.techs.map(tech => (
      <li key={tech}>{tech}</li>
    ));
    return techsFormatted;
  }
}

// Main Component
// Functional Component
/* const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
    </div>
  </main>
);
 */

//! Main Component
//! Class Component

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <Usercard user={this.props.user} />
          <Button
            text="Greet people"
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text="Show Time"
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

// Footer Component
// Functional component
/* const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
); */

//! Footer Component
//! Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

// The App, or the parent or the container component
// Functional Component
/* const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
); */

//! The App, or the parent or the container component
//! Class Component
/*
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
} */

//? Accessing props in Class components
class App extends React.Component {
  showDate = time => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  };
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    };
    const techs = ['HTML', 'CSS', 'JavaScript'];

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, img: img };

    return (
      <div className="app">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
