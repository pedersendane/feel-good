import React from "react";
import Home from '../pages/Home';
import Dane from '../pages/Dane';
import Breezie from '../pages/Breezie';
import Logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    NavLink,
  Link
} from "react-router-dom";


export default function Navbar() {
  return (
    <Router>
        <div>
              <div id="nav">
                  <Link className="hover" to="/"><img id="navImage" src={Logo} alt={'Logo'}/></Link>
                <div id="navLinkContainer">
                    <NavLink className="navLink" to="/feel-good/dane">Dane</NavLink>
                    <NavLink className="navLink" to="/feel-good/breezie">Breezie</NavLink>
                </div>
            </div>
        <Switch>
        <Route path="/feel-good/dane">
            <Dane />
        </Route>
        <Route path="/feel-good/breezie">
            <Breezie />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
        </div>
      </Router>
    );
  }
  
  
  
 