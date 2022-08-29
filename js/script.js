//Question 1 
//
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second")
}

//Question 2 
//

var age = 11;
var minimumAge = "13";

var minimumAgeConvert = parseFloat (minimumAge);

if (age >= minimumAgeConvert) {
    console.log("Your age meets the requirements")
} else {
    console.log("Your age does NOT meet the minimum age requirments")
}

//Question 3
//

var income = "11.050";
var maximumIncome = "13.075";

var convertingStringToNumbers = parseFloat(income)

var convertingStringToNumbers2 = parseFloat(maximumIncome)


if (convertingStringToNumbers < convertingStringToNumbers2) {
    console.log("your income is less then the income requirments");
} else {
    concole.log("your income is above the maximum income level");
}

//Question 4
//

var colour = "blue";

if (colour !== "orange") {
    console.log("This colour is a bit rubbish");
}

//Question 5
//

var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not Paid");
}

//Question 6
//

var selectedNumber = 13;
var winningNumber = "15";

var winningNumberConvert = parseFloat(winningNumber);

if (selectedNumber !== winningNumberConvert) {
    console.log("you lose again");
} 
else{ 
    console.log("you win");
}

//Question 7
//
var dayOfTheWeek = 2;
var todaysDay;

switch(dayOfTheWeek) {

    case 1:
        todaysDay = "Monday";
        break;
    case 2:
        todaysDay = "Thuesday";
        break;
    case 3:
        todaysDay = "Wendsday";
        break;
    case 4:
        todaysDay = "Thuesday";
        break;
    case 5:
        todaysDay = "Friday";
        break;
    case 6:
        todaysDay = "Saturday";
        break;
    case 7:
        todaysDay = "Sunday";
        break;    

    default: 
        todaysDay = "invalid day number";

}

console.log(todaysDay);





