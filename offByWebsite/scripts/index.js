let dateParagraph = document.getElementById("dateParagraph");
let userInput = document.getElementById("dateInput");

function displayDate() {
    let d = new Date (userInput.value);
    //console.log(d.toString());
    dateParagraph.innerText = d.toString();
}


