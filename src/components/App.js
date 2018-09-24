import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick(btnName) {
    const result = calculate(this.state, btnName);
    const { total, next, operation } = result;
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <Display number={next ? next : total}/>
        <ButtonPanel clickHandler={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
