import React from 'react';
import css from '../styles/navbar.css';
import img from '../assets/images/alessio-zaccaria-po1ffK4lLMw-unsplash.jpg';
import Main from '../main/Main';

const Navbar = props => {
  console.log(props);
  return (
    <div>
      <nav className="nav">
        <img
          src={img}
          alt="logo"
          className="nav__logo"
          id="logo"
          designer="Vaibhav"
          data-version-number="3.0"
          Operations
        />
        <ul className="nav__links">
          <li className="nav__item">
            {' '}
            <a
              className="nav__link season spring"
              href="#section--2"
              onClick={() => props.theme('March')}
            >
              Spring
            </a>
          </li>
          <li className="nav__item">
            {' '}
            <a
              className="nav__link season summer"
              href="#section--2"
              onClick={() => props.theme('July')}
            >
              Summer
            </a>
          </li>
          <li className="nav__item">
            {' '}
            <a
              className="nav__link season autumn"
              href="#section--2"
              onClick={() => props.theme('October')}
            >
              Autunm
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link season winter"
              href="#section--2"
              onClick={() => props.theme('Janurary')}
            >
              Winter
            </a>
          </li>
          {/* <li className="nav__item">
            <a
              className="nav__link nav__link--btn btn--show-modal"
              href="#section--2"
              onClick={props.handleTime}
            >
              Show Time
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--3"></a>
          </li>
          <li className="nav__item">
            <a className="nav__link nav__link--btn btn--show-modal" href="">
              Login
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
