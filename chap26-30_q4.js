var minValue = 1;
var maxValue = 6;

var diceValue1 = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
var diceValue2 = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
document.write("<h2>Rendom Dice Value: " + diceValue1 + "</h2>");
document.write("<h2>Rendom Dice Value: " + diceValue2 + "</h2>");