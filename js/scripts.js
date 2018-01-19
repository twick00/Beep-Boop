$(document).ready(function () {
    $("#beep-boop-form").submit(function (event) {
        event.preventDefault();
        var userInput;
        if (parseInt($("#beep-boop-button").val()) < 0) {
            console.log("Please enter a positive number");
        } else if (parseInt($("#beep-boop-button").val()) > 0){
            main(parseInt($("#beep-boop-button").val()));
            console.log(userInput);
        } else {
            //Output: error, not a number
            console.log("Not a number");
        }
    });
});

function main(userInput) {
    var numberArray = [];
    for (var i = 1; i <= userInput; i++) {
        numberArray.push(i);
    }
    userName = "Dave";
    numberArray.forEach(function(number) {
        for (var i = 0; i < number.toString().length; i++) {
            var tempString;
            if (number[i] == "0") {
                console.log(number[i]);
                tempString += "Beep";
            }
            if (number[i] == "1") {
                if (tempString == undefined) {
                    tempString += "Boop!";
                }
                else {
                    tempString += " Boop!"; //Adds space for good grammar.
                }
            }
            if (number[i] % 3) {
                if (tempString == undefined) {
                    tempString += ("I'm sorry, " + userName + ". I'm afraid I can't do that.");
                }
                else {
                    tempString += " I'm sorry, " + userName + ". I'm afraid I can't do that."
                    //Adds space for good grammar.
                }
            }
            console.log(tempString);
        }
    });
}