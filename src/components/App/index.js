import React from 'react';
import './style.css';
import Main from '../Main';
import Intro from '../Intro';

const App = () => {
  return (
    <Main content={<Intro />} />
  );
};

export default App;