
var giveItName = function (name, callback) {
	callback(name);
}

var alertName = function (name) {
  alert('Your name is ' + name);  
}

//Make the following function calls work
  giveItName('Sean', alertName);


var nums = [2,4,5,6];
//returns true if all items in the array are evens.

var areEvens = function(numArr, callback) {
    var allEvens = true;
    for (var i = 0; i < numArr.length; i++) {
        if (!callback(numArr[i])) {
            allEvens = false;
        }
    }
    return allEvens;
};

var isEven = function(item){
    return item % 2 === 0; 
};

console.log( areEvens(nums, isEven));




