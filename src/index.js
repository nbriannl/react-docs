import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


const user = {
  firstName: 'Jarper',
  lastName: 'Perez'
};

{/*You can wrap JavaScript expressions inside JSX */}
/*
const element = (
  <a href="https://www.google.com"><h1>
    Hello, {formatName(user)}!
  </h1></a>
);
*/

const element = (
  <h1>{getGreeting({firstName: "carrot", lastName: "tomato"})}</h1>
);


function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  element,
  document.getElementById('root')
);