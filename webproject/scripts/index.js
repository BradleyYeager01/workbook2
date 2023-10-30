"use strict"
// grab text elements 
let pickupDateTextBox = document.getElementById("pickupDateTextBox");
let numberOfDaysTextbox = document.getElementById("numberOfDaysTextbox");
// checkbox
let tollTagCheckbox = document.getElementById("tollTagCheckbox"); 
let gpsCheckbox = document.getElementById("gpsCheckbox");
let roadSideAssistanceCheckbox = document.getElementById("roadSideAssistanceCheckbox")

//radio
let under25yesRadio = document.getElementById("under25yesRadio");
let over25noRadio = document.getElementById("over25noRadio");

//button
let estimatedCostBtn = document.getElementById("estimatedCostBtn");

//function time

function estimateCost() {
    // cost per day * number of days
    let cost = 29.99 * numberOfDaysTextbox.value;
        
    console.log(cost); 
}
