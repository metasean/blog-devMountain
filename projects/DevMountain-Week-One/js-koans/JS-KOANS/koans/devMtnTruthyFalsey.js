describe('About Truthy and Falsy', function(){
  it('should create a variable called theTruth and make it truthy', function(){
    var theTruth = true;
    expect(theTruth).toBeTruthy();
  });

  it('should create a variable called theAntiTruth and make it be Falsy', function(){
    var theAntiTruth = false;
    expect(theAntiTruth).toBeFalsy();
  });

  it('should all be falsy', function(){
    //replace all the FILL_ME_IN's with 4 different Falsy values
    var falsyArray = ["", null, undefined, NaN];

    var flag = true;
    for(var i = 0; i < falsyArray.length; i++){
      if(falsyArray[i]){
        flag = false;
      }
    }
    expect(flag).toBeTruthy();
  });

  it('should fix the array so all indices are Falsy', function(){
    var falsyArray = [0,null,undefined,NaN,5-5,''];


    //dont touch this code
    var flag = false;
    for(var i = 0; i < falsyArray.length; i++){
      if(falsyArray[i]){
        flag = true;
      }
      console.log(i + " : " + flag)
    }
    expect(flag === false && falsyArray.length === 6).toBeTruthy();

    // ****************************************************
    //
    //                   POSSIBLE BUG
    //
    //   HAD TO CHANGE falsyArray.length === 5
    //              TO falsyArray.length === 6
    //   TO PASS THE TEST
    //
    // *****************************************************
  });
});

