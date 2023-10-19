"use strict";
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.0;

var totalDue = foodCost + tax + tip;
console.log(totalDue);

// var width = 15;
// var length = 35;

// var area = width * length;
// console.log(area);

var bill = 15.0;
var tip = 0.2;

var totalDue = bill * tip;
console.log(totalDue);
const radius = 15;
//const pi = Math.PI;
const areaOfCircle = (radius) => {
    return Math.PI * radius * radius;
};
console.log(areaOfCircle(radius));

const length = 15;
const width = 10;
const areaOfRec = (length, width) => {
    return length*width
};
console.log(areaOfRec(length,width))

var fahrenheit = 95;
var celcius = (fahrenheit - 32) * 5/9;
console.log(celcius);

const salary = 500000;
const taxWithHeld = (salary) => {
    return .23*salary;
}
console.log(taxWithHeld(salary));


let x1 = 100; // variable
let y1 = 400;
let x2 = 100;
let y2 = 300;

function getDistance(x1,y1,x2,y2) {  //function
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}

console.log(getDistance(x1,y1,x2,y2)); //output

