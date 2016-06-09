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

var objArray = [shark, spider, turtle, horse, squirrel, nerve, tiger, water, feather, scarf, harp, garden, heart, farm, church, nurse, curtain, purse, turkey, circle, shirt, stir, bird, girl, skirt, birthday, torch, sword, acorn, storm, forty];


//GLOBAL VARIABLES

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

var obj = null;

var currentQuestion = -1;

var numQuestions = 10;

var objTracker = new Array(numQuestions);


function main(){

	//Resets screen with intital welcome screen

	$(".ar").hide();
	$(".er").hide();
	$(".ir").hide();
	$(".or").hide();
	$(".ur").hide();

	$(".wordClue").hide();
	$(".imageClue").hide();
	$(".imageContainer").hide();
	$(".wordContainer").hide();
	$(".vowelContainer").attr('style',  'background-color:rgb(51, 51, 51)');
	$("body").attr('style',  'background-color:rgb(51, 51, 51)');
	$("header").attr('style',  'background-color:rgb(51, 51, 51)');
	$(".vowelContainer").addClass("monsters2");
	$(".playAgain").hide();

	obj=null;


	//User clicks to begin game
	$("#startGame").click(function(event){

	currentQuestion = currentQuestion + 1;
	console.log("currentQuestion: " + currentQuestion);

	$(".wordClue").show();
	$(".imageClue").show();
	$(".imageContainer").show();
	$(".wordContainer").show();
	$(".vowelContainer").attr('style',  'background-color:rgb(51, 51, 51)');
	$("body").attr('style',  'background-color:rgb(51, 51, 51)');
	$("header").attr('style',  'background-color:rgb(51, 51, 51)');
	$(".vowelContainer").removeClass("monsters2");


	// Hide monsters wallpaper
	$(".monsters").hide();

	// Listen for user's choice (of r-controlled vowels)
	userVowel = null;
	event.preventDefault();
	
		
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


		// Play sound hint when user clicks image
			obj = document.createElement("audio");
		    obj.src="https://ssl.gstatic.com/dictionary/static/sounds/de/0/" + objArray[randomNum].imgName +".mp3";
			obj.volume=0.4;
			obj.autoPlay=false;
		    obj.preLoad=true;       
		 
		$(".playSound").click(function() {
			obj.play();
		});
		
	});

}


// Game function that runs the game
function game(){

		//Remove any previous loaded images
		resetImage(randomNum);

		// previousRandomNum = randomNum;

		//Generate inital random number to choose random question
		// randomNum = getRandom();


		//Check if random number has already been called

		//Flags random number. If random number found, flag is on and will exit array scan
		var flag = 0;
		var dupNum = 0;

		while(flag === 0){
			randomNum = getRandom();
			console.log("randomNum: " + randomNum);
			dupNum = 0;
			
			for(i = 0; i < (currentQuestion+1); i++){
				//Stop scanning array
				if(randomNum === objTracker[i]){
					dupNum = 1;
					break;				
				}

			}

			if (dupNum === 0){
				flag = 1;
				objTracker[currentQuestion] = randomNum;
			}

		}

		
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
			if (score < numQuestions){
				if(randomNum > numQuestions){
					$(".result").text("Nice Job!");
				}
				else if(randomNum > 9 && randomNum < 20){
					$(".result").text("Awesome!");
				}
				else if(randomNum > 19 && randomNum < 30){
					$(".result").text("Bravo!");
				}
				else{
					$(".result").text("Hooray!");
				}

			}
			else{

				$(".result").text("Game Over!");
				$("#startGame").hide();
				$(".wordClue").hide();
				$(".imageClue").hide();
				// $(".imageContainer").attr('style',  'background-color:rgb(181, 215, 3)');
				// $(".wordContainer").attr('style',  'background-color:rgb(181, 215, 3)');
				$(".imageContainer").hide();
				$(".wordContainer").hide();
				$(".vowelContainer").attr('style',  'background-color:rgb(255, 197, 0)');
				$("body").attr('style',  'background-color:rgb(255, 197, 0)');
				$("header").attr('style',  'background-color:rgb(255, 197, 0)');
				$(".vowelContainer").addClass("monsters");
				$(".playAgain").show();

				// Play Cheering Sound
				var audio = document.getElementsByTagName("audio")[0];
				audio.play();
				

				// Reload the current page, without using the cache, on click "Play Again" button
				$(".playAgain").click(function(){
					document.location.reload(true);
				});
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
			if (score < numQuestions){
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







