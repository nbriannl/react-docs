import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

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
      () => this.tick(), //refer to tick()
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
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

//============================

class ToggleLogin extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = { isToggleOn: this.props.isLoggedIn };

    // This binding is necessarry to make 'this' work in the callback
  }
  */

  /*
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  */

  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.isLoggedIn ? 'SWITCH TO GUEST' : 'SWTICH TO USER'}
      </button>
    );
  }
}

//============================

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      numPressed: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      prevState => {
        return {
          isToggleOn: !prevState.isToggleOn,
          numPressed: prevState.numPressed + 1
        };
      }
    );
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        <p><b>Number of Times Pressed:</b></p>
        <p>{this.state.numPressed} {this.state.isToggleOn ? 'ON' : 'OFF'}</p>
      </button>
    )
  }
}

//==========================

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return (
    <div>
      <h1>Please sign up.</h1>
      <h1>You're a Guest.</h1>
    </div>
  );
}

function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

//============================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false 
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  } 

  render() {
    return (
      <div>
        <Clock />
        <Button />
        <ToggleLogin 
          onClick={() => this.handleClick()}  
          isLoggedIn={this.state.isLoggedIn} 
        />
        <Greeting isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
