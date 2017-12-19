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

var section = ""; 
var activateStart = $("#startSection");
var activateQuestion = $("#questionSection");
var activateAnswers = $("#answerSection");
var activateResults = $("#resultsSection");


// Functions
//==================================================================================================================================
// Function to display only one active section at a time
function activeSection(section) {
    //hide all sections 
    activateStart.hide();
    activateQuestion.hide();
    activateAnswers.hide();
    activateResults.hide(); 
    // activate only one section
    if (section) {
        section.show(); 
    }
}
//activeSection(activateStart)