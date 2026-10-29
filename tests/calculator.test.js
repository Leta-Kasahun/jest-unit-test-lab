import { add, subtract } from "../src/calculator.js";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });
});