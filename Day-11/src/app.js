import React, { useState } from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import css from './app.css';
import img from './images/alessio-zaccaria-po1ffK4lLMw-unsplash.jpg';
import UserCard from './components/usercard/UserCard';
import Country from './components/main/Country';
// named export in arrow function
//! export default in arrow function
// export default const App = () => <h1>Welcome to 30 Days Of React</h1>

// named export in regular function, function declaration
// export function App() {
//   return <h1>Welcome to 30 Days Of React</h1>;
// }

//! Recommended for most of the cases
const App = props => {
  const showDate = time => {
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

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const handleTime = () => {
    let message = showDate(new Date());
    setMessage([message]);
  };

  const greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020';
    setMessage([message]);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  // const [techs,setTechs]=useState(['HTML', 'CSS', 'JS']);
  const [message, setMessage] = useState(
    'Click show time or Greet people to change me'
  );

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

  const usercard = {
    firstName: 'Vaibhav',
    lastName: 'Tyagi',
    img: { img },
  };

  const country = {
    name: 'Lucifer',
    capital: 'Delhi',
    flag: 'India',
    languages: 'Hindi',
    population: '2.3B',
    currency: 'Ruppes',
  };

  return (
    <div className="app">
      {/* {backgroundColor} */}
      <Header data={data} />
      <UserCard usercard={usercard} />
      <Main
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        loggedIn={loggedIn}
        handleLogin={handleLogin}
        message={message}
      />
      {/* <Country country={country} /> */}

      <Footer date={new Date()} />
    </div>
  );
};

export default App;
