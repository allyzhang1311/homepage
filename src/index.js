import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

class LandingPg extends React.Component {

  render() {
    return (
      <span>
        <h2>Welcome</h2>
        <p>
          Cornell University 2017-2020. Budding computer scientist,
          developer and linguist; longtime reader, learner and nerd. You can
          find me at the links below, or just click around! And yes, that's my
          real legal name.
        </p>
        <Social />
      </span>
    );
  }
}

class AboutPg extends React.Component {

  render() {
    return (
      <span>
        <h2>About Me</h2>
        <p>
          I am currently a senior at Cornell University pursuing
          a B.A. in Computer Science and Linguistics. My main areas of
          interest are system architecture, natural language processing
          and web development.
        </p>
        <p>
          I have interned at Fidelity Investments and MasterCard, where
          I spent summers developing websites and tools for internal testers.
          Additionally, I've conducted NLP research in both the Linguistics and
          Computer Science departments, focusing on machine learning and automated
          phonetic transcription. During the school year, I work as a senior TA
          for Computer System Organization and Programming (CS 3410), Cornell's
          core systems and C course.
        </p>
        <p>
          In my spare time, I sing in the Cornell Chorale, hike around
          Ithaca's beautiful gorges, and draw embarrassing doodles. I'm also a big
          fan of fantasy novels and am now on my tenth read-through of
          <em>The Lord of the Rings</em>! Probably more than tenth, actually...
        </p>
      </span>
    );
  }
}

class ProjectPg extends React.Component {

  render() {
    return (
      <span>
        <h2>Recent Projects</h2>
        <ul>
          <li>
            <b>2020:</b> Conducted data analysis of <a href="http://lil.nlp.cornell.edu/cerealbar/">CerealBar</a> player
            chat logs under <a href="http://yoavartzi.com/">Yoav Artzi</a>,
            using spaCy and other Python NLP libraries.
          </li>
          <li>
            <b>2020:</b> Studied the distribution of terms for 'bubble tea'
            in the U.S. using a survey of over 200 English speakers and
            analyzed data for sociolinguistic trends. With Lucia Gomez.
          </li>
          <li>
            <b>2019:</b> Created a simulated database management system
            in Java that supports advanced SQL queries and search optimization for
            large databases. With Mike Fang and Nick Cavagnaro.
          </li>
          <li>
            <b>2019:</b> Participated in labeling and analysis for evaluation
            of NLP models on automated captioning tasks, specifically focused
            on 'minimal pairs' of images, under <a href="https://allenai.org/team/mattg">Matt Gardner</a> and
            Yoav Artzi. Submitted to EMNLP 2020. <a href="https://arxiv.org/abs/2004.02709">arXiv link</a>
          </li>
          <li>
            <b>2019:</b> At Fidelity, developed an Angular web app allowing
            testers to build and manage customized mailing lists with ease. Fully
            deployed with Express backend.
          </li>
          <li>
            <b>2019:</b> Performed data collection, manipulation and analysis
            of neural network performance on the <a href="http://lil.nlp.cornell.edu/nlvr/">NLVR2</a> image+caption
            dataset, under Yoav Artzi and <a href="http://alanesuhr.com/">Alane Suhr</a>.
            Appeared at ACL 2019. <a href="https://arxiv.org/abs/1811.00491">arXiv link</a>
          </li>
          <li>
            <b>2018:</b> Developed a Python XML parser and Foma finite-state transducer
            to study phonetic audio transcripts, as part of a project on Brazilian
            Portuguese prosody. Under <a href="https://compling.cis.cornell.edu/mr249/index.html">Mats Rooth</a> and
            Simone Harmath-de Lemos.
          </li>
        </ul>
      </span>
    );
  }
}

function Social() {
  return (
    <div className="social">
      <a href="https://github.com/allyzhang1311" target="_blank" rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/allyzhang1311/" target="_blank" rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:ally.zhang.1311@gmail.com" target="_blank" rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faAt} size="2x" />
      </a>
      <p>
        Site by me, photo by <a href="https://www.instagram.com/lilmango24/">Lauren</a>
      </p>
    </div>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: this.props.page };
    this.movePage = this.movePage.bind(this);
  }

  movePage(e) {
    e.preventDefault();
    this.setState({ page: e.target.value })
  }

  render() {
    const components = {
      Home: LandingPg,
      About: AboutPg,
      Projects: ProjectPg
    }
    const PageName = components[this.state.page];
    return (
      <div className="text-container">
        <div className="header">
          <h1>Ally Zhang</h1>
          <nav>
            <button onClick={this.movePage} value="Home">Home</button>
            <button onClick={this.movePage} value="About">About</button>
            <button onClick={this.movePage} value="Projects">Projects</button>
            <button value="Resume">
              <a href="../assets/2019resume.pdf" target="_blank" rel='noopener noreferrer'>Resumé</a>
            </button>
          </nav>
        </div>
        <div className="text">
          <PageName />
        </div>
      </div>

    )
  }

}


// ========================================

ReactDOM.render(
  <Main page="Home" />,
  document.getElementById('root')
);
