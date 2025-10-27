import { runEntireRace } from "../src/domains/race";
describe("레이스 진행 도메인 테스트", () => {
  test.each([
    [["a", "b", "c"], 2, [4, 1, 2, 9, 0, 4], [[1, 0, 1], [1, 0, 2]]],
    [["red", "blue", "black"], 3, [5, 2, 4, 9, 5, 9, 9, 4, 6], [[1, 1, 1], [2, 2, 2], [3, 2, 3]]]
  ])("", (carnames, laps, randomTape, raceHistory) => {
    const result = runEntireRace(carnames, laps, randomTape);
    expect(result).toStrictEqual(raceHistory);
  })
})