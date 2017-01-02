import React from 'react';
import face from './jack.jpg';
import Link from '../Link';

export default () => {
  return (
    <div>
      <p className="body-copy">I'm a full-stack web engineer interested in all things JavaScript. <br/> I have experience in a number of other languages, frameworks and tools.</p>
      <p className="body-copy">When I'm not coding, I enjoy reading and writing software engineering articles.</p>
      <p className="body-copy">Pick your pipe:</p>
      <ul className="c-list c-list--inline">
        <li>
          <Link to="https://twitter.com/jackmarchant10" text="Twitter" external />
        </li>
        <li>
          <Link to="https://medium.com/@jackmarchant" text="Medium" external />
        </li>
        <li>
          <Link to="https://github.com/jackmarchant" text="GitHub" external />
        </li>
      </ul>
      <img src={face} className="c-photo" alt="Jack Marchant"/>
    </div>
  );
};