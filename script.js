// 1. Car Constructor
// Create a constructor function called Car.
// The Car constructor should accept two arguments:
// make (string): The car's make (e.g., "Toyota").
// model (string): The car's model (e.g., "Corolla").
// Add a method to the Car prototype:
// getMakeModel(): Returns a string combining make and model in the format "make model".
// 2. SportsCar Constructor
// Create a constructor function called SportsCar that inherits from Car.

// The SportsCar constructor should accept three arguments:

// make (string): The car's make.
// model (string): The car's model.
// topSpeed (number): The top speed of the sports car in miles per hour.
// Add a method to the SportsCar prototype:

// getTopSpeed(): Returns the top speed of the sports car.


// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = function () {
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model){
		this.topSpeed = topSpeed;
	}
}

// Inherit methods from Car
SportsCar.prototype = Object.create(Car.prototype);

// Fix constructor reference
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function (){
	return `${this.topSpeed}`;
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
