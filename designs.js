// Select color input
var color = "white";
// Select size input
var inputHeight = document.getElementById("inputHeight");

var inputWidth = document.getElementById("inputWidth");
// When size is submitted by the user, call makeGrid()
var form = document.getElementById("sizePicker");
form.addEventListener('submit', makeGrid);


function getGridHeight() {
    var gridHeight = inputHeight.value;
    console.log("height " + gridHeight);
    return gridHeight;
}

inputHeight.addEventListener("change", getGridHeight);
inputHeight.addEventListener("keyup", getGridHeight);

function getGridWidth() {
    var gridWidth = inputWidth.value;
    console.log("Width " + gridWidth);
    return gridWidth;
}

inputWidth.addEventListener("change", getGridWidth);
inputWidth.addEventListener("keyup", getGridWidth);

var tBody = document.createElement("tbody");
tBody.setAttribute("id", "myTableBody");
document.getElementById("pixelCanvas").appendChild(tBody);

function createTableRow() {
    var tableRow = document.createElement("TR");
    tableRow.setAttribute("id", "myTableRow");
    return tBody.appendChild(tableRow);
}

function createCell() {
    var cellElement = document.createElement("td");
    var row = document.getElementById("myTableRow");
    row.appendChild(cellElement);
}


function makeGrid(event) {
  // Your code goes here!
    event.preventDefault();

    var height = getGridHeight();
    var width = getGridWidth();
    for (let i = 1; i <= height; i++) {
        var row = createTableRow();
        // var row = document.getElementById("pixelCanvas").insertRow();
        for (let j = 1; j <= width; j++) {
            // row.insertCell();
            row.innerHTML = createCell();
        }
  }
}
