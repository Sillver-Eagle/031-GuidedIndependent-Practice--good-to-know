//Task 1
$(".square").click(function() {
    let userInput = $("input").val();
    let result = square(userInput);
    $("#message").text(result);
});

// write function 1 here:
function square(number) {
    return number * number;
}


//Task 2
$(".greeting").click(function() {
    let userInput = $("input").val();
    let result =
        greeting(userInput);
    $("#message").text(result);
});

//write function 2 here:
function greeting(input) {
    return "hello " + input + "!";
}

//Task 3
$(".vote").click(function() {
    let userInput = $("input").val();
    let result =
        vote(userInput);
    $("#message").text(result);
});

function vote(input) {
    return input > 18;
}

//Task 4
$(".password").click(function() {
    let userInput = $("input").val();
    let result =
        vote(userInput);
    $("#message").text(result);
});

function password(input) {
    return input === 1234;
}