import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home.js'
import About from './about.js'
import Projects from './projects.js'
import './index.css';
import resume from './resume2020.pdf'

function App() {
  return (
    <>
      <div className="text-container">
        <div className="header">
          <h1>Ally Zhang</h1>
          <nav>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/projects">Projects</Link></button>
            <button value="resume">
              <a href={resume} target="_blank" rel='noopener noreferrer'>Résumé</a>
            </button>
          </nav>
        </div>

        <div className="text">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </div>
    </>
  )
}


// ========================================

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
