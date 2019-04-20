import React, { Component } from 'react';
import './App.css';
import ApodContainer from './containers/ApodContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ApodContainer />
        </header>
      </div>
    );
  }
}

export default App;
