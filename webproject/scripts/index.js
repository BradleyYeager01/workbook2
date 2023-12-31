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

// new 
let carRentalcostParagraph = document.getElementById("carRentalcostParagraph");
let optionsCostParagraph = document.getElementById("optionsCostParagraph");
let under25SurchargeParagraph = document.getElementById("under25SurchargeParagraph");
let totalDueParagraph = document.getElementById("totalDueParagraph");

//function time

function estimateCost() {
    // cost per day * number of days
    let days = Number(numberOfDaysTextbox.value);
    let costPerDay = 29.99;
    let carRentalCost = days * costPerDay;
    let optionsCost = 0;
    let totalCost = 0;
    let under25Cost = 0;


    if (tollTagCheckbox.checked) {
        optionsCost += 3.95 * days;
    }
    if (gpsCheckbox.checked) {
        optionsCost += 2.95 * days;
    }
    if (roadSideAssistanceCheckbox.checked) {
        optionsCost += 2.95 * days;
    }
    if (under25yesRadio.checked) {
        under25Cost = carRentalCost * .3;
    }
    totalCost = carRentalCost + optionsCost + under25Cost;
    carRentalcostParagraph.innerText = carRentalCost;
    optionsCostParagraph.innerText = optionsCost;
    under25SurchargeParagraph.innerText = under25Cost;
    totalDueParagraph.innerText = totalCost;
}
estimatedCostBtn.onclick = estimateCost;