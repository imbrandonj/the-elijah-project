/*
  answerEvent.js

  An answer event module
  This module is used between MathPath, LitPath, and LogicPath components

*/

export default function answerEvent(
  inputValue, // the user's given answer
  answer, // the correct answer
  correctTally, // total correct tally (state)
  setCorrectTally, // to set total correct tally (state)
  problemSet, // current problem set (state)
  setProblemSet // to increment the problem set (state) if correct >= 20
) {
  // correct user input:
  if (inputValue === answer) {
    console.log("correct");
    setCorrectTally(correctTally + 1); // increment total correct tally (state)
    // note:
    // correctTally does not increment until page re-render
    // thus, correctTally must be checked when correctTally == 19 & input is correct
    if (correctTally >= 19) {
      setProblemSet(problemSet + 1); // 20 correct answers increments to next problem set (state)
      setCorrectTally(0); // reset correct tally (state)
    }
  } // incorrect user input:
  else {
    console.log("try again");
    console.log(`Correct answer: ${answer}`);
    console.log(`Your given answer (inputValue): ${inputValue}`);
  }
}