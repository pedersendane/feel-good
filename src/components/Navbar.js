import React from "react";
import Home from '../pages/Home';
import Dane from '../pages/Dane';
import Breezie from '../pages/Breezie';
import Logo from '../logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    NavLink,
  Link
} from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';



export default function Navbar(){
  const { user, isLoading,isAuthenticated } = useAuth0();
  let router;
  let isDane = false;
  let isBreezie = false;
  
  if (isLoading) {
    router = (<div>Loading...</div>)
  }
  else if (!isLoading) {
    if (isAuthenticated) {
      isDane = (user.email === "pedersen.dane@outlook.com") ? true : false
      isBreezie = (user.email === "bree1224@yahoo.com") ? true : false;
    }
    if (isDane) {
      router = (
        <>
          <Router>
            <div>
              <div id="nav">
                <Link className="hover" to="/feel-good">
                  <img id="navImage" src={Logo} alt={'Logo'} />
                </Link>
                <div id="navLinkContainer">
                  <NavLink className="navLink" to="/feel-good/dane">View Goals</NavLink>
                  <LoginButton />
                  <LogoutButton />
                </div>
              </div>
              <Switch>
                <Route path="/feel-good/dane">
                  <Dane />
                </Route>
                <Route path="/feel-good/breezie">
                  <Breezie />
                </Route>
                <Route path="/feel-good">
                  <Home />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )
    }
    else if (isBreezie) {
      router = (
        <>
          <Router>
            <div>
              <div id="nav">
                <Link className="hover" to="/feel-good">
                  <img id="navImage" src={Logo} alt={'Logo'} />
                </Link>
                <div id="navLinkContainer">
                  <NavLink className="navLink" to="/feel-good/breezie">View Goals</NavLink>
                  <LoginButton />
                  <LogoutButton />
                </div>
              </div>
              <Switch>
                <Route path="/feel-good/dane">
                  <Dane />
                </Route>
                <Route path="/feel-good/breezie">
                  <Breezie />
                </Route>
                <Route path="/feel-good">
                  <Home />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )
    }
    else {
      router = (
        <>
          <Router>
            <div>
              <div id="nav">
                <Link className="hover" to="/feel-good">
                  <img id="navImage" src={Logo} alt={'Logo'} />
                </Link>
                <div id="navLinkContainer">
                  <LoginButton />
                  <LogoutButton />
                </div>
              </div>
              <Switch>
                <Route path="/feel-good">
                  <Home />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )

    }
  }
    return (
      router
    );
  }
  
  
  
  
 