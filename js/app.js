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

var nerve = {
	spelling: "n  _  _  v e",
	fullSpelling: "n e r v e",
	imgName: "nerve",
	answerVowel: "er"
};

var tiger = {
	spelling: "t i g  _  _  ",
	fullSpelling: "t i g e r",
	imgName: "tiger",
	answerVowel: "er"
};

var water = {
	spelling: "w a t  _  _  ",
	fullSpelling: "w a t e r",
	imgName: "water",
	answerVowel: "er"
};

var feather = {
	spelling: "f e a t h  _  _  ",
	fullSpelling: "f e a t h e r",
	imgName: "feather",
	answerVowel: "er"
};

var germs = {
	spelling: "g  _  _  m  s",
	fullSpelling: "g e r m s",
	imgName: "germs",
	answerVowel: "er"
};

var church = {
	spelling: "c h  _  _  c h",
	fullSpelling: "c h u r c h",
	imgName: "church",
	answerVowel: "ur"
};

var nurse = {
	spelling: "n  _  _  s  e",
	fullSpelling: "n u r s e",
	imgName: "nurse",
	answerVowel: "ur"
};

var purse = {
	spelling: "p  _   _  s e",
	fullSpelling: "p u r s e",
	imgName: "purse",
	answerVowel: "ur"
};

var turkey = {
	spelling: "t  _  _  k e y",
	fullSpelling: "t u r k e y",
	imgName: "turkey",
	answerVowel: "ur"
};

var curtain = {
	spelling: "c  _  _  t a i n",
	fullSpelling: "c u r t a i n",
	imgName: "curtain",
	answerVowel: "ur"
};

var scarf = {
	spelling: "s c  _  _  f",
	fullSpelling: "s c a r f",
	imgName: "scarf",
	answerVowel: "ar"
};

var harp = {
	spelling: "h  _  _  p",
	fullSpelling: "h a r p",
	imgName: "harp",
	answerVowel: "ar"
};

var garden = {
	spelling: "g  _  _  d e n",
	fullSpelling: "g a r d e n",
	imgName: "garden",
	answerVowel: "ar"
};

var heart = {
	spelling: "h e  _  _  t",
	fullSpelling: "h e a r t",
	imgName: "heart",
	answerVowel: "ar"
};

var marbles = {
	spelling: "m  _  _  b l e s",
	fullSpelling: "m a r b l e s",
	imgName: "marbles",
	answerVowel: "ar"
};

var farm = {
	spelling: "f  _  _  m",
	fullSpelling: "f a r m",
	imgName: "farm",
	answerVowel: "ar"
};

var circle = {
	spelling: "c  _  _  c l e",
	fullSpelling: "c i r c l e",
	imgName: "circle",
	answerVowel: "ir"
};

var shirt = {
	spelling: "s h  _  _  t",
	fullSpelling: "s h i r t",
	imgName: "shirt",
	answerVowel: "ir"
};


var stir = {
	spelling: "s t  _  _  ",
	fullSpelling: "s t i r",
	imgName: "stir",
	answerVowel: "ir"
};

var bird = {
	spelling: "b  _  _  d",
	fullSpelling: "b i r d",
	imgName: "bird",
	answerVowel: "ir"
};

var girl = {
	spelling: "g  _  _  l",
	fullSpelling: "g i r l",
	imgName: "girl",
	answerVowel: "ir"
};

var skirt = {
	spelling: "s k  _  _  t",
	fullSpelling: "s k i r t",
	imgName: "skirt",
	answerVowel: "ir"
};

var birthday = {
	spelling: "b  _  _  t h d a y",
	fullSpelling: "b i r t h d a y",
	imgName: "birthday",
	answerVowel: "ir"
};

var torch = {
	spelling: "t  _  _  c h",
	fullSpelling: "t o r c h",
	imgName: "torch",
	answerVowel: "or"
};

var sword = {
	spelling: "s w  _  _  d",
	fullSpelling: "s w o r d",
	imgName: "sword",
	answerVowel: "or"
};

var acorn = {
	spelling: "a c  _  _  n",
	fullSpelling: "a c o r n",
	imgName: "acorn",
	answerVowel: "or"
};

var storm = {
	spelling: "s t  _  _  m",
	fullSpelling: "s t o r m",
	imgName: "storm",
	answerVowel: "or"
};

var forty = {
	spelling: "f  _  _  t y",
	fullSpelling: "f o r t y",
	imgName: "forty",
	answerVowel: "or"
};

var objArray = [shark, spider, turtle, horse, squirrel, nerve, tiger, water, feather, germs, scarf, harp, garden, heart, marbles, farm, church, nurse, curtain, purse, turkey, circle, shirt, stir, bird, girl, skirt, birthday, torch, sword, acorn, storm, forty];

//Variable to store random array element number
var randomNum = 0;

//Variable to story userVowel
var userVowel;

var computerAnswer;

var computerResponse;

// var userResponse;

var correctAnswer;

var score = 0;

var nextWord = "true";

// var counter = 0;

var previousRandomNum;

function main(){

	$(".ar").hide();
	$(".er").hide();
	$(".ir").hide();
	$(".or").hide();
	$(".ur").hide();

	$(".wordClue").hide();
	$(".imageClue").hide();
	$(".imageContainer").hide();
	$(".wordContainer").hide();
	$(".vowelContainer").attr('style',  'background-color:rgb(0, 207, 206)');
	$("body").attr('style',  'background-color:rgb(0, 207, 206)');
	$("header").attr('style',  'background-color:rgb(0, 207, 206)');
	$(".vowelContainer").addClass("monsters2");


	//User clicks to begin game
	$("#startGame").click(function(event){


	$(".wordClue").show();
	$(".imageClue").show();
	$(".imageContainer").show();
	$(".wordContainer").show();
	$(".vowelContainer").attr('style',  'background-color:rgb(51, 51, 51)');
	$("body").attr('style',  'background-color:rgb(51, 51, 51)');
	$("header").attr('style',  'background-color:rgb(51, 51, 51)');
	$(".vowelContainer").removeClass("monsters2");

// \
		$(".monsters").hide();
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

		previousRandomNum = randomNum;

		//Generate random number to choose random question
		randomNum = getRandom();

		if (previousRandomNum === randomNum){
			randomNum = getRandom();
		}

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
			if (score < 10){
				$(".result").text("Nice Job!");
			}
			else{
				$(".result").text("GAME OVER!");
				$("#startGame").hide();
				$(".wordClue").hide();
				$(".imageClue").hide();
				// $(".imageContainer").attr('style',  'background-color:rgb(181, 215, 3)');
				// $(".wordContainer").attr('style',  'background-color:rgb(181, 215, 3)');
				$(".imageContainer").hide();
				$(".wordContainer").hide();
				$(".vowelContainer").attr('style',  'background-color:rgb(181, 215, 3)');
				$("body").attr('style',  'background-color:rgb(181, 215, 3)');
				$("header").attr('style',  'background-color:rgb(181, 215, 3)');
				$(".vowelContainer").addClass("monsters");
			}





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
			if (score < 10){
				$("#startGame").show();
			}
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
  return Math.floor(Math.random() * ((objArray.length - 1) - 0 + 1)) + 0;
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



