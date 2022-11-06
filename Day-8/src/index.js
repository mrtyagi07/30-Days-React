import React from 'react';
import ReactDom, { render } from 'react-dom';
import css from './app.css';
import img from './images/minh-pham-HI6gy-p-WBI-unsplash.jpg';

// //Date method
// const showDate = time => {
//   const month = time.toStringLocale('default', { month: 'short' });
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return `${month} ${date}, ${year}`;
// };

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

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

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.styles}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
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

class App extends React.Component {
  /*  state = {
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
  };

  changeAnimal = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
    let catURL =
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80';
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  }; */

  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
    mode: 'light',
  };
  showDate = time => {
    const month = time.toLocaleString('default', { month: 'short' });
    // toLocaleString('en-GB', { timeZone: 'UTC' })
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };
  //Adding merthod
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Minus method
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  };
  changeBackground = () => {
    if (this.state.mode === 'light') {
      document.body.style.backgroundColor = 'rgb(0 0 0)';
      document.body.style.color = 'white';
      document.querySelector('.header-wrapper').style.backgroundColor = 'black';
      this.setState({ mode: 'dark' });
    }
    if (this.state.mode === 'dark') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelector('.header-wrapper').style.backgroundColor = 'aqua';
      this.setState({ mode: 'light' });
    }
  };
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Vaibhav',
        lastName: 'Tyagi',
      },
      date: 'Nov 05, 2022',
    };
    const techs = ['HTML', 'CSS', 'JavaScript'];
    const date = new Date();
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: img };
    //accessing the state value
    // const count = this.state.count;
    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
        {/* <h1>30 Days of React</h1>
        <div className="animal">
          <img src={this.state.image} alt="animal" />
        </div>
        <button onClick={this.changeAnimal} className="btn btn-add">
          Change
        </button> */}

        {/* <h1>{count}</h1>
        <div className="btns">
          <button className="btn btn-add" onClick={this.addOne}>
            Increase the count
          </button>
          <button className="btn btn-minus" onClick={this.minusOne}>
            Decrease the count
          </button>
        </div> */}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDom.render(<App />, rootElement);
