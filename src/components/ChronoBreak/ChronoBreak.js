import React from 'react';
import './chronoBreak.css'

function ChronoBreak(props) {

    return(

        <div id="breack-block-buttons" class="grid-item">
            <h1>Durée de la Pause</h1>
            <p id="breakLength">1</p>
            <button id="breakIncrementer">
                <i class="fas fa-arrow-up"></i>
            </button>
            <button id="breakDecrementer">
                <i class="fas fa-arrow-down"></i>
            </button>
        </div>

    )
}





export default ChronoBreak;