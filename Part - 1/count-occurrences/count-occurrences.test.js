const countOccurrences = require("./count-occurrences");

test("Count occurrencesof a charactore", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
});
