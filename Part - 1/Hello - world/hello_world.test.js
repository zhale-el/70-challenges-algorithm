const helloWorld = require("./hello_world");

test("Returing'Hello world' as string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello world");
});
