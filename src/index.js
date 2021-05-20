import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
let redirect;
if (window.location.hostname.includes('localhost')){
  redirect = window.location.origin;
} else {
  redirect = window.location.origin + '/feel-good';
}


ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={redirect}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

