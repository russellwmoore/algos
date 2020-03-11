const { balanced } = require("./brackets");

describe("Balanced Brackets", () => {
  test("should return a boolean", () => {
    expect(typeof balanced("(())")).toBe("boolean");
  });

  test("should return true for balanced brackets", () => {
    expect(balanced("()")).toBe(true);
    expect(balanced("()()")).toBe(true);
    expect(balanced("()((()()))")).toBe(true);
  });

  test("should return false for unbalanced brackets", () => {
    expect(balanced("(")).toBe(false);
    expect(balanced(")(")).toBe(false);
    expect(balanced("()()()()())")).toBe(false);
  });
});
