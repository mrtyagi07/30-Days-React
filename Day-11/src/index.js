import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './app';
// If a component is exported as default we do not need curly bracket during importing.
import App from './app';

//? Day-11 Converted all class based componets to function based and also used useState

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
