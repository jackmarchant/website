import React, { Component } from 'react';
import face from './jack.jpg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="heading">Jack Marchant</h1>
          <h3 className="subheading">Web Developer</h3>
        </div>
        <div className="App-main">
          <p className="body-copy">I'm a Web Developer with a passion for creating amazing experiences on the web. I have experience with PHP, Node, React, front and back end programming.</p>
          <p className="body-copy">Follow me on:</p>
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
        </div>
      </div>
    );
  }
}

export default App;
