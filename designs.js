// Select color input
var color = document.querySelector("#colorPicker");
color.addEventListener("click", getColor);


function getColor() {
    return color.value;
}


// Select size input
var inputHeight = document.getElementById("inputHeight");
var inputWidth = document.getElementById("inputWidth");


// When size is submitted by the user, call makeGrid()
var form = document.getElementById("sizePicker");
form.addEventListener('submit', makeGrid);


function getGridHeight() {
    return inputHeight.value;
}


inputHeight.addEventListener("change", getGridHeight);
inputHeight.addEventListener("keyup", getGridHeight);


function getGridWidth() {
    return inputWidth.value;
}


inputWidth.addEventListener("change", getGridWidth);
inputWidth.addEventListener("keyup", getGridWidth);


/**
* @description A function that creates a grid
* @param {string} event - The type of event
*/
function makeGrid(event) {
  // Your code goes here!
    event.preventDefault();
    var tableElement = document.getElementById("pixelCanvas");
    tableElement.innerHTML = '';

    var height = getGridHeight();
    var width = getGridWidth();
    for (let i = 1; i <= height; i++) {
        var row = tableElement.insertRow();
        for (let j = 1; j <= width; j++) {
            row.insertCell();
        }
    }


function colorCell(event) {
    event.target.style.backgroundColor = getColor();
}
   
    
document.querySelectorAll('td').forEach(cell => cell.addEventListener('click', colorCell));   
}
