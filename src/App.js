import React, { Component } from 'react';
import './App.css';
import ApodContainer from './containers/ApodContainer';
import logo from './logo.png'
// import EarthContainer from './containers/EarthContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
        <img src={logo} className="logo" alt="logo" />
          ALIGN
        </div>
        <div className="headline">
        get your daily space fix
        </div>
        <header className="App-header">
          <div>
          <ApodContainer />
          </div>
          <div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
