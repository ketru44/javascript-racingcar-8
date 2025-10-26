import { parseByComma } from "../src/utils/parsing";

describe("유틸 함수 테스트", () => {
  test.each(([
    ["a,b,c", ["a", "b", "c"]],
    ["ab,cd,e,f ", ["ab", "cd", "e", "f"]],
    [" a , b, c,  d ", ["a", "b", "c", "d"]],
    ["a,b,,d", ["a", "b", "", "d"]]
  ]))("쉼표를 기준으로 문자열을 파싱해주는 parseByComma 테스트", (input, parsed) => {
    const parsingInput = parseByComma(input);
    expect(parsingInput).toStrictEqual(parsed);
  })
})