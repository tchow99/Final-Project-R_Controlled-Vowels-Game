// Make sure document loads correctly and then calls the main function
$(document).ready(main);
console.log("ready!");

//Create object for each question
var shark = {
	spelling: "s h  _  _  k",
	fullSpelling: "s h a r k",
	imgName: "shark",
	answerVowel: "ar"
};

var spider = {
	spelling: "s p i d  _  _ ",
	fullSpelling: "s p i d e r",
	imgName: "spider",
	answerVowel: "er"
};

var turtle = {
	spelling: "t  _  _  t l e",
	fullSpelling: "t u r t l e",
	imgName: "turtle",
	answerVowel: "ur"
};

var horse = {
	spelling: "h  _  _  s e",
	fullSpelling: "h o r s e",
	imgName: "horse",
	answerVowel: "or"
};

var squirrel = {
	spelling: "s q u  _  _  r e l",
	fullSpelling: "s q u i r r e l",
	imgName: "squirrel",
	answerVowel: "ir"
};

var objArray = [shark, spider, turtle, horse, squirrel];

//Variable to store random array element number
var randomNum = 0;

//Variable to story userVowel
var userVowel;

var computerAnswer;

var computerResponse;

var userResponse;

var correctAnswer;

var score = 0;

var nextWord = "true";

var counter = 0;

function main(){

	$(".ar").hide();
	$(".er").hide();
	$(".ir").hide();
	$(".or").hide();
	$(".ur").hide();


	$("#startGame").click(function(event){
		userVowel = null;
		event.preventDefault();
		// computerResponse = game();
		
		//Give user a new question and stores the correct answer in computerResponse
		$(".result").text("**********************");


		$("#startGame").hide();
		$("h1").hide();

		//Show answer choices at the beginning of game
		$(".ar").show();
		$(".er").show();
		$(".ir").show();
		$(".or").show();
		$(".ur").show();

		//Refreshes screen with new word or question
		computerResponse = game();
	});


}



// Game function that runs the game
function game(){
		//Remove any previous loaded images
		resetImage(randomNum);

		//Generate random number to choose random question
		randomNum = getRandom();
		// alert("Random # generated: " + randomNum);
		
		//Pass randomNum value to change word by selecting element in wordArray
		changeWord(randomNum);

		//Pass randomNum value to change word by selecting element in imageArrray
		changeImage(randomNum);

		//Pass randomNum value to figure out what the answerVowel is from objects of the animals
		// changeAnswer(randomNum);
		computerAnswer = changeAnswer(randomNum);
		return computerAnswer;
	}


//User selects answer on clicking a button, store user input in userVowel

	$(".ar").click(function(){
		event.preventDefault();
		userVowel = "ar";
		console.log(userVowel);
		// alert("user picked AR and userVowel = " + userVowel);
		// return "ar";
		verifyResponse(userVowel);
	});

	$(".er").click(function(){
		event.preventDefault();
		userVowel = "er";
		console.log(userVowel);
		// alert("user picked ER and userVowel = " + userVowel);
		// return "er";
		verifyResponse(userVowel);
	});

	$(".ir").click(function(){
		event.preventDefault();
		userVowel = "ir";
		console.log(userVowel);
		// alert("user picked IR and userVowel = " + userVowel);
		// return "ir";
		verifyResponse(userVowel);
	});

	$(".or").click(function(){
		event.preventDefault();
		userVowel = "or";
		console.log(userVowel);
		// alert("user picked OR and userVowel = " + userVowel);
		// return "or";
		verifyResponse(userVowel);
	});

	$(".ur").click(function(){
		event.preventDefault();
		userVowel = "ur";
		console.log(userVowel);
		// alert("user picked UR and userVowel = " + userVowel);
		// return "ur";
		verifyResponse(userVowel);
	});


// Check userResponse against computerResponse
function verifyResponse(userResponse){
	// alert("run");
	console.log("run");
	console.log(computerResponse);
	console.log(userResponse);

		//Checks to see if user's response is correct
		if(computerResponse === userResponse){
			console.log("correct");

			//Resets userVowel / user's response
			userVowel =  null;

			//Add point to score
			score = score + 1;
			$(".score").text(score);
			
			//Provide positive reinforcement
			$(".result").text("Nice Job!");
			console.log("nextWord=" + nextWord);
			
			//Hide buttons to prevent user from adding to score 
			$(".ar").hide();
			$(".er").hide();
			$(".ir").hide();
			$(".or").hide();
			$(".ur").hide();

			//Provides correctly spelled word
			changeFullSpelling(randomNum);

			//Show next word button
			$("#startGame").show();
		}

		//If user's response is incorrect
		else{
			console.log("Incorrect");

			
			//Provide words of encouragement
			$(".result").text("Try again!");
			console.log("nextWord=" + nextWord);

			//Hide next game button to force user to find correct answer
			$("#startGame").hide();
		}
}


// Get random number to select elements from imageArray and wordArray randomly
function getRandom() {
  return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
 }

// Pass in random number to display word from wordArray
function changeWord(indexNum){
	$(".wordClue").text(objArray[indexNum].spelling);
}

// Pass in random number to display full spelling of word from wordArray
function changeFullSpelling(indexNum){
	$(".wordClue").text(objArray[indexNum].fullSpelling);
}

// Pass in random number to display image from imageArray
function changeImage(indexNum){
	$(".imageClue").addClass(objArray[indexNum].imgName);
}

// Clear image from screen by removing previously added image from imageArray
function resetImage(indexNum){
	$(".imageClue").removeClass(objArray[indexNum].imgName);
}

// Figure out answer vowel
function changeAnswer(indexNum){
	correctAnswer = objArray[indexNum].answerVowel;
	// alert("Correct Answer = " + correctAnswer);
	return correctAnswer;
}



