const calculator = require("./calculator");

test("performing arithmetic operations using the calculator function", () => {
  //Test case inputs
  const num1 = 3;
  const num2 = 7;

  //Addition
  expect(calculator(num1, num2, "+")).toBe(10);

  //Subtraction
  expect(calculator(num1, num2, "-")).toBe(-4);

  //Multiplication
  expect(calculator(num1, num2, "*")).toBe(21);

  //Division
  expect(calculator(num1, num2, "/")).toBeCloseTo(0.4285);

  //Invalid operator
  expect(() => calculator(num1, num2, "~").toThrow("invalid operator"));
});
