import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Home from './home.js'
import About from './about.js'
import Projects from './projects.js'
import Research from './research.js'

import './index.css';
import resume from './resume2020.pdf'
import BackgroundImage from './bg-small.png'

const getStyles = makeStyles((theme) => ({
  fullContainer: {
    height: '100vh',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    paddingTop: '20px',
    [theme.breakpoints.up('xs')]: {
      backgroundPosition: 'top -80px right -500px',
      paddingLeft: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: 'top 0 right -350px',
      paddingLeft: '5%',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'top 0 right -350px',
      paddingLeft: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'top 0 right -350px',
      paddingLeft: '10%',
    },
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#07080d',
  },
  gridContainer: {
    height: '100%',
  },
  mainTextContainer: {
    overflowY: 'scroll',
    padding: '0 20px 20px 0',
    marginBottom: '30px',
    height: '70%',
    '&::-webkit-scrollbar-thumb': {
      background: '#b9b9b9',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar': {
      width: '5px'
    }
  }
}));

function App() {
  const css = getStyles();
  return (
    <div className={css.fullContainer}>
      <Grid container xs={12} className={css.gridContainer}>
        <Grid item xs={12}>
          <header>
            <h1>Ally Zhang</h1>
            <nav>
              <Link to="/"><button>Home</button></Link>
              <Link to="/about"><button>About</button></Link>
              <Link to="/projects"><button>Projects</button></Link>
              <Link to="/research"><button>Research</button></Link>
              <button value="resume">
                <a href={resume} target="_blank" rel='noopener noreferrer'>Résumé</a>
              </button>
            </nav>
          </header>
        </Grid>

        <Grid item xs={12} sm={8} lg={6} className={css.mainTextContainer}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  )
}


// ========================================

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
