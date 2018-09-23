import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
// testing
import calculate from './logic/calculate';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// testing
const x = calculate({
  total: 3,
  next: 5,
  operation: 'add'
}, '+');
console.log(x);