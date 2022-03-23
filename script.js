// Task-1

// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console

var firstName = "Umair";
var lastName = "Azmat";
var fullName = firstName + " " + lastName;
console.log("Name:", fullName);
// <-------------------------------------------------------------------------------->

// Task-2

let name = "Umair";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Umair!" when called

function message() {
  console.log(greeting + "," + name + "!");
}
message();
// <-------------------------------------------------------------------------------->
// Task - 3;
let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
  myPoints += 3;
}
function remove1Point() {
  myPoints -= 1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints);

// <-------------------------------------------------------------------------------->

// Task - 4;

// Try to predict what each of the lines will log out
console.log("2" + 2); //
console.log(11 + 7); //
console.log(6 + "5"); //
console.log("My points: " + 5 + 9); //
console.log(2 + 2); //
console.log("11" + "14"); //
// <-------------------------------------------------------------------------------->

// Task - 5;
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function error() {
  document.getElementById("error").innerText =
    "Something went wrong, please try again";
}

// <-------------------------------------------------------------------------------->
// Task - 6;
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
function add_num() {
  let add = num1 + num2;
  document.getElementById("sum-el").textContent += add;
}

function sub_num() {
  let sub = num1 - num2;
  document.getElementById("sum-el").textContent += sub;
}

function div_num() {
  let div = num1 / num2;
  document.getElementById("sum-el").textContent += div;
}

function mul_num() {
  let mul = num1 * num2;
  document.getElementById("sum-el").textContent += mul;
}
function reset() {
  document.getElementById("sum-el").textContent = 0;
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// <-------------------------------------------------------------------------------->
// Task -7
// task solo challenge
// Unit Convertor App

let defaultNumber = prompt("Enter num to Convert");
document.getElementById("numberValue").textContent = defaultNumber;

let resultOne = defaultNumber * 3.28084;
let decimalResultOne = resultOne.toFixed(3);
let calcFeet = (document.getElementById(
  "calcFeetEl"
).textContent = `${defaultNumber} meters = ${decimalResultOne} feet`);

let resultTwo = defaultNumber * 0.3048;
let decimalResulTwo = resultTwo.toFixed(3);
let calcMeter = (document.getElementById(
  "calcMeterEl"
).textContent = `${defaultNumber} feet = ${decimalResulTwo} meters`);

let resultThree = defaultNumber * 0.2641722;
let decimalResultThree = resultThree.toFixed(3);
let calcLiter = (document.getElementById(
  "calcLitersEl"
).textContent = `${defaultNumber} liters = ${decimalResultThree} gallons`);

let resultFour = defaultNumber * 3.785411784;
let decimalResultFour = resultFour.toFixed(3);
let calcGallon = (document.getElementById(
  "calcGallonsEl"
).textContent = `${defaultNumber} gallons = ${decimalResultFour} liters`);

let resultFive = defaultNumber * 2.20462;
let decimalResultFive = resultFive.toFixed(3);
let calcKilos = (document.getElementById(
  "calcKilosEl"
).textContent = `${defaultNumber} kilos = ${decimalResultFive} pounds`);

let resultSix = defaultNumber * 0.453592;
let decimalResultSix = resultFour.toFixed(3);
let calcPounds = (document.getElementById(
  "calcPoundsEl"
).textContent = `${defaultNumber} pounds = ${decimalResultSix} kilos`);

function convert() {
  let newValue = document.getElementById("numberValue").value;
  defaultNumber = newValue;
  document.getElementById("calcNumber").textContent = defaultNumber;

  let calcFeet = (document.getElementById(
    "calcFeetEl"
  ).textContent = `${defaultNumber} meters = ${decimalResultOne} feet`);
  let calcMeter = (document.getElementById(
    "calcMeterEl"
  ).textContent = `${defaultNumber} feet = ${decimalResulTwo} meters`);
  let calcLiter = (document.getElementById(
    "calcLitersEl"
  ).textContent = `${defaultNumber} liters = ${decimalResultThree} gallons`);
  let calcGallon = (document.getElementById(
    "calcGallonsEl"
  ).textContent = `${defaultNumber} gallons = ${decimalResultFour} liters`);
  let calcKilos = (document.getElementById(
    "calcKilosEl"
  ).textContent = `${defaultNumber} kilos = ${decimalResultFive} pounds`);
  let calcPounds = (document.getElementById(
    "calcPoundsEl"
  ).textContent = `${defaultNumber} pounds = ${decimalResultSix} kilos`);
}
// <-------------------------------------------------------------------------------->
