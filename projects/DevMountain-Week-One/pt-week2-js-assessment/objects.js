//Create a object called User which has the following properties
//username, email, password, birthday

var user = {
  		username: 'Tyler',
        email: 'tyler@southpark.com',
        password: 'kenny',
        birthday: '17/4/90'
};


//edit the username to be 'js_slinger'
  
  //code here

user.username = 'js_slinger';
console.log(user.username);



//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

  // code here
user.favoriteBook = 'Mike Tyson learns to Whistle';
console.log(user.favoriteBook);

//Remove the password property from your object
  
delete user.password;
console.log(user.password);

//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

  // code here 

var values = [];
for (key in user) {
    values.push(user[key]);
}
console.log (values);
    
    
    
    
    
    