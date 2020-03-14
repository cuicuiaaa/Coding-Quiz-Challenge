var timer = document.getElementById("timer");

var startPg = document.getElementById("start-page");
var firstQ = document.getElementById("first-question");
var secondQ = document.getElementById("second-question");
var thirdQ = document.getElementById("third-question");
var fourthQ = document.getElementById("fourth-question");
var fifthQ = document.getElementById("fifth-question");
var endPg = document.getElementById("end-page");
var highscoresPg = document.getElementById("highscores-page");

var startBtn = document.getElementById("start-button");
var q1Btn = document.querySelectorAll(".q1");
var q2Btn = document.querySelectorAll(".q2");
var q3Btn = document.querySelectorAll(".q3");
var q4Btn = document.querySelectorAll(".q4");
var q5Btn = document.querySelectorAll(".q5");
var submitBtn = document.getElementById("submit-button");
var gobackBtn = document.getElementById("goback-button");
var clearBtn = document.getElementById("clear-button");
var wrongBtn = document.querySelectorAll(".wrong-answer");
var rightBtn = document.querySelectorAll(".right-answer");

var scoreResult = document.getElementById("score");
var initial = document.getElementById("initial-input");
var highscores = document.getElementById("highscores");

var secondsLeft = 75;
var scores = 0;

function home() {
    startPg.classList.remove("hidden");
    firstQ.setAttribute("class", "hidden");
    secondQ.setAttribute("class", "hidden");
    thirdQ.setAttribute("class", "hidden");
    fourthQ.setAttribute("class", "hidden");
    fifthQ.setAttribute("class", "hidden");
    endPg.setAttribute("class", "hidden");
    highscoresPg.setAttribute("class", "hidden");
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Oops! Time's out! Game Over!");
            home();
        }
    }, 1000);
}

startBtn.addEventListener("click", function() {
    startPg.setAttribute("class", "hidden");
    firstQ.classList.remove("hidden");
    scores = 0;
    secondsLeft = 75;
    setTime();
});

for (i = 0; i < wrongBtn.length; i++) {
    wrongBtn[i].addEventListener("click", function() {
        secondsLeft = secondsLeft - 15;
        alert("Wrong!");
    })
}

for (i = 0; i < rightBtn.length; i++) {
    rightBtn[i].addEventListener("click", function() {
        scores = scores + 5;
        alert("Correct!");
    })
}

for (i = 0; i < q1Btn.length; i++) {
    q1Btn[i].addEventListener("click", function() {
        firstQ.setAttribute("class", "hidden");
        secondQ.classList.remove("hidden");
    });
}

for (i = 0; i < q2Btn.length; i++) {
    q2Btn[i].addEventListener("click", function() {
        secondQ.setAttribute("class", "hidden");
        thirdQ.classList.remove("hidden");
    });
}

for (i = 0; i < q3Btn.length; i++) {
    q3Btn[i].addEventListener("click", function() {
        thirdQ.setAttribute("class", "hidden");
        fourthQ.classList.remove("hidden");
    });
}

for (i = 0; i < q4Btn.length; i++) {
    q4Btn[i].addEventListener("click", function() {
        fourthQ.setAttribute("class", "hidden");
        fifthQ.classList.remove("hidden");
    });
}

for (i = 0; i < q5Btn.length; i++) {
    q5Btn[i].addEventListener("click", function() {
        fifthQ.setAttribute("class", "hidden");
        endPg.classList.remove("hidden");
        scoreResult.textContent = scores;
    });
}

var myHighscore = document.createElement("h2");

submitBtn.addEventListener("click", function() {
    endPg.setAttribute("class", "hidden");
    highscoresPg.classList.remove("hidden");
    myHighscore.textContent = initial.value + ": " + scores;
    highscores.append(myHighscore);
});

gobackBtn.addEventListener("click", function() {
    highscoresPg.setAttribute("class", "hidden");
    startPg.classList.remove("hidden");
    myHighscore.classList.remove("hidden");
});

clearBtn.addEventListener("click", function() {
    myHighscore.setAttribute("class", "hidden");
})
