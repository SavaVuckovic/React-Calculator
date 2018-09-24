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
    const { total, next, operation } = this.state;
    let displayValue;

    if (next) {
      displayValue = next;
    } else {
      displayValue = operation ? `${total}${operation}` : total;
    }

    return (
      <div className="calculator">
        <Display number={displayValue}/>
        <ButtonPanel clickHandler={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
