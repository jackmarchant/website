import React from 'react';
import './style.css';
import Main from '../../components/Main';
import Intro from '../../components/Intro';

const App = () => {
  return (
    <Main content={<Intro />} />
  );
};

export default App;