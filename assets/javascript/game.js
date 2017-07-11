//computer generates word from array of words.
//depicts blanks for each letter
//number of turns left is also provided 
//user types in a letter to guess, computer replaces blanks with corresponding letter



var letters=["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words=["bubble","ocean","atlantic","seahorse","fish","coral","wave","lighthouse","shark","jellyfish","trash","turtle","sand"];
var lettersGuessed=[];//array to hold all guesses made by user
var computerGuess = words[Math.floor(Math.random()*words.length)];
var wordLength = computerGuess.length;
var numGuesses=0;
var counter=0; //keep track if any letters worked
var dashArray=[];
var lives=10;
var wins=0;



	

	document.addEventListener("DOMContentLoaded",function(event)
	{	
		gameElem=document.getElementById("guessedLetters");
		wordToGuessElem=document.getElementById("wordToGuess");
		livesElem=document.getElementById("lives");
		winElem =document.getElementById("wins");


		for(var i=0;i<computerGuess.length;i++){
			dashArray.push("_");
			var wordSpan = document.createElement('span');
			wordSpan.innerHTML=dashArray[i]+" ";
			wordToGuessElem.appendChild(wordSpan);
		}
		livesElem.innerHTML=lives;
		winElem.innerHTML=wins;
		
		
	});







document.onkeyup=function()
{	

	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	var numOfLetter=0;
	var letterQ=false;
	var guessedAlready=false;



	

	
	//push letters guessed into an array that appears on screen

	for(var a=0;a<lettersGuessed.length;a++){
				if(userguess==lettersGuessed[a]){
					guessedAlready=true;
					//alert("wow you already guessed "+userguess+". Try and be more original");	
				}	
	}

	for(var i=0;i<letters.length;i++){
		if(letters[i]==userguess)
		{	if(guessedAlready==false){	
				letterQ=true;
				lettersGuessed.push(userguess);
				lettersGuessed.forEach(function(element){
				return element;
				//console.log(element);
				});	
			}
		}
	}
	

	// compares letters guessed with letters in the word 
	
	for (var i = wordLength - 1; i >= 0; i--) {
		if (computerGuess.charAt(i)==userguess){
			numOfLetter++;
			counter=1;
			dashArray[i]=userguess;
		} 
	}		
	if(counter==0 && letterQ==true){
		numGuesses++; 
		lives--;
		//alert("number of guesses: "+numGuesses);
		}
	else 
		{counter=0;}

	

	//computer displays underscores coorelating to number of letters

	html="<p>Type the letter you want to guess!</p><p>Wins: "+wins+"</p> <p> Letters You have Guessed: </p>";
	document.querySelector('#game').innerHTML = html;


	for(i=0;i<lettersGuessed.length;i++){
	 	var newSpan = document.createElement('span');
	 	game.appendChild(newSpan);
	 	newSpan.innerHTML=lettersGuessed[i]+", ";
	 	//shows letters guessed
	 }
	 	var spaceDiv = document.createElement('div');
	 	game.appendChild(spaceDiv);
	 	spaceDiv.innerHTML="<br>Here is your word<br>";

	
	 for(i=0;i<dashArray.length;i++){
	 	var wordSpan = document.createElement('span');
	 	game.appendChild(wordSpan);
	 	wordSpan.innerHTML=dashArray[i]+" ";

	 }
	  var lifeDiv = document.createElement('div');
	  game.appendChild(lifeDiv);
	  lifeDiv.innerHTML="Guesses left: "+lives;

	 
	 
	 var complete=true;

	for(var i =0;i<dashArray.length;i++){
		if(dashArray[i]==="_"){
			 complete=false;
		} 
	}

	if(complete){
		wins++;
		// game.appendChild(spaceDiv);
	 // spaceDiv.innerHTML=computerGuess;
		alert("you have won! I can't believe it! Beaten by a human...You identfied the word '"+computerGuess+"'");
		alert("Push ENTER to play again.");
		reset();
		
}
	
	  if (lives===0){
	  	
	   // game.appendChild(spaceDiv);
	 	 // spaceDiv.innerHTML=computerGuess;
	 	alert("You have lost, the computer has surpassed the human at hangman! The word was '"+computerGuess+"'");
	 	alert("Push ENTER to play again.");
	 	reset();
		//html="<p>The Word was: "+computerGuess" </p><br>";
	 	//document.querySelector('#game').innerHTML = html;
	 	
	 	
	}	
}


	function reset(){
				
		lettersGuessed=[];//array to hold all guesses made by user
		computerGuess = words[Math.floor(Math.random()*words.length)];
		numGuesses=0;
		counter=0; //keep track if any letters worked
		dashArray=[];
		lives=10;
		computerGuess = words[Math.floor(Math.random()*words.length)];
		
	
		// gameElem=document.getElementById("guessedLetters");
		// wordToGuessElem=document.getElementById("wordToGuess");
		// livesElem=document.getElementById("lives");
		// winElem =document.getElementById("wins");

		for(var i=0;i<computerGuess.length;i++){
			dashArray.push("_");
			var wordSpan = document.createElement('span');
			wordSpan.innerHTML=dashArray[i]+" ";
			//wordToGuessElem.appendChild(wordSpan);
		}
		//livesElem.innerHTML=lives;
		//winElem.innerHTML=wins;

	}


