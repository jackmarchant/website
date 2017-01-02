import React from 'react';
import {Link} from 'react-router';

const AppLink = ({
  to,
  text,
  external = false
}) => {
  if (external) {
    return (
      <a className="c-link" target="_blank" title={text} href={to}>{text}</a>
    );
  }

  return (
    <Link to={to} className="c-link">{text}</Link>
  );
};

export default AppLink;
