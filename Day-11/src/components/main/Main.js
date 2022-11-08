import React from 'react';
// import buttonStyles from 'components/styles/button.js';
import TechList from '../usercard/TechList';
import Button from '../shared/Button';
import Message from '../usercard/Message';
import Welcome from '../usercard/Welcome';
import Login from '../auth/Login';
// Main Component
// Class Component
const Main = props => {
  const { techs, greetPeople, handleTime, loggedIn, handleLogin, message } =
    props;

  // CSS styles in JavaScript Object
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
    margin: '0 auto',
  };

  console.log(message);

  const status = loggedIn ? <Welcome /> : <Login />;
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={props.techs} />
        </ul>
        {techs.length === 3 && (
          <p>You have all the prerequisite courses to get started React</p>
        )}
        <div>
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />{' '}
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          {!loggedIn && (
            <p>
              Please login to access more information about 30 Days Of React
              challenge
            </p>
          )}
        </div>
        <div style={{ margin: 30 }}>
          <Button
            text={loggedIn ? 'Logout' : 'Login'}
            style={buttonStyles}
            onClick={handleLogin}
          />
          <br />
          {status}
        </div>
        <Message message={message} />
      </div>
    </main>
  );
};

export default Main;
