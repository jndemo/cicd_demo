const addTwoNumbers = require('./index.js');

//add 2 numbers
  //should return the sum of a and b
  //test('describe the test', the test itself)
  test("should return the sum of 2 numbers a and b", () => {
    expect(addTwoNumbers(1,2)).toBe(3)
  });
