var userInput = prompt("Enter a positive integer:");
var number = parseFloat(userInput);

var roundOff = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("<h2>Number: " + number + "</h2>");
document.write("<p>Round Value: " + roundValue + "</p>");
document.write("<p>Floor Value: " + floorValue + "</p>");
document.write("<p>Ceiling Value: " + ceilValue + "</p>");
        
        
        
   