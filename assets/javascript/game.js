	//declared and initialized array alphabet
	//Created 

		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
		'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

		var wins = 0;
		var losses = 0;
		var guesses = 5;

		//randomLetter will chooses a random string from the array
		var randomLetter = alphabet[Math.floor(Math.random()* alphabet.length)];
		console.log(randomLetter);

		//When user click a letter function event will be called. It will check user input for a lower case string and compare user input to a random string from the array
		document.onkeyup = function(event) {

		var userInput = event.key;
		//if user input match random letter, will call function youWin, else will call function youLose
		if (userInput === randomLetter) {
			wins++;
			guesses = 5;
			stats();
			
		} else {
			losses--;

			guesses--;
			stats();

			if(guesses === 0) {
				alert("You have no more guesses.");
				alert("The computer's guess was " + randomLetter);
			}
			}
		};

		function stats() {
			document.write("Wins: " + wins + "<br>");
			document.write("Losses: " + losses + "<br>");
			document.write("Guesses Left: " + guesses);
		}
		
		stats();


	
	// var guessesMade = [];
	// guessesMade.push(userInput);
	// document.getElementById("guessesMade").innerHTML = "Your guesses so far: " + guessesMade;