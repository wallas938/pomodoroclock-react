
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

function uniteMinuteDecrementer(toBeDecremented) {

	let intNumber = Number(toBeDecremented.innerHTML)

	let intNumberDecremented = intNumber == 0 ? 9 : intNumber - 1

	let unit = intNumberDecremented

	toBeDecremented.innerHTML = unit

}

function dizaineSecondeDecrementer(toBeDecremented) {

	let intNumber = Number(toBeDecremented.innerHTML)

	let intNumberDecremented = intNumber == 0 ? 5 : intNumber - 1

	let unit = intNumberDecremented

	toBeDecremented.innerHTML = unit

}

function dizaineMinuteDecrementer(toBeDecremented) {

	let intNumber = Number(toBeDecremented.innerHTML)

	let intNumberDecremented = intNumber == 0 ? 5 : intNumber - 1

	let unit = intNumberDecremented

	toBeDecremented.innerHTML = unit
}

export { 
		incrementer, decrementer, unitSecondeDecrementer, 
		uniteMinuteDecrementer, dizaineSecondeDecrementer,
		dizaineMinuteDecrementer
	}