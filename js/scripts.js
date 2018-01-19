$(document).ready(function () {
    $("#beep-boop-form").submit(function (event) {
        event.preventDefault();
        var userName;
        var userInput;
        var userOutput;
        $("#output").text("");
        if ($("#input-name").val() != "") {
            userName = $("#input-name").val();
        }
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
        //Changing the below order changes the priority.
        tempString = checkBeep(number, tempString);
        tempString = checkBoop(number, tempString);
        tempString = checkSorry(number, tempString, userName);
        //
        if (tempString != undefined) {
            numberArray[index] = tempString;
        }
    });
    return numberArray;
}

function appendList(numbers) {
    return '<div class="col-lg-2">' + '<li>' + numbers + '</li>' + '</div';
}

function checkBeep(number, tempString) {
    for (var i = 0; i < number.toString().length; i++) {
        if (number.toString()[i] == 0) {
            tempString = "Beep!";
        }
    }
    return tempString;
}

function checkBoop(number, tempString) {
    for (var i = 0; i < number.toString().length; i++) {
        if (number.toString()[i] == 1) {
            tempString = "Boop!";
        }
        return tempString;
    }
}

function checkSorry(number, tempString, userName) {
    if (number.toString() % 3 == 0) {
        tempString = (" I'm sorry, " + userName + ". I'm afraid I can't do that. ");
    }
    return tempString;
}