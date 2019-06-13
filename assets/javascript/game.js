var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var beginGame = function () {



    var currentScore = 0;

    targetScore = getRandom(19, 120);

    // Something is wrong with the code below that needs to be fixed!  Figure it out!!

    var blue = crystal.blue.value = getRandom(1, 12);

    var green = crystal.green.value = getRandom(1, 12);
    var red = crystal.red.value = getRandom(1, 12);
    var yellow = crystal.yellow.value = getRandom(1, 12);
    console.log("blue", blue);
    console.log('green', green);
    console.log("red", red);
    console.log('yellow', yellow);


    $("#yourScore").text(currentScore);
    console.log('score', currentScore);

    $("#targetScore").text(targetScore);
    console.log('target', targetScore);
    
}

var addedValues = function (crystal) {
    currentScore = currentScore + crystal;
    console.log('newSCORE', currentScore);
    
    $("#yourScore").text(currentScore);

    console.log("Your Score is: " + currentScore);
    score();

}



beginGame();

$("#Blue").click(function () {
    addedValues(crystal.blue.value);

});

$("#Green").click(function () {
    addedValues(crystal.green.value);
});

$("#Yellow").click(function () {
    addedValues(crystal.yellow.value);
});

$("#Red").click(function () {
    addedValues(crystal.red.value);
});

// If the target score is reached player wins ++
// If the target score is exceeded player loses ++

function score (){
    if(currentScore === targetScore) {
        winCount ++;
        $("#Win").text(winCount);
        console.log('win', winCount);
        alert("You Win!");
    }
    
    else if (currentScore > targetScore) {
        lossCount ++;
        $("#Loss").text(lossCount);
        console.log('loss', lossCount);
        alert("You Lose!");
    }
}


