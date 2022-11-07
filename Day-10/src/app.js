import React from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import css from './app.css';
import img from './images/alessio-zaccaria-po1ffK4lLMw-unsplash.jpg';
import UserCard from './components/usercard/UserCard';
// named export in arrow function
//! export default in arrow function
// export default const App = () => <h1>Welcome to 30 Days Of React</h1>

// named export in regular function, function declaration
// export function App() {
//   return <h1>Welcome to 30 Days Of React</h1>;
// }

//! Recommended for most of the cases
class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or Greet people to change me',
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
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
    return `${month} ${date}, ${year}`;
  };
  handleTime = () => {
    let message = this.showDate(new Date());
    this.setState({ message });
  };
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020';
    this.setState({ message });
  };

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    };
    const techs = ['HTML', 'CSS', 'JavaScript'];

    const usercard = { ...data.author, img };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        {/* <UserCard usercard={usercard} /> */}

        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} />
      </div>
    );
  }
}
export default App;
