// Pseudo code 
//===============================================================================================================================

// Click Events

// Click event for Start button
// Click event when user choose an answer option
// Click event when user selects 'Start Over' button at the end of the game 

// Functions 

// 1. Function to display one active section at a time
//  hide all sections 
//  activate only the section which is passed to the function 

// Function to display question and answers
// Function to start timer
// Function to stop timer
// Function to reset timer 
// Function to validate answer selected
//=================================================================================================================================

// VARIABLES/DATA
// ==================================================================================================================================

var sectionName = "";
var activateStart = $("#startSection");
var activateQuestion = $("#questionSection");
var activateAnswers = $("#answerSection");
var activateResults = $("#resultsSection");

var index = 0;
var questionID; 

// Object to store questions, answer options and correct answer 
var triviaQuestions = {
    q1: {
        question: "Who played Lord Voldemort in the movies?",
        answers: ["JEREMY IRONS", "TOM HIDDLESTON", "GARY OLDMAN", "RALPH FIENES"],
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

// Click event function fires when user click on start button to begin game 
function startClickEvent() {
    $("#start").on("click", function () {
        // Reset index to select first question on start
        index = 0;
        questionID = questionsArray[index];
        activateSection(activateQuestion);

        // Display question 
        $("#question").html(questionID.question);

        // Display answers 
        for (var i = 0; i < questionID.answers.length; i++) {

            // Create answer option button item
            var answerOption = $("<button>");

            // Set answer option text to answer in questions array
            answerOption.html(questionID.answers[i]);

            // Append answer option to the list of answer choices
            answerOption.appendTo(".answerChoices");
        }
    })
}

// Function to start timer 


//==================================================================================================================================
$(document).ready(function () {
    // Display Start section 
    activateSection(activateStart);
    // Calls start click even function 
    startClickEvent();

})
//==================================================================================================================================