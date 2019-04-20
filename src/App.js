import React, { Component } from 'react';
import './App.css';
import ApodContainer from './containers/ApodContainer';
import EarthContainer from './containers/EarthContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          ALIGN
        </div>
        <header className="App-header">
          <div>
          <ApodContainer />
          </div>
          <div>
          <EarthContainer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
