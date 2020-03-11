const { ssColumn } = require("./spreadSheetColumn");

describe("It tests", () => {
  test("should return a string", () => {
    expect(typeof ssColumn(10)).toBe("string");
  });
  test("should return the right answer for cols under 26", () => {
    expect(ssColumn(1)).toBe("A");
    expect(ssColumn(13)).toBe("M");
    expect(ssColumn(13)).toBe("M");
  });
  test("should return the right answer for cols over 26", () => {
    expect(ssColumn(27)).toBe("AA");
    expect(ssColumn(28)).toBe("AB");
  });
});

//AA 27
//AB 28
//AC 29
//BA 53
