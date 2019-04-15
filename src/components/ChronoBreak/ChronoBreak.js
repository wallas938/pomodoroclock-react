import React from 'react';
import './chronoBreak.css'

function ChronoBreak({ breakLength, lengthBreakHandler }) {

    function incrementHandler() {

		breakLength = Number(breakLength)

		breakLength = breakLength >= 99 ? 99 : breakLength + 1
		
		lengthBreakHandler(breakLength)
	}

	function decrementHandler() {

		breakLength = Number(breakLength)

		breakLength = breakLength <= 1 ? 1 : breakLength - 1
		
		lengthBreakHandler(breakLength)
	}

    return(

        <div id="break-block-buttons" className="grid-item">
            <h1>Durée de la Pause</h1>
            <p className="digit" id="breakLength">{breakLength}</p>
            <div className="arrows">	
                <button id="breakIncrementer" className="btn btn-secondary" onClick={incrementHandler}>
                    <i className="fas fa-arrow-up"></i>
                </button>
                <button id="breakDecrementer" className="btn btn-secondary" onClick={decrementHandler}>
                    <i className="fas fa-arrow-down"></i>
                </button>
            </div>
        </div>

    )
}





export default ChronoBreak;