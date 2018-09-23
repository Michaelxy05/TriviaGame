
// My movie questions/choices/answer/images
var questionArray = [{
	//The Godfather
    question: 'What iconic movie had this line : "I\'m gonna make him an offer he can\'t refuse"?',
    choices: ["The Godfather", "Casino", "The Godfather 2", "Scarface"],
    correctAnswer: ["The Godfather"],
    answerImage: "<img class='center-block img-right' src='assets/images/godfather.gif'>"
},
{
	//Star Wars: Episode III – Revenge of the Sith
    question: "Which young Jedi Knight becomes Darth Vader in Star Wars?",
    choices: ["Obi-Wan Kenobi","Anakin Skywalker","Qui-Gon Jinn","Mace Windu"],
    correctAnswer: ["Anakin Skywalker"],
    answerImage: "<img class='center-block img-right' src='assets/images/anakin.gif'>"
},
{
	//Star Trek
    question: "Who is the Captain of the starship USS Enterprise-D?", 
    choices: ["James Tiberius \"Jim\" Kirk", "Worf", "Jean-Luc Picard", "Spock"],
    correctAnswer: ["Jean-Luc Picard"],
    answerImage: "<img class='center-block img-right' src='assets/images/jean-luc.gif'>" 
},
{
	//The Lost Boys
    question: "In the movie The Lost Boys, what was the name of Sam's older brother?", 
    choices: ["David","John","Michael","Peter"],
    correctAnswer: ["Michael"],
    answerImage: "<img class='center-block img-right' src='assets/images/michael.gif'>" 
},
{
	//The Outsiders
    question: "In the movie \"The Outsiders\", who showed up late to the rumble between the Greasers and Socs?",
    choices: ["Darry", "Sodapop", "Ponyboy", "Dally"],
    correctAnswer: ["Dally"],
    answerImage: "<img class='center-block img-right' src='assets/images/dally.gif'>" 
},
{
	//The Sandlot
    question: "In the movie \"The Sandlot\", Benny puts on __________, shoes \"guaranteed\" to make a kid run faster and jump higher?", 
    choices: ["PF Flyers","Converse","Air Jordan","Adidas"],
    correctAnswer: ["PF Flyers"],
    answerImage: "<img class='center-block img-right' src='assets/images/pfflyers.gif'>" 
},
{
	//Good Will Hunting
    question: "In the movie \"Good Will Hunting\", Will's friends gift him a car for which birthday?",
    choices: ["18th", "21st", "25th", "17th"],
    correctAnswer:  ["21st"],
    answerImage: "<img class='center-block img-right' src='assets/images/goodwillhunting.gif'>" 
},
{
	//A Beautiful Mind
    question: "Who played as John Nash, a 2001 American biographical drama film called \"A Beautiful Mind\"",
    choices: ["Mel Gibson", "Bruce Willis", "Russell Crowe", "Tom Cruise"],
    correctAnswer:  ["Russell Crowe"],
    answerImage: "<img class='center-block img-right' src='assets/images/abeautifulmind.gif'>" 
},
{
	//The Butterfly Effect
    question: "In the movie \"The Butterfly Effect\", young Evan Treborn and his friends puts what in a mailbox?",
    choices: ["dog poop", "a stick of dynamite", "drugs", "a toy airplane"],
    correctAnswer:  ["a stick of dynamite"],
    answerImage: "<img class='center-block img-right' src='assets/images/butterflyeffect.gif'>" 
},
{
	//Robocop
    question: "What is the name of the street cop turned into Robocop?",
    choices: ["Martin Riggs","John Conner","Dick Jones","Alex Murphy"],
    correctAnswer: ["Alex Murphy"],
    answerImage: "<img class='center-block img-right' src='assets/images/murphy.gif'>" 

}];

var randomQuestion =null;
console.log(randomQuestion);

var questionCounter = 0;
var selecterAnswer;
var tickingTime;
var correctCount = 0;
var incorrectCount = 0;
var timeOutCount = 0;


    //Main Functions
    //================================================

function startScreen() {
	// var startScreenHTML = $("<button>");
	// startScreenHTML.addClass("startButton");
	// startScreenHTML.text("Start");
	// startScreenHTML.attr('btn btn-primary btn-lg btn-block start-button' href='#' role='button');
	startScreenHTML = "<p class='text-center startButton'><a class='btn btn-dark btn-lg btn-block startButton' href='#' role='button'>Start</a></p>";
	$(".mainArea").html(startScreenHTML);
}

