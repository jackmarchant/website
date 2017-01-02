import React from 'react';
import Link from '../../components/Link';
import Main from '../../components/Main';

const About = () => {
  return (
    <Main content={
      <p className="body-copy"><Link to="/" text="Read about Jack Marchant" /></p>
    } />
  );
};

export default About;