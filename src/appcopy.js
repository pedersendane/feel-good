import logo from './logo.svg';
import './App.css';
import FetchDayDetails from './hooks/fetchApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FetchDayDetails />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;






/*
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dane">Dane</Link>
            </li>
            <li>
              <Link to="/breezie">Breezie</Link>
            </li>
          </ul>
        </nav>

         A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            <Switch>
            <Route path="/dane">
              <Dane />
            </Route>
            <Route path="/breezie">
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
  
  function Home() {
    return <h2>Home</h2>;
  }
  
  function Dane() {
    return <h2>About</h2>;
  }
  
  function Breezie() {
    return <h2>Users</h2>;
  }
*/  