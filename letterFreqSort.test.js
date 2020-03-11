const { letterFreqSort } = require("./letterFreqSort");

describe("Letter Freq Sort", () => {
  test("should return an array", () => {
    expect(Array.isArray(letterFreqSort("abcd"))).toBe(true);
  });
  test("should return an empty array for an empty string", () => {
    expect(letterFreqSort("")).toEqual([]);
  });
  test("should return an array empty array for an empty string", () => {
    expect(letterFreqSort("")).toEqual([]);
  });

  test("should return a sorted array by frequency in string", () => {
    expect(letterFreqSort("baadddcccc")).toEqual(["c", "d", "a", "b"]);
    expect(letterFreqSort("IIIIIIIIIIIIIIIIIIIIIIII")).toEqual(["I"]);
    const chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  });
});
