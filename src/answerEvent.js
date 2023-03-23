/*
  answerEvent.js

  A check answer event
  This module is used between MathPath, LitPath, and LogicPath components

*/

export default function answerEvent(
  event, // enter keydown event
  inputValue, // the user's given answer
  answer, // the correct answer
  correctTally, // total correct tally (state)
  setCorrectTally, // to set total correct tally (state)
  problemSet, // current problem set (state)
  setProblemSet // to increment the problem set (state) if correct >= 20
) {
  if (inputValue === answer) {
    console.log("correct");
    setCorrectTally(correctTally + 1); // increment total correct tally (state)

    if (correctTally >= 20) {
      setProblemSet(problemSet + 1); // 20 correct answers increments to next problem set (state)
      setCorrectTally(0); // reset correct tally (state)
    }
  } else {
    console.log("try again");
    console.log(`Correct answer: ${answer}`);
    console.log(`Your given answer (inputValue): ${inputValue}`);
  }
}
