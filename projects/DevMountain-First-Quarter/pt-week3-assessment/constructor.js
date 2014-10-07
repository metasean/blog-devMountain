/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/

    //code here
    var person = function(name, age) {
    	var personObject;
    	person.name = name;
    	person.age = age;
    	return personObject; 
    };

/* Call your function twice creating to different objects */


    //code here
    var mal = person("Mal Reynolds", 35);
    var kaylee = person("Kaylee", 23);

/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype? */

   //Explain your answer here
   /*  because the objects were created directly as functions, there's no inheritance  */


/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */

    //code here
    var Person = function(name, age) {
    	this.name = name;
    	this.age = name;
    }

/* Add a property called sayAge to the Person's prototype which says that instances name */

    //code here
    Person.prototype.sayAge = function () {
    	alert(this.name);
    };

/* Create two instances of Person and call sayAge with one of those instances. */
	var jayne = new Person("Jayne", 30);
	var inara = new Person("Inara", 28);

	inara.sayAge();