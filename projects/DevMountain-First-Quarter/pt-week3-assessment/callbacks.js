/* 
  Write a function called reverse that makes the code below work properly.
  The code below should log "The reversedString is .desrever teg dluohs sihT"
*/
var sentence = 'This should get reversed.'

var reverse = function (str, callback) {
	var arr = [];
  arr = str.split('');
	arr.reverse();
	callback (arr.join(''));
};

reverse(sentence, function(reversedString){
  console.log('The reversedString is ' + reversedString);
});