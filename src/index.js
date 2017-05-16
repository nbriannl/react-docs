import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <a href="https://www.google.com"><h1>
    {/*You can wrap JavaScript expressions inside JSX */}
    Hello, {formatName(user)}!
  </h1></a>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);