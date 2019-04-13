import React  from 'react'
import './chronoSession.css'
function ChronoSession(props) {

    return(
        <div id="session-block-buttons" className="grid-item">
			<h1>Durée de la session</h1>
			<p className="digit" id="sessionLength">1</p>
			<div className="arrows">	
				<button id="sessionIncrementer" className="btn btn-secondary">
					<i className="fas fa-arrow-up"></i>
				</button>
				<button id="sessionDecrementer" className="btn btn-secondary">
					<i className="fas fa-arrow-down"></i>
				</button>
			</div>
		</div>
    )
}





export default ChronoSession;