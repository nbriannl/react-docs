import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

/*
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
*/

/*function Clock(props) {*/
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //life cycle hooks
  componentDidMount() {
    // setInterval() calls a function at the specified interval (in ms)
    // setInterval( f(){ ... }, interval)
    this.timerID = setInterval(
      () => this.tick(), //refer to line 41
      1000
    );
  }

  //more life cycle hooks
  //Only used is the Clock Component is ever removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/*function tick() {*/
/*const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);*/
ReactDOM.render(
  /*element,*/
  /*<Clock date={new Date()} />,*/
  <Clock />,
  document.getElementById('root')
);
/*}*/

/*setInterval(tick, 1000);*/
