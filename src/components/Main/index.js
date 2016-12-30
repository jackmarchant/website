import React from 'react';

const Main = ({content}) => {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="heading">Jack Marchant</h1>
        <h3 className="subheading">Full-stack engineer</h3>
      </div>
      <div className="App-main">
        {content}
      </div>
    </div>
  );
};

export default Main;