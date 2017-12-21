// Pseudo code 
//===============================================================================================================================


// Click event for Start button

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
// 
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

var correctAnswer = "";

var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unansweredCount = 0;


// Object to store questions, answer options and correct answer 
var triviaQuestions = {
    q1: {
        question: "Who played Lord Voldemort in the movies?",
        answers: ["JEREMY IRONS", "TOM HIDDLESTON", "GARY OLDMAN", "RALPH FIENNES"],
        correctAnswer: "RALPH FIENES",
    },
    q2: {
        question: "Who played Ron Weasley in the movies?",
        answers: ["KIERAN CULKIN", "RUPERT GRINT", "TYLER HOECHLIN", "DANIEL RADCLIFFE"],
        correctAnswer: "RUPERT GRINT",
    },
}

// Creates array of questions for triviaQuestions object
var questionsArray = [triviaQuestions.q1, triviaQuestions.q2]

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
        // Reset index to select first question on start
        // test =============
        console.log("Clicked on start button");
        // test ends 
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
        var answerOption = $("<button>");
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

        // Add answer information
        // to be coded 
    })
}

// Function to display timer on the screen 
function displayTimer() {
    timer--;
    $(".time").html(timer);
    if (timer === 0) {
        stopTimer();
    }
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
    // Calls start click even function 
    startClickEvent();

})
//==================================================================================================================================