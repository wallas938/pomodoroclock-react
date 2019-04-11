import React from 'react'
import './chronometre.css'

function Chronometre(props) {

    return(

        <div id="chronoTime">
			<div id="timer">
				<span id="dizaine-minute"></span><span id="unite-minute"></span>:<span
					id="dizaine-seconde">0</span><span id="unite-seconde">0</span>
			</div>
			<div id="chronoTime-buttons">
				<button type="button" id="reset">
					<i class="fas fa-redo-alt"></i>
				</button>
				<button type="button" id="pause-play">
					<i class="fa fa-play" aria-hidden="true"></i>
					<i class="fa fa-pause" aria-hidden="true"></i>
				</button>
			</div>
		</div>
        
    )
}





export default Chronometre;