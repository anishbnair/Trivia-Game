// Pseudo code 
//===============================================================================================================================
// Click event for Start button
// 
// Click event when user choose an answer option
//  user click on answer choice 
//  stop timer 
//  store the answer choice to a variable
//  get the correct answer and store it a variable 
//  compare the answers
//  if user guess is correct, diplay your answer is correct, increment correct answer count and display next question
//  if user guess is incorrect, display your answer is incorrect, increment wrong answer count and diplay next question

// 
// Click event when user selects 'Start Over' button at the end of the game 

// Functions 

// Function to display one active section at a time
//  hide all sections 
//  activate only the section which is passed to the function 

// Function to display question and answers
// Function to start timer
//  
// Function to stop timer
//  clear interval 

// Function to reset timer 
//  reset timer value by assigning value to timer variable
//  call starttimer function 

// Function to validate answer selected
// Funtion for timeout
//  if there is another question display it
//  else show the results 
//=================================================================================================================================

// VARIABLES/DATA
// ==================================================================================================================================
// variables to activate one active section at a time 
var sectionName = "";
var activateStart = $("#startSection");
var activateQuestion = $("#questionSection");
var activateAnswers = $("#answerSection");
var activateResults = $("#resultsSection");

// variable for question index 
var questionIndex = 0;
var questionID;
// variable for timer 
var timer = 15;

// variables for counters to track score
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unansweredCount = 0;


// Object to store questions, answer options and correct answer 
var triviaQuestions = {
    q1: {
        question: "From what King's Cross platform does the Hogwarts Express leave?",
        answers: ["Nine and Three Quarter", "Eight and One Quarter", "Five and a Half", "Six and Three Eighths"],
        correctAnswer: "Nine and Three Quarter",
    },
    q2: {
        question: "Who played Lord Voldemort in the movies?",
        answers: ["Jeremy Irons", "Tom Hiddleston", "Gary Oldman", "Ralph Fiennes"],
        correctAnswer: "Ralph Fiennes",
    },
    q3: {
        question: "What is the name of the spell used to ward off Dementors?",
        answers: [" Alarte Ascendare", "Confundus Charm", "Patronus Charm", "Locomotor Mortis"],
        correctAnswer: "Patronus Charm",
    },
    q4: {
        question: "Who played Ron Weasley in the movies?",
        answers: ["Kieran Culkin", "Rupert Grint", "Tyler Hoechlin", "Daniel Radcliffe"],
        correctAnswer: "RUPERT GRINT",
    },
    q5: {
        question: "Harry Potter's wand has what kind of core?",
        answers: ["Unicorn Tail Hair", "Dragon Heartstrig", "Veela Hair", "Phoenix Feather"],
        correctAnswer: "Phoenix Feather",
    },    
}

// Creates array of questions for triviaQuestions object
var questionsArray = [triviaQuestions.q1, triviaQuestions.q2, triviaQuestions.q3, triviaQuestions.q4, triviaQuestions.q5]

// Functions
//==================================================================================================================================
// Function to display only one active section at a time
function activateSection(sectionName) {
    //Hide all sections 
    activateStart.hide();
    activateQuestion.hide();
    activateAnswers.hide();
    activateResults.hide();
    // activate only the sectionName section 
    if (sectionName) {
        sectionName.show();
    }
}

// Fires when user click on start button to begin game 
function startClickEvent() {
    $("#start").on("click", function () {
        // test =============
        console.log("Clicked on start button");
        // test ends 
        // Reset index to select first question on start
        questionIndex = 0;
        questionID = questionsArray[questionIndex];
        activateSection(activateQuestion);

        // Display
        displayQuestionAnswers();

        // Start timer 
        startTimer();

        // Reset correct answer counter to 0
        correctAnswerCount = 0;

        // Reset incorrect answer counter to 0
        incorrectAnswerCount = 0;

        // Reset unanswered counter to 0 
        unansweredCount = 0;

    })
}

// Function to diplay question and answer options 

