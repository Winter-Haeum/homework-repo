const { isValidPassword } = require("./password.js");

describe("isValidPassword", () => {
  describe("정상 케이스", () => {
    test("모든 조건을 만족하면 true를 반환한다", () => {
      expect(isValidPassword("Password123!")).toBe(true);
    });
  });

  describe("실패케이스", () => {
    test("8자 미만이면 false를 반환한다", () => {
      expect(isValidPassword("Pass1")).toBe(false);
    });

    test("숫자가 없으면 false를 반환한다", () => {
      expect(isValidPassword("password")).toBe(false);
    });

    test("영문이 없으면 false를 반환한다", () => {
      expect(isValidPassword("12345678")).toBe(false);
    });

    test("특수문자가 없으면 false를 반환한다", () => {
      expect(isValidPassword("Password123")).toBe(false);
    });

    test("빈 문자열이 있으면 false를 반환한다", () => {
      expect(isValidPassword("")).toBe(false);
    });
  });
});
