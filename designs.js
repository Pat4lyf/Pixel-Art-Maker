// Select color input
var color = document.querySelector("#colorPicker");

/**
* @description A method that listens for a click event 
               and calls the getColor function on the color element
*/
color.addEventListener("click", getColor);

/**
 * @description A function that gets the value of the color input
 * @returnValue {string} - The selected color
 */
function getColor() {
  return color.value;
}

// Select size input
var inputHeight = document.getElementById("inputHeight");
var inputWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
var form = document.getElementById("sizePicker");

/**
* @description A method that listens for a submit event and 
               calls the makeGrid function on the form element
*/
form.addEventListener("submit", makeGrid);

/**
 * @description A function that gets the value of the inputed height
 * @returnValue {number} - The value of the specified height
 */
function getGridHeight() {
  return inputHeight.value;
}

/**
* @description A method that listens for a change event and 
               calls the getGridHeight function on the inputHeight element
*/
inputHeight.addEventListener("change", getGridHeight);

/**
* @description A method that listens for a keyup event and 
               calls the getGridHeight function on the inputHeight element
*/
inputHeight.addEventListener("keyup", getGridHeight);

/**
 * @description A function that gets the value of the inputed width
 * @returnValue {number} - The value of the specified width
 */
function getGridWidth() {
  return inputWidth.value;
}

/**
* @description A method that listens for a change event and 
               calls the getGridWidth function on the inputWidth element
*/
inputWidth.addEventListener("change", getGridWidth);

/**
* @description A method that listens for a keyup event and 
               calls the getGridWidth function on the inputWidth element
*/
inputWidth.addEventListener("keyup", getGridWidth);

/**
 * @description A function that creates a grid
 * @param {string} event - The type of event
 */
function makeGrid(event) {
  event.preventDefault();
  var tableElement = document.getElementById("pixelCanvas");
  tableElement.innerHTML = "";

  var height = getGridHeight();
  var width = getGridWidth();
  for (let i = 1; i <= height; i++) {
    var row = tableElement.insertRow();
    for (let j = 1; j <= width; j++) {
      row.insertCell();
    }
  }

  /**
   * @description A function that colors a cell
   * @param {string} event - The type of event
   */
  function colorCell(event) {
    event.target.style.backgroundColor = getColor();
  }

  /**
   * @description A method that gets a nodelist of all the tabledata elements,
   * and adds an event listener that listens for a click event for each of the cell
   */
  document
    .querySelectorAll("td")
    .forEach((cell) => cell.addEventListener("click", colorCell));
}
