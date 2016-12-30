import React from 'react';
import Main from '../Main';
import {Link} from 'react-router';

const NotFound = () => {
  return (
    <Main content={
      <div>
        <p className="body-copy">Sorry, this page doesn't exist.</p>
        <p className="body-copy">I have another one you might like? <Link to="/" className="c-link">See page</Link></p>
      </div>
    } />
  );
};

export default NotFound;