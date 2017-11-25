// Gobal variables
var wins = 0;
var losses = 0; 
var addition = 0;
var total = Math.floor(Math.random()* 100) + 1);
$(".total").empty();
$(".total".append(total);
var red = Math.floor(Math.random()* 10) + 1);
var blue = Math.floor(Math.random()* 10) +1);
var yellow = Math.floor(Math.random()* 10) +1);
var green = Math.floor(Math.random()* 10) +1);
var updateAddition = fucntion (){
	$(".addition").empty();
	$(".addition").append(addition);
	$("#wins").empty();
	$("#wins").append(wins);
	$("#losses").empty();
	$("#losses").append(losses);
}
var restart = function(){
	addition = 0;
	total = Math.floor(Math.random()* 100)+ 1);
	$(".total").empty();
	$(".total").append(total);
	red = Math.floor(Math.random()* 10) + 1);
	blue = Math.floor(Math.random()*10)+ 1);
	yellow = Math.floor(Math.random()*10) +1);
	green = Math.floor(Math.random()* 10) +1);
	updateAddition();
}
var logic = function(){
	if(addition == total) {
		wins = wins + 1;
		alert("Bravo You Win!");
		restart();
	}else if(addition > total){
		losses = losses + 1;
		alert("You Lost!");
		restart();
	}else{
		updateAddition();
	}
}
$(".addition").append(total);
$(".addition").append(addition);
$(document).ready(function(){
	$("#red").click(function(){
		addition = addition + red;
		logic();
	})
$("#blue").click(function(){
	addition = addition + blue;
	logic();
})
$("#yellow").click(function(){
	addition = addition + yellow;
	logic();
})
$("#green").click(function(){
	addition = addition + green;
	logic();
})
});
