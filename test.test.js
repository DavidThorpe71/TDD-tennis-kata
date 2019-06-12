class TennisScorer {
  constructor(scoreInput = "Love") {
    this.scoreInput = scoreInput;
  }
  score() {
    return `${this.scoreInput}-Love`;
  }
  wonPoint() {
    if (this.scoreInput === "Love") {
      return (this.scoreInput = "Fifteen");
    }
    return (this.scoreInput = "Thirty");
  }
}

describe("TennisScorer", () => {
  const tennisScorer = new TennisScorer();

  const expectScoreToEqual = expected => {
    const result = tennisScorer.score();
    expect(result).toEqual(expected);
  };

  it("can score a new game where no player has scored yet", () => {
    expectScoreToEqual("Love-Love");
  });

  it("can score a new game where player one has scored once", () => {
    tennisScorer.wonPoint();
    expectScoreToEqual("Fifteen-Love");
  });

  it("can score a new game where player one has scored twice", () => {
    tennisScorer.wonPoint();
    tennisScorer.wonPoint();
    expectScoreToEqual("Thirty-Love");
  });
});
