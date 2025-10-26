import { Console } from "@woowacourse/mission-utils";
import { parseByComma } from "./utils/parsing";

class App {
  async run() {
    const stringOfCarNamesUserRequest = await this.readInputAsyncUsingWoowaMissionApi("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)").split(",");
    const arrayOfCarNamesUserRequest = parseByComma(stringOfCarNamesUserRequest);
    const countOfLapUserRequest = await this.readInputAsyncUsingWoowaMissionApi("시도할 횟수는 몇 회인가요?");
  }
  async readInputAsyncUsingWoowaMissionApi(questionStr) {
    return await Console.readLineAsync(questionStr);
  }
}

export default App;
