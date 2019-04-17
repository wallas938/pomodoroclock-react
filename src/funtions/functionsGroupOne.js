
function incrementer(toBeIncremented) { //POUR AUGMENTER DURREE DE SESSION

    let intNumber = Number(toBeIncremented.innerHTML)

    let intNumberincremented = intNumber >= 99 ? 99 : intNumber + 1

    let unit = intNumberincremented

    toBeIncremented.innerHTML = unit
}

function decrementer(toBeDecremented) {

    let intNumber = Number(toBeDecremented.innerHTML)

    let intNumberDecremented = intNumber <= 1 ? 1 : intNumber - 1

    let unit = intNumberDecremented

    toBeDecremented.innerHTML = unit
}

function unitSecondeDecrementer(toBeDecremented) {

	toBeDecremented = Number(toBeDecremented)

	toBeDecremented = toBeDecremented === 0 ? 9 : toBeDecremented - 1

	return toBeDecremented
}

function unitMinuteDecrementer(toBeDecremented) {

	toBeDecremented = Number(toBeDecremented)

	toBeDecremented = toBeDecremented === 0 ? 9 : toBeDecremented - 1

	return toBeDecremented

}

function dizaineSecondeDecrementer(toBeDecremented) {

	toBeDecremented = Number(toBeDecremented)

	toBeDecremented = toBeDecremented === 0 ? 5 : toBeDecremented - 1

	return toBeDecremented

}

function dizaineMinuteDecrementer(toBeDecremented) {

	toBeDecremented = Number(toBeDecremented)

	toBeDecremented = toBeDecremented === 0 ? 5 : toBeDecremented - 1

	return toBeDecremented
}

export { 
		incrementer, decrementer, unitSecondeDecrementer, 
		unitMinuteDecrementer, dizaineSecondeDecrementer,
		dizaineMinuteDecrementer
	}