startScreen();

$("body").on("click", ".startButton", function(event){
	event.preventDefault();
	generateHTML();
	$('#audio').get(0).play();
	timer();

}); 

// Click on multiple choice here
$("body").on("click", ".answer", function(event){
	randomQuestion.selectedAnswer = $(this).text();


if(randomQuestion.correctAnswer[0] == randomQuestion.selectedAnswer) {
	console.log("right");
        console.log(randomQuestion.choices);
		console.log(randomQuestion.correctAnswer);
        clearInterval(tickingTime);
		generateWin();
		//break;
	}
	else {
		console.log("wrong");
		clearInterval(tickingTime);
		generateLoss();
	}



	// if(randomQuestion.choices[3] === randomQuestion.correctAnswer) {
	// 	console.log("right");
    //     console.log(randomQuestion.choices);
	// 	console.log(randomQuestion.correctAnswer);
    //     clearInterval(tickingTime);
	// 	generateWin();
	// }
	// else {
	// 	console.log("wrong");
	// 	clearInterval(tickingTime);
	// 	generateLoss();
	// }
}); 

// Reset Button function
$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

    //Event Function
    //============================================
// Screen of lose when timed out
function timeoutLoss() {
	timeOutCount++;
	gameHTML = "<p class='text-center timerDisplay'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + randomQuestion.correctAnswer + "</p>" + "<img class='center-block incorrectImage' src='assets/images/wrong.gif'>";
	$(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);

}

// Screen of when guess correctly
function generateWin() {
	correctCount++;
	gameHTML = "<p class='text-center timerDisplay'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + randomQuestion.correctAnswer + "</p>" + randomQuestion.answerImage;
	$(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
    
}

// Screen of when guess incorrectly
function generateLoss() {
	incorrectCount++;
	gameHTML = "<p class='text-center timerDisplay'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ randomQuestion.correctAnswer + "</p>" + "<img class='center-block incorrectImage' src='assets/images/wrong.gif'>";
	$(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
    console.log(randomQuestion.correctAnswer);
    
}

// Screen of multiple choices
function generateHTML() {

	randomQuestion = questionArray[Math.floor(Math.random()*questionArray.length)];
	
	console.log(randomQuestion);
	gameHTML = "<p class='text-center timerDisplay'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + randomQuestion.question + "</p><p class= 'answer'>"+ randomQuestion.choices[0] + "</p><br><p class='answer'>"+randomQuestion.choices[1]+"</p><br><p class='answer'>"+randomQuestion.choices[2]+"</p><br><p class='answer'>"+randomQuestion.choices[3]+"</p>";
    $(".mainArea").html(gameHTML);
    console.log(randomQuestion.choices[0]);
    console.log(randomQuestion.choices[1]);
    console.log(randomQuestion.choices[2]);
    console.log(randomQuestion.choices[3]);
}

//After 10 random questions--- End it here
function wait() {
	if (questionCounter < 9) {
    questionCounter++;
    console.log('console logging questionCounter  '+ questionCounter);
	generateHTML();
	counter = 30;
	timer();
	}
	else {
		statScreen();
	}
}

// 30sec Timer timer
function timer() {
	tickingTime = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(tickingTime);
			timeoutLoss();
		}
		if (counter > 0) {
			counter--;
		}
        $(".timer").html(counter);
        //console.log(counter);
	}
}

// Stat Screen to show how many questions were answers correctly/incorrectly
function statScreen() {
	gameHTML = "<p class='text-center'>Your Stats" + "</p>" + "<p class='correctStat'>Correct Answers: " + correctCount + "</p>" + "<p>Wrong Answers: " + incorrectCount + "</p>" + "<p>Unanswered: " + timeOutCount + "</p>" + "<p class='text-center restartButton'><a class='btn btn-blk btn-lg btn-block restartButton' href='#' role='button'>Retry</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctCount = 0;
	incorrectCount = 0;
	timeOutCount = 0;
	counter = 30;
	generateHTML();
	timer();
}

var startScreenHTML;
var gameHTML;
var counter = 30;


