var user = {
	win: 0,
	level: 0,
	movement: function (user) {
	if (user == true) {
		this.win +=1;
		this.level +=1;
		if (this.level == 10) {
			alert("You win the game!");
		}
	}
	else if (user == false) {
		user.win -=1;
		user.level -=1;
	}
}
}

var challenger = {
	win: 0,
	level: 0,
	comp_movement: function(comp) {
		if (comp == true) {
			this.win +=1;
			this.level +=1;
			if (this.level == 10) {
				alert("You lose the game!");
			}
		}
	}
}

var choice = prompt("Type in rock paper or scissors");





function rock_paper_scissors() { // random rock paper scissors generator for user to compete against
	var results = undefined;
	var challengers_choice = Math.floor(Math.random() * (4 - 1)) + 1; //setting up a variable to produce three different values, 1,2 or 3 which is equivalent to rock paper or scissors
	if (challengers_choice == 1) {
		results = "rock";
	}
	else if (challengers_choice == 2) {
		results = "paper";
	}
	else {
		results = "scissors";
	}
	return results; //returning rock paper or scissors
}

function rules(user_choice, computer_choice) { //setting the rules of the game
	if (user_choice == computer_choice) {
		alert("It's a tie! Try again");
	}
	else if (user_choice == "rock" && computer_choice == "paper") {
		alert("You lose!");
		return false;
	}
	else if (user_choice == "paper" && computer_choice == "scissors") {
		alert("You lose!");
		return false;
	}
	else if (user_choice == "scissors" && computer_choice == "rock") {
		alert("You lose!");
		return false;
	}
	else {
		alert("You win!");
		return true;
	}
}



//user.movement(rules(choice, rock_paper_scissors()));



var play = function() {
	while ((user.level < 10) && (challenger.level < 10)) {
		user.movement(rules(choice, rock_paper_scissors()));
		challenger.comp_movement(Math.random() >=0.5);
		alert("You are on level " + user.level + ". You have a total of " + user.win + "." + "Your challenger is on level " + challenger.level + ". ");
	}
}

play();
