import React from 'react';
import './App.css';

const App = (props) => (
  <div className="app">
    <div className="app__wrap">{props.children}</div>
  </div>
);

export default App;
