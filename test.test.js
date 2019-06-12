class TennisScorer {
  constructor(scoreInput = "Love") {
    this.scoreInput = scoreInput;
  }
  score() {
    return `${this.scoreInput}-Love`;
  }

  wonPoint() {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return (this.scoreInput = scores[scores.indexOf(this.scoreInput) + 1]);
  }
}

describe("TennisScorer", () => {
  const expectScoreToEqual = (tennisScorer, expected) => {
    const result = tennisScorer.score();
    expect(result).toEqual(expected);
  };

  it("can score a new game where no player has scored yet", () => {
    const tennisScorer = new TennisScorer();
    expectScoreToEqual(tennisScorer, "Love-Love");
  });

  it("can score a new game where player one has scored once", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.wonPoint();
    expectScoreToEqual(tennisScorer, "Fifteen-Love");
  });

  it("can score a new game where player one has scored twice", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.wonPoint();
    tennisScorer.wonPoint();
    expectScoreToEqual(tennisScorer, "Thirty-Love");
  });

  it("can score a new game where player one has scored three times", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.wonPoint();
    tennisScorer.wonPoint();
    tennisScorer.wonPoint();
    expectScoreToEqual(tennisScorer, "Forty-Love");
  });
});
