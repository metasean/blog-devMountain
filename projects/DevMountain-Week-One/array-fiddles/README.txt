Array Fiddles
==========================

* **first**: http://jsfiddle.net/zsFvE/

```
var arr = [1,2,3];

//create a function named 'first' that returns the first object from a given array

var first = function() {
    return arr[0];
}

//alert the result of your function
alert(first());
```

* **last**: http://jsfiddle.net/hJZUE/

```
var arr = [1,2,3];

//create a function named 'last' that returns the last object from a given array

var last = function() {
    return arr[arr.length-1];
}

//alert the result of your function
alert(last());

```
* **add** items: http://jsfiddle.net/FD7jQ/

//Fix 'arr' below so that it's an array full of integers from 0-10
var arr = [0,1,4,5,7,8,10];

arr.splice(2,0,[2,3]);
arr.splice(5,0,6);
arr.splice(8,0,9);

var newarr = arr.join();

alert(newarr);


* **first** loop http://jsfiddle.net/YM7th/

//Alert every item in arr.
var arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}


* **backwards** http://jsfiddle.net/5QgwK/

//Loop through arr in reverse alerting every item
var arr = [1,2,3,4,5]; //should alert 5 then 4 then 3 etc.

//Alert every item in arr.
arr.reverse();

for(var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}

* **evens** http://jsfiddle.net/7fseh/

//Loop through arr removing all values that aren't even 
//hint x % 2 --> checks for even numbers
var arr = [1,2,3,6,22,98,45,23,22,12];

for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 !== 0) {
        arr.splice(i,1);
    }
}

var arrString = arr.join();
alert(arrString);


* **evens and odds** http://jsfiddle.net/4zfcz/

//Write a loop that loops through nums, if the item is even, it adds it to the evens array, if the item is odd, it adds it to the odds array.
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

for (var i = 0; i < nums.length; i++) {
    if (nums[i]%2 == 0) {
        evens.push(nums[i]);
    } else {
        odds.push(nums[i]);
    }
}

console.log("evens are: " + evens);
console.log("odds are : " + odds);


* **Flag** http://jsfiddle.net/j95XA/

//below your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};

var arr = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

//code here

var random = getRandomArbitrary();
var flag = false;

for (var i = 0; i < arr.length; i++)   {
    if (arr[i] == random) {
        alert (random + " is in the array");
        flag = true;
        break;
    }
}

if (flag === false) {
    alert (random + " is not in the array");
} 



* **reverse** http://jsfiddle.net/QqrLs/

//Write a function called reverse that takes in a string ('str') and returns that string after it's been reversed

var str = 'this is my sentence';

var arr = [];
arr = str.split("");
console.log(arr);


//reverse(str) --> "ecnetnes ym si siht"
arr.reverse();
var newstr = arr.join("");

alert(newstr);


* **groceryList**  http://jsfiddle.net/2Lt4m/1/

//Here we're going to write a function that mimics going shopping and checking things off of our grocery list, and adding new items to our list. Write a function that takes a single paramters, loops through our grocery list, if the parameter (or the thing you passed in) matches an item in myGroceryList, remove that item from the list. Once you do that, write another function that accepts a  single parameter and adds that parameter to the list.

var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];


//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];

var removeItem = function(item) {
    for (var i = 0; i < myGroceryList.length; i++) {
        if (myGroceryList[i] == item) {
            myGroceryList.splice(i, 1);
            break;
        }
    }
}

var addItem = function(item) {
    myGroceryList.push(item);
}

removeItem('chips');
addItem('jerky');
console.log(myGroceryList);


* **copyAndAdd** http://jsfiddle.net/nm5Q7/

//Create a copy of firstArray and save it into secondArray. Then, add 6 and 7 to the end of first array. When you run this firstArray should be just [1,2,3,4,5] and secondArray will be [1,2,3,4,5,6,7] if you created your copy correctly.

var firstArray = [1,2,3,4,5];
var secondArray = firstArray.slice(0, firstArray.length);


secondArray.push(6, 7);

alert(firstArray) //[1,2,3,4,5];
alert(secondArray) //[1,2,3,4,5,6,7];


* **compact:** http://jsfiddle.net/kcmLh/

#### Not Working

var arr = [1,0,null,2,'false',undefined,NaN,1+1,5-5,'undefined', 'asdf',''];

//create a function named 'compact' that returns the array but with all "falsy" values removed

var compact = function() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arr.splice(i, 1);    
        }
    }
}


//alert the result of your function

alert(arr);

If you finish all the fiddes, do the 'aboutArrays' section of the Koans here https://github.com/devmountain/js-koans
