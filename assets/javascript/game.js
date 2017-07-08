//computer generates word from array of words.
//depicts blanks for each letter
//number of turns left is also provided 
//user types in a letter to guess, computer replaces blanks with corresponding letter

var letters=["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words=["cat","dog","shit", "fuck","animal"];
var lettersGuessed=[];//array to hold all guesses made by user
var computerGuess = words[Math.floor(Math.random()*words.length)];
var wordLength = computerGuess.length;
var underscoreString = computerGuess.replace(/[a-zA-Z]/,"_");
var numGuesses=0;
var counter=0; //keep track if any letters worked
var dashArray=[];

//var html=document.getElementById("game");
//var dashWord=document.getElementById("word");


for (var i =0;i<computerGuess.length;i++) {
	dashArray.push("_");
	console.log(dashArray[i]);
}



document.onkeyup=function()
{
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	var numOfLetter=0;
	



	//push letters guessed into an array that appears on screen
	lettersGuessed.push(userguess);
	lettersGuessed.forEach(function(element){
		return element;
	//console.log(element);
	});
	
	

	// compares letters guessed with letters in the word 
	
	for (var i = wordLength - 1; i >= 0; i--) {
		if (computerGuess.charAt(i)==userguess){
			numOfLetter++;
			counter=1;
			dashArray[i]=userguess;
		} 
	}		
	if(counter==0){
		numGuesses++; 
		//alert("number of guesses: "+numGuesses);
		}

	
	


	//computer displays underscores coorelating to number of letters

	html="Type the letter you want to guess!"+"<p>"+"there are "+numOfLetter+" "+userguess+"'s"+"</p>";
	document.querySelector('#game').innerHTML = html;

	for(i=0;i<lettersGuessed.length;i++){
	 	var newDiv = document.createElement('div');
	 	game.appendChild(newDiv);
	 	newDiv.innerHTML=lettersGuessed[i];
	 	//shows letters guessed
	 }

	
	 for(i=0;i<dashArray.length;i++){
	 	var wordDiv = document.createElement('div');
	 	game.appendChild(wordDiv);
	 	wordDiv.innerHTML=dashArray[i];

	 }


	
}



	

	//send final info back to HTML so that it appears on screen 



