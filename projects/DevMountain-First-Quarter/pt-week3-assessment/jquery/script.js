$(document).ready( function (){

	var randomColor = function () {
		var num = Math.floor(Math.random() * (5 - 0) + 0);
		var color = ["#f00", "#00f", "#008000", "#ff0"];
		return (color[num]);
	};

	$('.button').click(function (){
		$('body').css("background", randomColor());
	});
});