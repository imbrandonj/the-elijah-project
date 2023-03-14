/*
  The two functions below (handleEnterKeyPress & checkAnswer)
  work in unison. When an answer is input with the enter keydown
  the functions are triggered and the handleEnterKeyPress calls checkAnswer.
  This is universal between MathPath, LitPath, and LogicPath
*/

export function handleEnterKeyPress(
  // Input box enter keydown event
  event,
  answer, // the correct answer
  inputValue,
  setInputValue,
  correctTally, // total correct tally (state)
  setCorrectTally, // to set total correct tally (state)
  problemSet, // current problem set (state)
  setProblemSet // to increment the problem set (state)
) {
  if (event.key === "Enter") {
    setInputValue(event.target.value);
    checkAnswer(
      inputVal,
      answer,
      correctTally,
      setCorrectTally,
      problemSet,
      setProblemSet
    );
  }
}

export function checkAnswer(
  inputVal,
  answer,
  correctTally,
  setCorrectTally,
  problemSet,
  setProblemSet
) {
  // Check answer function
  if (inputVal === answer) {
    console.log("correct");
    setCorrectTally(correctTally + 1); // increment total correct tally
    if (correctTally >= 20) {
      setProblemSet(problemSet + 1);
      setCorrectTally(0);
    }
  } else {
    console.log("try again");
  }
}

// Return a random number from 0 to max
export function randomNum(max) {
  return Math.floor(Math.random() * max);
}
