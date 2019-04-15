import React from 'react'
import './chronometre.css'

function Chronometre({ chrono, timeHandler }) {

    return(

        <div id="chronometre-block">
			<div className="digit" id="chronometre">
				<span id="dizaine-minute">{ chrono.dizaineMinute }</span><span id="unite-minute">{ chrono.unitMinute }</span>:<span
					id="dizaine-seconde">{ chrono.dizaineSecond }</span><span id="unite-seconde">{ chrono.unitSecond }</span>
			</div>
			<div id="chronometre-buttons">
				<button type="button" id="reset" className="btn btn-info">
					<i className="fas fa-redo-alt"></i>
				</button>
				<button type="button" id="pause-play" className="btn btn-danger" onClick={timeHandler}>
					<i className="fa fa-play" aria-hidden="true"></i>
					<i className="fa fa-pause" aria-hidden="true"></i>
				</button>
			</div>
		</div>
        
    )
}





export default Chronometre;