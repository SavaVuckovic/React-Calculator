import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  render() {
    return (
      <div className="calculator">
        <Display number={'1'}/>
        <ButtonPanel/>
      </div>
    );
  }
}

export default App;
