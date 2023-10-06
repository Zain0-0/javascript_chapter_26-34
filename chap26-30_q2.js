
var userInput = prompt("Enter a negative floating-point number:");
var number = parseFloat(userInput);


    var roundValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);

    document.write("<h2>Number: " + number + "</h2>");
    document.write("<p>Round Value: " + roundOff + "</p>");
    document.write("<p>Floor Value: " + floorValue + "</p>");
    document.write("<p>Ceiling Value: " + ceilValue + "</p>");

