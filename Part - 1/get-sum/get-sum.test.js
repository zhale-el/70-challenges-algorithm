const getSum = require("./get-sum");

test("Calculating the sum of two numbers", () => {
  //Test inputs
  const num1 = 3;
  const num2 = 6;

  //call the function
  const result = getSum(num1, num2);

  //check if the result is equal the expected sum

  expect(result).toBe(9);
});
