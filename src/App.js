import React, { Component } from 'react';
import './App.css';
import Chronometre from './components/Chronometre/Chronometre.js'
import ChronoSession from './components/ChronoSession/ChronoSession.js'
import ChronoBreak from './components/ChronoBreak/ChronoBreak.js'

class App extends Component {
  render() {
    return (
      <div id="pomodoro-clock-app">
      <h1 id="app-name">Pomodoro Clock</h1>
        <div className="grid-container">
          <ChronoSession />
          <ChronoBreak />
        </div>
        <Chronometre />
      </div>
    );
  }
}

export default App;
