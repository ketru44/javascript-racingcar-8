import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};


describe("woowacourse/mission-utils readLineAsync 입력 테스트", () => {
  test.each([
    ["경주할 자동차 이름을 입력해주세요.", "a,b,c"],
    ["경주할 자동차의 이름을 입력해주십쇼.","hihi, woowa, pre"],
    ["시도할 횟수는 몇 회인가요?", "5"]
  ])("입력값(자동차명 or 랩 수)가 정상적으로 처리되어 가져온다.", async (question, answer) => {
    mockQuestions([answer]);
    const app = new App();
    const userReply = await app.readInputAsyncUsingWoowaMissionApi(question);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(question);
    expect(userReply).toBe(answer);
  })
})