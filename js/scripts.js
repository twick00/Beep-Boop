$(document).ready(function () {
    $("#beep-boop-form").submit(function (event) {
        var userName;
        if ($("#input-name").val() != "") {
            userName = $("#input-name").val();
        }
        event.preventDefault();
        $("#output").text("");
        var userInput;
        var userOutput;
        if (parseInt($("#beep-boop-button").val()) < 0) {
            $("#output").append("Please enter a positive number");
        } else if (parseInt($("#beep-boop-button").val()) > 0) {
            userOutput = main(parseInt($("#beep-boop-button").val()), userName);
            
        } else {
            $("#output").append("Please enter a number");
        }
        if (userOutput != undefined) {
            var textArray = [];
            userOutput.forEach(function (number, index, numberArray) {
                    $("#output").append(appendList(number));

            });
        }
        $(".results").show();
    });
});

function appendList(numbers) {
    return '<li>' + numbers + '</li>';
}   

function main(userInput, userName) {
    var numberArray = [];
    for (var i = 1; i <= userInput; i++) {
        numberArray.push(i);
    }
    if (userName == undefined) {
        userName = "Dave";
    }
    numberArray.forEach(function (number, index, numberArray) {
        var tempString;
        for (var i = 0; i < number.toString().length; i++) {
            tempString = checkBeep(number, i, tempString);
            tempString = checkBoop(number, i, tempString);
            tempString = checkSorry(number, tempString, userName);
        }
        if (tempString != undefined) {
            numberArray[index] = tempString;
        }
    });
    return numberArray;
}

function checkBeep(number, i, tempString) {
    if (number.toString()[i] == 0) {
        if (tempString == undefined) {
            tempString = "Beep!";
        }
    }
    return tempString;
}

function checkBoop(number, i, tempString) {
    if (number.toString()[i] == 1) {
        if (tempString == undefined) {
            tempString = "Boop!";
        }
    }
    return tempString;
}

function checkSorry(number, tempString, userName) {
    if (number.toString() % 3 == 0) {
        if (tempString == undefined) {
            tempString = (" I'm sorry, " + userName + ". I'm afraid I can't do that. ");
        }
    }
    return tempString;
}