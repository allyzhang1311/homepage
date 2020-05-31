import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class LandingPg extends React.Component {

  render() {
    return (
      <span>
        Hi my name is Ally.
      </span>
    );
  }
}

class AboutPg extends React.Component {

  render() {
    return (
      <span>
        <h2>About Me</h2>
      More text here
      </span>
    );
  }
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
    }
    const PageName = components[this.state.page];
    return (
      <div className="text-container">
        <div className="text">
          <h1>Ally Zhang</h1>
          <nav>
            <button onClick={this.movePage} value="Home">Home</button>
            <button onClick={this.movePage} value="About">About</button>
            <button onClick={this.movePage} value="Projects">Projects</button>
            <button onClick={this.movePage} value="Resume">Resumé</button>
          </nav>

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
