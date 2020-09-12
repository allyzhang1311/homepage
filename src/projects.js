import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom"
import Research from './research.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ProjAcc = withStyles({
    root: {
        backgroundColor: 'rgba(60, 66, 97, 0.651)',
        boxShadow: 'none',
        borderBottom: '1px solid rgb(93, 99, 133)',
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(Accordion);

const ProjAccSummary = withStyles({
    root: {
        color: '#f7f7f7', // @off-white
        fontWeight: '400',
        textShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(AccordionSummary);

const ProjAccDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        color: '#f7f7f7', // @off-white
        textShadow: 'none',
        backgroundColor: '#07080d', // @background
    },
}))(AccordionDetails);

function DownChev() {
    return (
        <FontAwesomeIcon icon={faChevronDown} color="#f7f7f7" size="xs" />
    );
}

function Projects() {

    // let { path, url } = useRouteMatch();

    return (
        <>
            <h2>Recent Projects</h2>
            {/* <nav>
                <Link to={`${url}`}><button>Projects</button></Link>
                <Link to={`${url}/research`}><button>Research</button></Link>
            </nav>

            <div className="main-text">
                <Switch>
                    <Route path={`${path}/research`}>
                        <Research />
                    </Route>
                    <Route path={`${path}`}>
                        <MainProjects />
                    </Route>
                </Switch>
            </div> */}

            <div className="main-text">
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Bubble tea: what's in a name?</ProjAccSummary>
                    <ProjAccDetails>sdfsdgdsgs</ProjAccDetails>
                </ProjAcc>
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Bubble tea: what's in a name?</ProjAccSummary>
                    <ProjAccDetails>sdfsdgdsgs</ProjAccDetails>
                </ProjAcc>
            </div>
        </>
    );
}

function MainProjects() {
    return (
        <ul>
            <li>
                <b>2020:</b> Studied the distribution of terms for 'bubble tea'
            in the U.S. using a survey of over 200 English speakers and
            analyzed data for sociolinguistic trends. With <a href="https://lucia-gomez.netlify.app/">Lucia Gomez</a>.
        </li>

            <li>
                <b>2019:</b> Created a simulated database management system
            in Java that supports advanced SQL queries and search optimization for
            large databases. With Mike Fang and Nick Cavagnaro.
        </li>
            <li>
                <b>2019:</b> At Fidelity, developed an Angular web app allowing
            testers to build and manage customized mailing lists with ease. Fully
            deployed with Express backend.
        </li>
        </ul>
    )
}

export default Projects