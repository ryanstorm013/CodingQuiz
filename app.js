var timerCount = 0;

var timerEl = document.querySelector("#timer");
var myResult = document.querySelector("#textResult");
var result = document.getElementById("result");

timerEl.textContent = "Time: " + timerCount;

result.style.visibility="hidden";
document.getElementById("scoreBoard").style.display="none";

document.getElementById("startQuiz").addEventListener("click", function() {

document.getElementById("startQuiz").style.display="none";
document.getElementById("sub-title").style.display="none";
document.getElementById("title").style.visibility="hidden";


document.getElementById("questionInvis").style.visibility="visible";


timerCount = 100;
timerEl.textContent = "Time: " + timerCount;

var timer = window.setInterval(function () {
    timerCount--;  
    timerEl.textContent = "Time: " + timerCount;

    if(timerCount === 0) {
        clearInterval(timer);

        myResult.style.visibility="visible";
        myResult.textContent = "Times Up!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 2000);
    }
}, 1000);



var questions = [
    {
        q: "Commonly used data types DO NOT INCLUDE:",
        choices: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        answer: "C"
    },
    {
        q: "The condition in an if/else statement is encosed within ____.",
        choices: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
        answer: "C"
    },
    {
        q: "Array in JavaScript can be used to store ____.",
        choices: ["A. Numbers and Strings", "B. Other Arrays", "C. Booleans", "D. All of the above"],
        answer: "D"
    },
    {
        q: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["A. Commas", "B. Curly Brackets", "C. Quotes", "D. Parentheses"],
        answer: "C"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["A. JavaScript", "B. Terminal/Bash", "C. For Loops", "D. Console.log"],
        answer: "D"
    }];

var questionsAdd = 0;



var myQuestion = document.querySelector("#question");
var optionA = document.querySelector("#answer1");
var optionB = document.querySelector("#answer2");
var optionC = document.querySelector("#answer3");
var optionD = document.querySelector("#answer4");



function questionSet() {
    if (questionsAdd === questions.length || timerCount === 0) {
        clearInterval(timer);


        var inputForm = document.querySelector("#inputForm");
        var initialText = document.querySelector("#initials");
        
        

        document.getElementById("question").style.display="none";
        document.getElementById("score").textContent = "Your Final Score is " + timerCount;
        document.getElementById("questionInvis").style.display="none";
        document.getElementById("idVisibility").style.display="block";

        inputForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var initialD = initialText.value;

            document.getElementById("idVisibility").style.display="none";
            document.getElementById("scoreBoard").style.display="block";

            window.localStorage.setItem("timerResult", timerCount);
            window.localStorage.setItem("myInitial", initialD);
        });

        var initialLast = window.localStorage.getItem("myInitial");
        var timeResult = window.localStorage.getItem("timerResult");

        console.log(initialLast);
        console.log(timeResult);

        if(initialLast === null) {
            document.querySelector("#highScores").textContent = "Score not posted, retry quiz to see your results";
        }
        else {
            document.querySelector("#highScores").textContent = initialLast + "-" + timeResult;
        }    

        return; 
    }

    myQuestion.textContent = questions[questionsAdd].q;
    optionA.textContent = questions[questionsAdd].choices[0];
    optionB.textContent = questions[questionsAdd].choices[1];
    optionC.textContent = questions[questionsAdd].choices[2];
    optionD.textContent = questions[questionsAdd].choices[3];

}

questionSet();

optionA.addEventListener("click", function () {   
    if (optionA.getAttribute("data-answer") === questions[questionsAdd].answer) {
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Correct!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);


    } else {
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Wrong!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);

    }
});

optionB.addEventListener("click", function () {
    if (optionB.getAttribute("data-answer") === questions[questionsAdd].answer) {
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Correct!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);

    } else {
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Wrong!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);
    }
});

optionC.addEventListener("click", function () {
    if (optionC.getAttribute("data-answer") === questions[questionsAdd].answer) {
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Correct!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);

    } else {
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Wrong!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);
    }
});

optionD.addEventListener("click", function () {
    if (optionD.getAttribute("data-answer") === questions[questionsAdd].answer) {
        questionsAdd++;
        questionSet();
        
        myResult.style.visibility="visible";

        myResult.textContent = "Correct!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);

    } else {   
        questionsAdd++;
        questionSet();

        myResult.style.visibility="visible";

        myResult.textContent = "Wrong!";
        result.style.visibility="visible"
        setTimeout(function() {
            result.style.visibility="hidden";
            myResult.style.visibility="hidden";
        }, 1000);
    }
});

});