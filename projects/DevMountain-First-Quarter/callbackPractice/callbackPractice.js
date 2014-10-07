/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first

  //http://codepen.io/anon/pen/KnhtH?editors=001

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];



var first = function(names, callback){
  callback(names[0]);
}



first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

  //http://codepen.io/anon/pen/LzDnJ

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(names, callback) {
  callback(names[names.length - 1]);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

  //http://codepen.io/anon/pen/ofuzx?editors=001

var multiply = function(num1, num2, callback) {
  callback(num1 * num2);
  
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

  // http://codepen.io/anon/pen/aHkGz?editors=001

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var contains = function(arr, name, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == name) {
      console.log(callback(true));
      break;
    }
  }
};

debugger;
contains(names, 'Colt', function(yes){
  if(yes === true){
    return 'Colt is in the array';
  } else {
    return 'Colt is not in the array';
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

    // http://codepen.io/anon/pen/iAHmo?editors=001

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, callback) {
    var newArr = [];
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < newArr.length; j++) {
            if (arr[i] == newArr[j]) {
                debugger;
                flag = true;
                break;
            }
        }
        if (flag == false) {
            newArr.push(arr[i]);
        } else {
            flag = false;
        }
    }
    callback(newArr);
};


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    // http://codepen.io/anon/pen/vqwfc?editors=001

    

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var each = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 //http://codepen.io/anon/pen/smzhC?editors=001

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
  
var getUserById = function(id, callback) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      callback(users[i]);
    }
  }
};

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

