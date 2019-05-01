import React, { Component } from 'react';
import { unitSecondeDecrementer, unitMinuteDecrementer, dizaineSecondeDecrementer, dizaineMinuteDecrementer } from './funtions/functionsGroupOne.js'
import './App.css';
import Chronometre from './components/Chronometre/Chronometre.js'
import ChronoSession from './components/ChronoSession/ChronoSession.js'
import ChronoBreak from './components/ChronoBreak/ChronoBreak.js'
import ReactAudioPlayer from 'react-audio-player';
import Alarm from '../src/sons/alarm.mp3'

var play = false

class App extends Component {

  constructor(props) {
    
    let intervalID

    super(props)
    this.state = {
      isStarted: false,
      isSessionTimeElapsed: false,
      isBreakTimeElapsed: false,
      isBreakLaunched: false,
      isSessionLaunched: false,
      sessionLength: "10",
      breakLength: "1",
      isPaused: true,
      play: false,
      chrono: {
        dizaineMinute: "0",
        unitMinute: "0",
        dizaineSecond: "0",
        unitSecond: "0" ,
      },
      colors: {
      sessionColor: "#d0d3d4",
      breakColor: "#FF6347",
     }
    }

    this.starter = this.starter.bind(this)
    this.reset = this.reset.bind(this)
    this.timeHandler = this.timeHandler.bind(this)
    this.timerInit = this.timerInit.bind(this)
    this.lengthSessionHandler = this.lengthSessionHandler.bind(this)
    this.lengthBreakHandler = this.lengthBreakHandler.bind(this)
    this.sessionInitialisation = this.sessionInitialisation.bind(this)
    this.breakInitialisation = this.breakInitialisation.bind(this)
    this.compteur = this.compteur.bind(this)
    this.pauseHandler = this.pauseHandler.bind(this)
    this.sessionStateHandler = this.sessionStateHandler.bind(this)
    this.breakStateHandler = this.breakStateHandler.bind(this)
  }

  /**AU MONTAGE DE L'APPLI, LE CHRONO EST INITIALISE AVEC LA DURREE 
   * QUI FIGURE DANS L'ETAT "sessionLength"
   */
  componentDidMount() {

    this.sessionInitialisation()

  }

  starter() {

    this.setState((prevState, prevProps) => ({
      isStarted: true,
      isSessionLaunched: true
    }))

  }

  /** AU CLICK, ELLE SERT A DEMARRER OU METTRE SUR PAUSE LE CHRONO  
   * 
  */
  timeHandler() {

    let isStarted = this.state.isStarted

    let isSessionTimeElapsed = this.state.isSessionTimeElapsed

    let isBreakTimeElapsed = this.state.isBreakTimeElapsed

    let isBreakLaunched = this.state.isBreakLaunched

    let isSessionLaunched = this.state.isSessionLaunched

    let isPaused = this.state.isPaused

    if(!isStarted) {

      this.starter()

      this.intervalID = setInterval(this.compteur, 1000)

      this.pauseHandler()

    }else if((!isSessionTimeElapsed && isSessionLaunched) || (!isBreakTimeElapsed && isBreakLaunched)) {
      
      if(!isPaused) {
    
        clearInterval(this.intervalID)
        
        this.pauseHandler()
    
      }else {

        this.intervalID = setInterval(this.compteur, 1000)
        
        this.pauseHandler()

      }

    }

  }

  /** VERIFIE SI LE CHRONO ARRIVE A ZERO, SI C'EST LE CAS, ELLE LE SIGNAL A L'APPLI
   * A TRAVERS L'ETAT "A REMPLIR"
  */
  timeElapseHandler() {

    let currentdizaineMinute = this.state.chrono.dizaineMinute, currentunitMinute = this.state.chrono.unitMinute, currentdizaineSecond = this.state.chrono.dizaineSecond, currentUnitSecond = this.state.chrono.unitSecond 

    let isSessionTimeElapsed = this.state.isSessionTimeElapsed

    let isBreakTimeElapsed = this.state.isBreakTimeElapsed

    let isBreakLaunched = this.state.isBreakLaunched

    let isSessionLaunched = this.state.isSessionLaunched

    //console.log(currentdizaineMinute, currentunitMinute, currentdizaineSecond, currentUnitSecond)

    if(`${currentdizaineMinute}` === "0" && `${currentunitMinute}` === "0" &&  `${currentdizaineSecond}` === "0" && `${currentUnitSecond}` === "0" && !isSessionTimeElapsed || `${currentdizaineMinute}` === "0" && `${currentunitMinute}` === "0" &&  `${currentdizaineSecond}` === "0" && `${currentUnitSecond}` === "0" && !isBreakTimeElapsed ) {

      if(isSessionLaunched && !isSessionTimeElapsed) {

        this.setState(() =>({

          isSessionTimeElapsed: true,
          isPaused: true,
          isSessionLaunched: false
        }))

      }else if(isBreakLaunched && !isBreakTimeElapsed) {

        this.setState(() =>({

          isBreakTimeElapsed: true,
          isPaused: true,
          isBreakLaunched: false
        }))

      }

    }
    
  }

