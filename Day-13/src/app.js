import React from 'react';
import Todos from './components/header/Todos';
import CSS from './app.css';
const app = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todos text="Learn React" />
    </div>
  );
};

export default app;
