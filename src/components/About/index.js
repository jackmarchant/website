import React from 'react';
import {Link} from 'react-router';
import Main from '../Main';

const About = () => {
  return (
    <Main content={
      <p className="body-copy"><Link to="/" className="c-link">Read about Jack Marchant</Link></p>
    } />
  );
};

export default About;