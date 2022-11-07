import React from 'react';
import ReactDOM, { render } from 'react-dom';
import css from './app.css';
import image from './images/alessio-zaccaria-po1ffK4lLMw-unsplash.jpg';

const Button = ({ text, funcn }) => (
  <div>
    <button onClick={funcn}>{text}</button>
  </div>
);

const Main = ({
  data: {
    welcome,
    title,
    subtitle,
    image,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <div className="usercard">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <img src={image} alt={firstName}></img>
      <h3>{subtitle}</h3>
      <li>
        <Button text="Spring" onClick={this.props.spring} />
      </li>
      <p>
        <blockquote>
          {firstName} {lastName}
        </blockquote>
      </p>
      <small>{date}</small>
    </div>
  );
};

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
  constructor(props) {
    super(props);
  }

  theme = () => {
    console.log('Hi');
    document.body.style.backgroundColor = '#c2410c';
  };

  render() {
    const data = {
      welcome: `Welcome to Vaibhav's Empire`,
      title: 'The ruler of Hell',
      subtitle: 'Things which may terffied you',
      image: { image },
      author: {
        firstName: 'Vaibhav',
        lastName: 'Tyagi',
      },
      date: 'Nov 6, 2022',
    };

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: image };
    return (
      <div className="app">
        <main>
          data={data}
          theme={this.props.theme}
          user={user}
          <p>This application is for theme change according to season</p>
        </main>
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

{
  /* <div className="app">
<Header data={data} />
<Main
  techs={techs}
  handleTime={this.handleTime}
  greetPeople={this.greetPeople}
  loggedIn={this.state.loggedIn}
  handleLogin={this.handleLogin}
  message={this.state.message}
/>
<Footer date={new Date()} />
</div> */
}

<ul className="buttons">
  <li>
    <Button text="Spring" onClick={this.props.spring} />
  </li>
  <li>
    <Button text="Summer" onClick={this.props.handleTime} />
  </li>
  <li>
    <Button text="Autunm" onClick={this.props.handleTime} />
  </li>
  <li>
    <Button text="Winter" onClick={this.props.handleTime} />
  </li>
</ul>;
