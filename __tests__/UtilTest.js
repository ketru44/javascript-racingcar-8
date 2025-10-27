import { parseByComma } from "../src/utils/parsing";
import { validateCarNameRule } from "../src/utils/validator";

describe("유틸 함수 테스트", () => {
  test.each(([
    ["a,b,c", ["a", "b", "c"]],
    ["ab,cd,e,f ", ["ab", "cd", "e", "f"]],
    [" a , b, c,  d ", ["a", "b", "c", "d"]],
    ["a,b,,d", ["a", "b", "", "d"]]
  ]))("쉼표를 기준으로 문자열을 파싱해주는 parseByComma 테스트", (input, parsed) => {
    const parsingInput = parseByComma(input);
    expect(parsingInput).toStrictEqual(parsed);
  });

  test.each(([
    [["a", "aaaa", "bbbbbb"], "[ERROR] : 자동차 명은 5자 이하여야 합니다."],
    [["a", "a", "ab"], "[ERROR] : 중복된 이름을 사용할 수 없습니다."] 
  ]))("자동차명 검증 테스트", (carNameHasErr, errMsg) => {
    expect(() => validateCarNameRule(carNameHasErr)).toThrow(errMsg);
  })
})