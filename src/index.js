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

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

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
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

//============================

class FidgetButton extends React.Component {
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
        <p><b>Click Me! I am FidgetButton!</b></p>
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
      <h1>You are a Guest.</h1>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
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

function UserStatus(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  )
}

class LoginControl extends React.Component {

  render() {
    var isLoggedIn = this.props.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.props.onClick} />;
    } else {
      button = <LoginButton onClick={this.props.onClick} />;
    }

    return (
      <div>
        <UserStatus isLoggedIn={isLoggedIn} />
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

//============================

function Mailbox(props) {
  if (!props.isLoggedIn) {
    return null;
  }

  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}



//============================

//============================



const messages = ['React', 'Re: React', 'Re:Re: React'];

class DynamicUserBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    console.log("loginclick");
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    console.log("logoutclick");
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        <LoginControl
          onClick={
            (!this.state.isLoggedIn) ? this.handleLoginClick : this.handleLogoutClick
          }
          isLoggedIn={this.state.isLoggedIn}
        />
        <Mailbox isLoggedIn={this.state.isLoggedIn} unreadMessages={messages} />
      </div>
    );
  }
}

function StaticHeader(props) {
  return (
    <div>
      <Clock />
      <FidgetButton />
    </div>
  );
}

function App(props) {
  return (
    <div>
      <StaticHeader />
      <DynamicUserBody />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