  /*SERT A ECOULER LE TEMPS TANT QUE CE DERNIER N'ATTEINT PAS ZERO ET
  POUR SAVOIR CELA, ELLE LANCE "timeElapseHandler()" A CHAQUE FOIS QU'ELLE EST APPELEE.

  SI ZERO EST ATTEINT, "timerInit()" EST APPELEE
  */ 
  compteur() {

    let isStarted = this.state.isStarted

    let isBreakLaunched = this.state.isBreakLaunched

    let isSessionLaunched = this.state.isSessionLaunched

    let isBreakTimeElapsed = this.state.isBreakTimeElapsed

    let isSessionTimeElapsed = this.state.isSessionTimeElapsed

    if((isStarted && isSessionLaunched && !isSessionTimeElapsed) || (isStarted && isBreakLaunched && !isBreakTimeElapsed)) {

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

      }), 
      () => {

      this.timeElapseHandler()

      })

    }else {

      clearInterval(this.intervalID)
      
      this.timerInit()

    }

  }

  /**SI ELLE EST APPELEE, CELA SIGNIFIE QUE LE TEMPS EST ECOULE DONC,
   *APRES UNE COURTE DURREE DE CINQ SECONDE, ELLE SE CHARGERA D'INITIALISER 
   LE CHRONO AVEC CE QUI FIGURE DANS LES ETATS "breakLength" OU "sessionLength" EN FONCTION
   DU TEMPS ECOULE PRECEDEMMENT 
   */
  timerInit() {
    
    let isSessionTimeElapsed = this.state.isSessionTimeElapsed

    let isBreakTimeElapsed = this.state.isBreakTimeElapsed

    let isBreakLaunched = this.state.isBreakLaunched

    let isSessionLaunched = this.state.isSessionLaunched
    
    if( isSessionTimeElapsed ) {

      setTimeout(this.breakInitialisation, 5000) 

    }else if( isBreakTimeElapsed ){
      
      setTimeout(this.sessionInitialisation, 5000)

    }
  }

  sessionStateHandler() {

    this.setState((prevState, prevProps) => ({

      isSessionLaunched: prevState.isSessionLaunched ? false : true

    }))

  }

  breakStateHandler() {

    this.setState((prevState, prevProps) => ({

      isBreakLaunched: prevState.isBreakLaunched ? false : true

    }))

  }

  breakInitialisation() {

    let breakLength = this.state.breakLength
    
    this.setState({
      isBreakTimeElapsed: false,
      isSessionTimeElapsed: false,
      isBreakLaunched: true,
      chrono: {
        dizaineMinute: `${breakLength}`.length > 1 ? `${breakLength[0]}` : "0",
        unitMinute:  `${breakLength}`.length === 1 ? `${breakLength[0]}` : `${breakLength[1]}`,
        dizaineSecond: "0",
        unitSecond: "0",
      }
    }, () => {
      
      this.timeHandler()
      
    })
    
  }

  sessionInitialisation() {

    let sessionLength = `${this.state.sessionLength}`

    this.setState({
      isBreakTimeElapsed: false,
      isSessionTimeElapsed: false,
      isSessionLaunched: true,
      chrono: {
        dizaineMinute: `${sessionLength}`.length > 1 ? `${sessionLength[0]}` : "0",
        unitMinute:  `${sessionLength}`.length === 1 ? `${sessionLength[0]}` : `${sessionLength[1]}`,
        dizaineSecond: "0",
        unitSecond: "0"
      }
    }, () => {
      
      let isStarted = this.state.isStarted
      
      if(isStarted) {

        this.timeHandler()
      }

    })
  }

  lengthSessionHandler(sessionLengthIncremented) {

    let isSessionLaunched = this.state.isSessionLaunched

    let isBreakLaunched = this.state.isBreakLaunched

    let isPaused = this.state.isPaused

    let isStarted = this.state.isStarted
  
    this.setState({
      sessionLength: `${sessionLengthIncremented}`
    }, () => {

      if(!isStarted) {

        this.sessionInitialisation()

      }else if((isPaused && isBreakLaunched) || (isSessionLaunched && isPaused)) {
        
          this.sessionInitialisation()
      }
      
      
    })

  }

  lengthBreakHandler(breakLengthIncremented) {

    this.setState({
      breakLength: `${breakLengthIncremented}`
    })

  }

  pauseHandler() {

    this.setState((prevState, prevProps) => ({

      isPaused: prevState.isPaused ? false : true

    }))

  }

  reset() {

    this.setState({
      isBreakLaunched: false,
      isBreakTimeElapsed: false,
      isPaused: true,
      isSessionLaunched: false,
      isSessionTimeElapsed: false,
      isStarted: false
    }, () => {
      this.sessionInitialisation()
    })
  }

  render() {

    let isBreakLaunched = this.state.isBreakLaunched

    let isPaused = this.state.isPaused

    let currentColor = isBreakLaunched && !isPaused ? this.state.colors.breakColor : this.state.colors.sessionColor;
    
    let isBreakTimeElapsed = this.state.isBreakTimeElapsed

    let isSessionTimeElapsed = this.state.isSessionTimeElapsed

    let isStarted = this.state.isPaused

    let chronometre;

    if( isSessionTimeElapsed && isPaused ) {

      chronometre = <Chronometre blinkingClass="disapear" currentColor={currentColor} chrono={this.state.chrono} timeHandler={this.timeHandler} reset={this.reset}/>
      
      play = true

      var audio = <audio id="alarm" autoPlay={ play }>
        <source src={ Alarm }>
        </source>
      </audio>

    }else {

      chronometre = <Chronometre blinkingClass="" currentColor={currentColor} chrono={this.state.chrono} timeHandler={this.timeHandler} reset={this.reset}/>
    
      play = false
    }
    
    return (
      <div id="pomodoro-clock-app">
      <h1 id="app-name">Pomodoro Clock</h1>
        <div className="grid-container">
          <ChronoSession sessionColor={this.state.colors.sessionColor} sessionLength={this.state.sessionLength} lengthSessionHandler={this.lengthSessionHandler} />
          <ChronoBreak breakColor={this.state.colors.breakColor} breakLength={this.state.breakLength} lengthBreakHandler={this.lengthBreakHandler}/>
        </div>

          { chronometre }

          { audio ? audio : null }
        
        </div>
    );
  }

}

export default App;
