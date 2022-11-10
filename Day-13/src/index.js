import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './app';
// If a component is exported as default we do not need curly bracket during importing.
import App from './app';



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
