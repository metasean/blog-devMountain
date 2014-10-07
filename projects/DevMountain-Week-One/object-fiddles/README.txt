Object Fiddles
==============
* **meObject** http://jsfiddle.net/5Ua3r/

//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

//code here

var me = {}

me.name = "Sean";
me.age = "old";

alert(me.name);


* **favoriteThings** http://jsfiddle.net/zCcnT/

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

//Replace this with your code.

var favoriteThings = {
    band: "Toby",
    food: "chocolate",
    person: "Marty McFly",
    book: "Prodigal Daughter",
    movie: "Serenity",
    holiday: "Winter Break"
}




//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

//Replace this with your code.
favoriteThings.car = "Saturn";
favoriteThings.brand = "apple";



//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

//Replace this with your code.

favoriteThings.food = "lettuce";
favoriteThings.book = "50 Shades of Gray";


//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



* **backPack** http://jsfiddle.net/FAKH4/

//Create an empty Object called backPack. Now, create a variable called 'item' and set it equal to firstPocket. Now, using bracket notation, add whatever 'item' represents as a property (or key) on the backPack object and set it's value equal to 'chapstick'. Now using dot notation add a key (or property) to your backPack object that is named color, with the value being the color of your backpack. 

//Replace this with your code.

var backPack = {};
backPack.item = "firstPocket";
backPack["item"] = "chapstick";
backPack.color = "black";





//After you do the above, alert your entire backPack object.

//Replace this with your code, then click 'Run'.
console.log(backPack);
for (key in backPack) {
    alert(key + ": " + backPack[key]);
}


//You probably noticed that it just alerted [Object Object]. Alerting to see the data in your Object doesn't work so well. Instead, console.log your whole backPack object and then check out the console.



//Replace this with your code, then click 'Run'.



* **firstLoop** http://jsfiddle.net/Lgf3G/

//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

//Replace this with your code.

var me = {};
me.name = "Sean";
me.age = "old";
me.height = "short";
me.gender = "dude";
me.married = "not";
me.eyeColor = "chocolate";
me.hairColor = "boring";



//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (key in me) {
    alert(me[key]);
}



* **album** http://jsfiddle.net/FP5PL/

//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song. 

//Replace this with your code.

var album = {};

album.rockin = "3:60";
album.rollin = "2:40";
album.fishin = "9:42";
album.smokin = "1:55";
album.bowlin = "4:20";


//Now, loop through your album object alerting every song title individually.

//Replace this with your code.

for (key in album) {
    alert(key);
}


* **ifInObj** http://jsfiddle.net/HLGZU/

//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate). 

//Replace this with your code

var states = {
    va: 5667890,
    al: 456789,
    sc: 98765,
    nc: 234567,
    ca: 09765
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.
    
for (state in states) {
    if (states[state] > 30000) {
        alert(state);
    }
}
    
    

//Reaplce this with your code.



* **userObj** http://jsfiddle.net/VkvMV/

var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

//Replace with code

for (key in user) {
    if (!user[key]) {
        delete user[key];
    }
}
console.log(user);


//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

//Replace with Code



//Now console.log your object and make sure it looks right.




* **anotherUserObj** http://jsfiddle.net/47SUN/

var user = {
        name: 'Tyler McGinnis', 
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};

//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

//Replace this with your code.
user.name = "Tyler S.McGinnis";
user.email = "tyler.mcginnis@devmounta.in";


//Now call the sayName method that's on the user object which will alert the users email

user.sayName();



* **firstMethod** http://jsfiddle.net/eGyLD/

//create an empty object called methodCollection. 

//Replace with your code.
var methodCollection = {};


//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

//Replace with your code.
methodCollection.alertHello = function () {
    alert("hello");
}

methodCollection.logHello = function() {
    console.log("hello");
}


//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.consoleHello();



* **theSquad** http://jsfiddle.net/j9rdQ/


var devMountainEmployees = [];

var tyler = {
    name: 'Tyler', 
    position: 'Lead Instructor/Engineer', 
    spiritAnimal: 'Honey Badger'    
};

var cahlan = {
    name: 'Cahlan', 
    position: 'CEO', 
    spiritAnimal: 'butterfly'    
};

var ryan = {
    name: 'Ryan', 
    position: 'Marketing', 
    spiritAnimal: 'fox'    
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

//Above you're given an empty array with four objects. Fill the devMountainEmployees array with those four objects. After that console.log the length of the Array and make sure that it's equal to 4.

//your code here

devMountainEmployees.push(tyler, cahlan, ryan, colt);
console.log(devMountainEmployees.length);

//Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'. Loop through your devMountainEmployees until you find cahlan, then remove him from the array.

//your code here
for (var i = 0; i < devMountainEmployees.length; i++) {
    if (devMountainEmployees[i].name == "Cahlan") {
        devMountainEmployees.splice(i, 1);
    }
}


//Now console.log your final array and make sure that it's correct.
    
console.log(devMountainEmployees);


* **deepBreathe** http://jsfiddle.net/suH42/24/

//Now we're going to combine what we've learned today (objects) with what we learned yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise. Let's think back to our itunes example (tylermcginnis.com/itunes). Notice that when you type in an artist name, iTunes gives us back a LOT of data. What they're really giving us is an Array full of Objects. It probably looks something like this. 

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



//A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of Data is to have an Array full of objects. 



//Create an empty array called users.

//Your Code Here

var users = [];

//Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.

var user4 = {
    name: "Lame Dave", 
    email: "lame.dave@ka.com",
    password: "abc",
    username: "lameDave"
}
var user3 = {
    name: "Saucy Sally", 
    email: "saucy.sally@ka.com",
    password: "998",
    username: "saucySally"
}
var user2 = {
    name: "Random Randy", 
    email: "random.randy@kay.com",
    password: "5678",
    username: "randomRandy"
}

//include this object as one of your indices in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

//Your Code Here

users.push(user1, user2, user3, user4);
console.log(users);

array = [1,2,42];
console.log(array);

//Now you have a very common data structure. Twitter is a good use case. It's easy to imagine that your followers list on Twitter is an Array full or objects and those objects contain properties about the specific person you follow.


//Now let's say that Tyler decided to delete his account. Loop through your array of objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him). Once you find the particular indice he's located in, delete him from the array.

//Your code here

for (var i = 0; i < users.length; i++) {
 
    if (users[i].email == 'tylermcginnis33@gmail.com') {
        users.splice(i, 1);
    }
}


//The activity we just did is very much how data works in 'the real world'.


