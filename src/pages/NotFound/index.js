import React from 'react';
import Main from '../../components/Main';
import Link from '../../components/Link';

const NotFound = () => {
  return (
    <Main content={
      <div>
        <p className="body-copy">Sorry, this page doesn't exist.</p>
        <p className="body-copy">I have another one you might like? <Link to="/" text="See page" /></p>
      </div>
    } />
  );
};

export default NotFound;