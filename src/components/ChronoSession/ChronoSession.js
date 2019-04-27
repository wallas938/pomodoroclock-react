import React  from 'react'
import './chronoSession.css'
function ChronoSession({ sessionLength, lengthSessionHandler, sessionColor }) {

	let sessionStyle = { color: sessionColor }

	function incrementHandler() {

		sessionLength = Number(sessionLength)

		sessionLength = sessionLength >= 99 ? 99 : sessionLength + 1
		
		lengthSessionHandler(sessionLength)
	}

	function decrementHandler() {

		sessionLength = Number(sessionLength)

		sessionLength = sessionLength <= 1 ? 1 : sessionLength - 1
		
		lengthSessionHandler(sessionLength)
	}

    return(
        <div id="session-block-buttons" className="grid-item">
			<h1>Durée de la session</h1>
			<p style={sessionStyle} className="digit" id="sessionLength">{sessionLength}</p>
			<div className="arrows">	
				<button id="sessionIncrementer" className="btn btn-secondary" onClick={incrementHandler}>
					<i className="fas fa-arrow-up"></i>
				</button>
				<button id="sessionDecrementer" className="btn btn-secondary" onClick={decrementHandler}>
					<i className="fas fa-arrow-down"></i>
				</button>
			</div>
		</div>
    )
}





export default ChronoSession;