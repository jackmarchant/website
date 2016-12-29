import React, { Component } from 'react';
import face from './jack.jpg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="heading">Jack Marchant</h1>
          <h3 className="subheading">Full-stack engineer</h3>
        </div>
        <div className="App-main">
          <p className="body-copy">I'm a full-stack web engineer.</p>
          <p className="body-copy">I'm interested in JavaScript, however I do have experience in a number of other langages.</p>
          <p className="body-copy">When I'm not coding, I enjoying reading and writing software engineering articles.</p>
          <p className="body-copy">Pick your pipe:</p>
          <ul className="c-list">
            <li>
              <a className="c-link" target="_blank" title="Jack Marchant Twitter" href="http://twitter.com/jackmarchant10">Twitter</a>
            </li>
            <li>
              <a className="c-link" target="_blank" title="Jack Marchant Medium" href="http://medium.com/@jackmarchant">Medium</a>
            </li>
            <li>
              <a className="c-link" target="_blank" title="Jack Marchant GitHub" href="http://github.com/jackmarchant">GitHub</a>
            </li>
          </ul>
          <img src={face} className="c-photo" alt="Jack Marchant"/>
          <p>(That's me ^ )</p>
        </div>
      </div>
    );
  }
}

export default App;