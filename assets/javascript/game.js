/*	
random number is chosen & displayed as target score (game)

random hidden values are assigned to d20 dice buttons (game)

user clicks on a die (player)

current score is increased by value of d20 (game)

game checks to see if current score is <, =, or > target score (game)

if current score is < target score, player can click on another die (game)
if current score is > target score, display lose message and increase losses by +1 (game)
if current score is = target score, display win message and increase wins by +1 (game)

game resets itself after win or lose and repeats (game)
*/

var wins = 0;
var losses = 0;
var minTarget = 19;
var maxTarget = 120;
var minD20 = 1;
var maxD20 = 12;
var randomNumber = "";

$(document).ready(function (){
function initialize() {
	 randomNumber = Math.floor(Math.random() * ((maxTarget - minTarget + 1)) + minTarget);
	$("#targetScore").text(randomNumber);
	console.log(randomNumber);
}

initialize();

var counter = 0;
var randomD20 = [10, 5, 3, 7]
for (var i = 0; i < randomD20.length; i++) {
	var d20image = $("<img>");
	d20image.addClass("d20");
	d20image.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51Hfahqhp6L._SY300_.jpg");
	d20image.attr("data-d20value", randomD20[i]);
	$("#d20s").append(d20image);
}

$(".d20").on("click", function() {

	var d20value = ($(this).attr("data-d20value"));
	d20value = parseInt(d20value);
	counter += d20value;

	$("#currentScore").text(counter);

	if (counter === randomNumber) {
		alert("You win!");
		wins++;
		$("#wins").text(wins);
	}
	else if (counter >= randomNumber) {
		alert("You lose!!");
		losses++;
		$("#losses").text(losses);
	}
});

});



