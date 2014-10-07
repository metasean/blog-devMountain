//create an array called family which has your family members in order of their age
var family = [];
family[0] = "Ernest";
family[1] = "Cathrine";
family[2] = "Sean";
family[3] = "Ernest";
console.log(family);

//Remove the oldest member of your family
family.shift();
console.log(family);

//Add a new family member as the youngest member
family.push("Sandy");
console.log(family);

//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')
tylerFlag = false;

for (var i = 0; i < family.length; i++) {
    if (family[i] == 'Tyler') {
        alert ('I have a Tyler');
        tylerFlag = true;
        break;
    } 
}
if (!tylerFlag) {
    alert ('I have no Tylers');
}


// Remove the second oldest member of your family

family.splice(1, 1)
console.log(family);



//Write a function called 'reverse' that takes in a string and returns that string in reverse order

  //Function definition here

    var reverse = function(string) {
        var arr = string.split('');
        arr.reverse();
        return arr.join('');
    };

  //Call the function here
    console.log(reverse("Sean"));