function displayQuestionAnswers() {

    // Display question 
    $("#question").html(questionID.question);

    // Display answer options 
    for (var i = 0; i < questionID.answers.length; i++) {

        // Create answer option button item
        var answerOption = $("<br> <button> </br>");
        answerOption.addClass("btnAnswer");

        // Set answer option text to answer in questions array
        answerOption.html(questionID.answers[i]);

        // Append answer option to the list of answer choices
        answerOption.appendTo(".answerChoices");
    }
    clickAnswerEvent();
}

// Fires when user click one of the answer option 
function clickAnswerEvent() {
    //$("button").on("click", function () {        
    $(".btnAnswer").on("click", function () {
        console.log("User clicked on answer button");

        // Set selected answer to selected list item.
        var userResponse = $(this).html();
        console.log(userResponse);

        // Show answer page.
        //showSection(answerPage);
        activateSection(activateAnswers);

        // Add answer information
        displayAnswerAnalysis(userResponse);
    })
}

// Function to compare correct answer with user selected option and display correct answer on the screen
function displayAnswerAnalysis(userResponse) {
    stopTimer();
    // Store correct answer to a variable 
    var ctAnswer = questionID.correctAnswer;
    console.log("Correct answer is " + ctAnswer);
    console.log("User selected answer is " + userResponse);

    // Display correct answer on the screen 
    $("#correctAnswerInfo").html("The correct Answer was: " + ctAnswer);

    // Compare answers
    if (userResponse === ctAnswer) {
        // Empty 
        $("#correctAnswerInfo").empty();
        // Increment correct answer counter
        correctAnswerCount++;
        // 
        $("#answerAssessment").html("You are correct!");

    } else if (userResponse === 0) {
        // increment unanswered counter
        // unansweredCount++;
        $("#answerAssessment").html("Sorry, out of time!");

    } else {
        incorrectAnswerCount++;
        $("#answerAssessment").html("Sorry, better luck next time!");
    }
    // Length of time to display answer analysis section 
    setTimeout(nextQuestion, 3000);
}

// Function to display timer on the screen 
function displayTimer() {
    timer--;
    $(".time").html(timer);
    if (timer === 0) {
        //stopTimer();
        activateSection(activateAnswers);
        unansweredCount++;
        userResponse = 0;
        displayAnswerAnalysis(userResponse);
    }
}

// Function to call next question
function nextQuestion() {

    // Display next question if any 
    if (questionIndex < questionsArray.length - 1) {
        questionIndex++;
        questionID = questionsArray[questionIndex];
        // Go to next question
        // Display question section 
        activateSection(activateQuestion);
        // Empties out existing answers from previous question
        $(".answerChoices").empty();

        // Displays question and possible answers
        displayQuestionAnswers();

        // Resets question timer.
        resetTimer();

    } else {
        //showresults function if no more questions to display 
        gameScore();
    }
}

// Function to display score at the end of the game
function gameScore() {
    // Display results section 
    activateSection(activateResults);
    $("#correctAnswers").html(correctAnswerCount);
    $("#incorrectAnswers").html(incorrectAnswerCount);
    $("#unanswered").html(unansweredCount);
}

// Function to restart game when user click on 'Start Over?' button
function restartClickEvent() {
    $("#restart").on("click", function () {
        $(".answerChoices").empty();
        resetTimer();
        // Reset correct answer counter to 0
        correctAnswerCount = 0;
        // Reset incorrect answer counter to 0
        incorrectAnswerCount = 0;
        // Reset unanswered counter to 0 
        unansweredCount = 0;
        questionIndex = 0;
        questionID = questionsArray[questionIndex];
        activateSection(activateQuestion);
        // Display
        displayQuestionAnswers();
    });
}

// Function to start timer when questions display on the screen 
function startTimer() {
    timeIntervalID = setInterval(displayTimer, 1000);
}

// Function to stop timer
function stopTimer() {
    clearInterval(timeIntervalID);
}

// Function to reset timer
function resetTimer() {
    timer = 15;
    startTimer();
}

//==================================================================================================================================
$(document).ready(function () {
    // Display Start section 
    activateSection(activateStart);
    // Fires when user click on Start button 
    startClickEvent();
    // Fires when user click on 'Start Over?' button
    restartClickEvent();
})
//==================================================================================================================================