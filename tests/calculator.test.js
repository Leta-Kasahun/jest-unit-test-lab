import { add, subtract,multply, divide } from "../src/calculator.js";
// we  can use  only.describe  to  run only  that  test suit  and skip.descrip to  skip  that  test  suit
describe("Calculator functionality test suit", () => {
  test("adds test case one", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("subtracts test case one", () => {
    expect(subtract(10, 4)).toBe(6);
  });

   test("multply test case one", () => {
    expect(multply(2, 4)).toBe(8);
  });

   test("divide test  case one", () => {
    expect(divide(10, 2)).toBe(5);
  });
});