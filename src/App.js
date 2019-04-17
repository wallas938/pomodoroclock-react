import React, { Component } from 'react';
import { incrementer, decrementer, unitSecondeDecrementer, 
  unitMinuteDecrementer, dizaineSecondeDecrementer,
  dizaineMinuteDecrementer } from './funtions/functionsGroupOne.js'
import './App.css';
import Chronometre from './components/Chronometre/Chronometre.js'
import ChronoSession from './components/ChronoSession/ChronoSession.js'
import ChronoBreak from './components/ChronoBreak/ChronoBreak.js'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sessionLength: "10",
      breakLength: "1",
      isSessionLaunched: false,
      chrono: {
        dizaineMinute: "0",
        unitMinute: "0",
        dizaineSecond: "0",
        unitSecond: "0" ,
      }
    }

    this.timer = this.timer.bind(this)
    this.timeHandler = this.timeHandler.bind(this)
    this.lengthSessionHandler = this.lengthSessionHandler.bind(this)
    this.lengthBreakHandler = this.lengthBreakHandler.bind(this)
    this.sessionInitialisation = this.sessionInitialisation.bind(this)
    this.breakInitialisation = this.breakInitialisation.bind(this)
    this.compteur = this.compteur.bind(this)
    this.startAndPauseSession = this.startAndPauseSession.bind(this)
  }

  componentDidMount() {

    this.sessionInitialisation()

  }

  lengthSessionHandler(sessionLengthIncremented) {
    this.setState({
      sessionLength: `${sessionLengthIncremented}`
    }, () => {
      this.sessionInitialisation()
    })

  }

  lengthBreakHandler(breakLengthIncremented) {

    this.setState({
      breakLength: breakLengthIncremented
    }, () => {
      this.sessionInitialisation()
    })

  }

  sessionInitialisation() {

    let sessionLength = `${this.state.sessionLength}`

    this.setState({
      chrono: {
        dizaineMinute: `${sessionLength}`.length > 1 ? `${sessionLength[0]}` : "0",
        unitMinute:  `${sessionLength}`.length === 1 ? `${sessionLength[0]}` : `${sessionLength[1]}`,
        dizaineSecond: 0,
        unitSecond: 0
      }
    }, () => {
      //console.log('dizaine: ', sessionLength[0])
      //console.log('unite: ', sessionLength[1])
    })

    //resetTimer() A GERER !!!
    
  }

  breakInitialisation() {

    let breakLength = this.state.breakLength

    this.setState({
      chrono: {
        dizaineMinute: breakLength.length > 1 ? breakLength[0] : "0",
        unitMinute:  breakLength.length === 1 ? breakLength[0] : breakLength[1],
        dizaineSecond: 0,
        unitSecond: 0
      }
    }, () => {
      //console.log('dizaine: ', sessionLength[0])
      //console.log('unite: ', sessionLength[1])
    })

    //resetTimer() A GERER !!!
    
  }

  compteur() {

    let currentdizaineMinute = this.state.chrono.dizaineMinute, currentunitMinute = this.state.chrono.unitMinute, currentdizaineSecond = this.state.chrono.dizaineSecond, currentUnitSecond = this.state.chrono.unitSecond

    let dizaineMinuteDecremented = currentunitMinute <= "0" && currentdizaineSecond <= "0" && currentUnitSecond <= "0" ? dizaineMinuteDecrementer(currentdizaineMinute) : currentdizaineMinute
    
    let unitMinuteDecremented = currentdizaineSecond <= "0" && currentUnitSecond <= "0" ? unitMinuteDecrementer(currentunitMinute) : currentunitMinute
    
    let dizaineSecondeDecremented = currentUnitSecond <= "0" ? dizaineSecondeDecrementer(currentdizaineSecond) : currentdizaineSecond
    
    let unitSecondeDecremented = unitSecondeDecrementer(currentUnitSecond)
    
    this.setState((prevState, prevProps)=>({
      chrono: {
        dizaineMinute: dizaineMinuteDecremented,
        unitMinute: unitMinuteDecremented,
        dizaineSecond: dizaineSecondeDecremented,
        unitSecond: unitSecondeDecremented
      }
    }))
  }

  timer() {

    let timer = setInterval(this.compteur, 1000)

  }

  //A REVOIR !!!

  startAndPauseSession() {

    this.setState((prevState, prevProps) => ({
      isSessionLaunched: !prevState.isSessionLaunched
    }))
    
  }

  //A REVOIR !!!
  
  timeHandler() {


  this.state.isSessionLaunched ? clearInterval(this.timer) : this.timer()

  }

  render() {

    return (
      <div id="pomodoro-clock-app">
      <h1 id="app-name">Pomodoro Clock</h1>
        <div className="grid-container">
          <ChronoSession sessionLength={this.state.sessionLength} lengthSessionHandler={this.lengthSessionHandler} />
          <ChronoBreak breakLength={this.state.breakLength} lengthBreakHandler={this.lengthBreakHandler}/>
        </div>
        <Chronometre chrono={this.state.chrono} timeHandler={this.timeHandler}/>
      </div>
    );
  }

}

export default App;
