import React  from 'react'
import './chronoSession.css'
function ChronoSession(props) {

    return(
        <div id="session-block-buttons" class="grid-item">
			<h1>Durée de la session</h1>
			<p id="sessionLength">1</p>
			<button id="sessionIncrementer">
				<i class="fas fa-arrow-up"></i>
			</button>
			<button id="sessionDecrementer">
				<i class="fas fa-arrow-down"></i>
			</button>
		</div>
    )
}





export default ChronoSession;