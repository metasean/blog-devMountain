describe('First Functions', function(){
  it('should create a function returns the current year', function(){
    //Write a function called getYear that returns the current year

    function getYear() {
      var current = new Date();
      return current.getFullYear();
    };

    expect(getYear()).toBe(2014);
  });
  it('should create a function returns the current year and saves it', function(){
    //Write a function that returns the current year. Then call that function and save the returned value
    //to a variable called currentYearVar

    function getYear() {
      var current = new Date();
      return current.getFullYear();
    };

    var currentYearVar = getYear();

    expect(currentYearVar).toBe(2014);
  });
  it('should create a multiply function', function(){
    //Write a function called multiply that takes in two parametrs, multiplies them together, and returns the answer
    function multiply (x, y) {
      return x * y;
    }

    expect(multiply(2,4)).toBe(8);
  });
})

