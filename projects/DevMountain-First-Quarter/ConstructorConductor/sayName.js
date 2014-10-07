// http://codepen.io/anon/pen/mjakg?editors=001

//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

var Person = function (name, age) {
  this.name = name;
  this.age = age;
};


//Now create three instances of Person with data you make up

  //code here

var mal = new Person("Mal", "30");
var kaylee = new Person("Kaylee", "23");
var jayne = new Person("Jayne", "32");


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
  alert(this.name);
};

jayne.sayName();

