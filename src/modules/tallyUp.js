/*
  tallyUp.js

  1) Increments the correct tally
  2) If tally reaches `totalQuestions`, sets `LevelUpEvent` to true
*/

export default function tallyUp(
  totalQuestions, // question count
  correctTally, // total correct tally (state)
  setCorrectTally, // to set total correct tally (state)
  setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender
) {
  setCorrectTally(correctTally + 1); // increment total correct tally (state)
  // note:
  // correctTally does not increment until component re-render
  // thus, correctTally must be checked when correctTally == totalQuestions - 1 & input is correct
  if (correctTally === totalQuestions - 1) {
    setLevelUpEvent(true);
  }
}
