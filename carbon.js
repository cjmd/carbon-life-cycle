console.log("Suhh");
var NUMBER_OF_ROLLS;

function setRolls() {
	NUMBER_OF_ROLLS = 0;
	atmosphere = 0; 
	plants = 0;
	animals = 0;
	soil = 0;
	surfaceOcean = 0;
	deepOcean = 0;
	fossilFuels = 0;
	i = 0;
	document.getElementById("count").innerHTML = "";
	document.getElementById("stage").innerHTML = "";
	console.log(document.getElementById("rollInput").value);
	if (document.getElementById("rollInput").value !== "") {
		NUMBER_OF_ROLLS = document.getElementById("rollInput").value;
		lifeCycle();
	}
}

function reset() {
	NUMBER_OF_ROLLS = 0;
	document.getElementById("count").innerHTML = "";
	document.getElementById("stage").innerHTML = "";
	rollInput.value = "";
}

var i = 0;

function rollDice() {
	return 1 + Math.floor(Math.random() * 6);
}

var atmosphere = 0; 
var plants = 0;
var animals = 0;
var soil = 0;
var surfaceOcean = 0;
var deepOcean = 0;
var fossilFuels = 0;

function generateCountString() { 
	return `Atmosphere: ${atmosphere}\n<br>Plants: ${plants}\n<br>Animals: ${animals}\n<br>Soil: ${soil}\n<br>Surface Ocean: ${surfaceOcean}\n<br>Deep Ocean: ${deepOcean}\n<br>Fossil Fuels: ${fossilFuels}`;
}

function pickStage() {
	return 1 + Math.floor(Math.random() * 7);
}

function runAtmosphere() {
	if (i < NUMBER_OF_ROLLS)  {
		var roll = rollDice();
		if (roll === 1 || roll === 3 || roll === 4) {
			i++;
			atmosphere++;
			 runAtmosphere();
		}
		if (roll === 2 || roll === 6) {
			i++;
			plants++;
			 runPlants();
		}
		if (roll === 5) {
			i++;
			surfaceOcean++;
			 runSurfaceOcean();
		}
	}
}

function runPlants() {
	if (i < NUMBER_OF_ROLLS) {
		var roll = rollDice();
		if (roll === 1) {
			i++;
			soil++;
			 runSoil();
		}
		if (roll === 2 || roll === 4 || roll === 5 || roll === 6) {
			i++;
			plants++;
			 runPlants();
		}
		if (roll === 3) {
			i++;
			animals++;
			 runAnimals();
		}
	}
}

function runAnimals() {
	if (i < NUMBER_OF_ROLLS) {
		var roll = rollDice();
		if (roll === 1 || roll === 4) {
			i++;
			animals++;
			 runAnimals();
		}
		if (roll === 2) {
			i++;
			soil++;
			runSoil();
		}
		if (roll === 3 || roll === 5 || roll === 6) {
			i++;
			atmosphere++;
			 runAtmosphere();
		}
	}
}

function runSoil() {
	if (i < NUMBER_OF_ROLLS) {
		var roll = rollDice();
		if (roll === 1 || roll === 5) {
			i++;
			soil++;
			 runSoil();
		}
		if (roll === 2) {
			i++;
			plants++;
			 runPlants();
		}
		if (roll === 3 || roll === 6) {
			i++;
			fossilFuels++;
			 runFossilFuels();
		}
		if (roll === 4) {
			i++;
			atmosphere++;
			 runAtmosphere();
		}
	}
}

function runSurfaceOcean() {
	if (i < NUMBER_OF_ROLLS) {
		var roll = rollDice();
		if (roll === 1 || roll === 3) {
			i++;
			deepOcean++;
			 runDeepOcean();
		}
		if (roll === 2 || roll === 4) {
			i++;
			surfaceOcean++;
			 runSurfaceOcean();
		}
		if (roll === 5 || roll === 6) {
			i++;
			atmosphere++;
			 runAtmosphere();
		}
	}
}

function runDeepOcean() {
	if (i < NUMBER_OF_ROLLS) {
		var roll = rollDice();
		if (roll === 1 || roll === 2) {
			i++;
			deepOcean++;
			 runDeepOcean();
		}
		if (roll === 3 || roll === 4 || roll === 5) {
			i++;
			surfaceOcean++;
			 runSurfaceOcean();
		}
		if (roll === 6) {
			i++;
			animals++;
			 runAnimals();
		}
	}
}

function runFossilFuels() {
	if (i < NUMBER_OF_ROLLS) {
		var roll = rollDice();
		if (roll === 1 || roll === 2 || roll === 3 || roll === 4) {
			i++;
			fossilFuels++;
			 runFossilFuels();
		}
		if (roll === 5 || roll === 6) {
			i++;
			atmosphere++;
			 runAtmosphere();
		}
	}
}


function lifeCycle() {
	var stage = pickStage();
	console.log(stage);
	if (stage === 1) {
		var stageName = "Atmosphere";
		runAtmosphere();
	}
	if (stage === 2) {
		var stageName = "Plants";
		runPlants();
	}
	if (stage === 3) {
		var stageName = "Animals";
		runAnimals();
	}
	if (stage === 4) {
		var stageName = "Soil";
		runSoil();
	}
	if (stage === 5) {
		var stageName = "Surface Ocean";
		runSurfaceOcean();
	}
	if (stage === 6) {
		var stageName = "Deep Ocean";
		runDeepOcean();
	}
	if (stage === 7) {
		var stageName = "Fossil Fuels";
		runFossilFuels();
	}
	document.getElementById("stage").innerHTML = `First Stage: ${stageName}`;
	var countResult = generateCountString();
	console.log(countResult);
	document.getElementById("count").innerHTML = countResult;
}