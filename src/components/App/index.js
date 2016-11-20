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
          <p>I'm a Web Developer with a passion for creating amazing experiences on the web. I have experience with PHP, Node, React, front and back end programming. You can follow me on Twitter (<a target="_blank" href="http://twitter.com/jackmarchant10">@jackmarchant10</a>) and Medium (<a target="_blank" href="http://medium.com/@jackmarchant">@jackmarchant</a>) or check out my code at GitHub.</p>
          <p></p>
          <img src={face} className="c-photo" alt="Jack Marchant"/>
        </div>
      </div>
    );
  }
}

export default App;
