// http://codepen.io/anon/pen/olhCB?editors=001

//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here

String.prototype.reverse = function() {
  var arr = this.split('');
  arr.reverse();
  return arr.join('');
};

var palindromeNot = "tibbar";
console.log(palindromeNot.reverse());

var gimme = prompt("Gimme, gimme, gimme, \n gimme a string!");
alert(gimme.reverse());