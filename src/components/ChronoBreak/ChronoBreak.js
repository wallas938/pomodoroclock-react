import React from 'react';
import './chronoBreak.css'

function ChronoBreak(props) {

    return(

        <div id="break-block-buttons" className="grid-item">
            <h1>Durée de la Pause</h1>
            <p className="digit" id="breakLength">1</p>
            <div className="arrows">	
                <button id="breakIncrementer" className="btn btn-secondary">
                    <i className="fas fa-arrow-up"></i>
                </button>
                <button id="breakDecrementer" className="btn btn-secondary">
                    <i className="fas fa-arrow-down"></i>
                </button>
            </div>
        </div>

    )
}





export default ChronoBreak;