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

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedInNew: false }
  }

  handleLoginClick() {
    console.log("loginclick");
    this.setState({isLoggedInNew: true});
  }

  handleLogoutClick() {
    console.log("logoutlick");
    this.setState({isLoggedInNew: false});
  }

  render() {
    const isLoggedInNew = this.state.isLoggedInNew;
    
    let button = null;
    if (isLoggedInNew) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
        <Greeting isLoggedIn={isLoggedInNew} />
      </div>
    );
  }
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
        <LoginControl />
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
