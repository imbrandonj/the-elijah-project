import { handleEnterKeyPress, checkAnswer, randomNum } from "./util";
import Footbox from "./Footbox";
import { useState } from "react";

export default function MathPath() {
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(0); // question problem set

  // Problem object sets question & answer depending on the state (the problemSet)
  let problem = {
    question: "",
    answer: "",
  };

  // Generate problem depending on problem set
  if (problemSet == 0) {
    // Generate random problem number
    let problemNum = randomNum(mathProblems.length);

    // Set question and answer
    problem.question = Object.values(mathProblems[problemNum])[0];
    problem.answer = Object.keys(mathProblems[problemNum])[0];
  }

  return (
    <div>
      <h2>The Elijah Project</h2>
      <div id="mathPath">
        <div id="mathWrapper">
          <header className="setHeader">Math: {setHeader[0]}</header>
          <div id="mathQABundle">
            <p id="mathQ">{problem.question}</p>
            <input
              id="mathAns"
              type="text"
              onKeyDown={(event) =>
                // see util.js for handleKeyPress function
                handleEnterKeyPress(
                  event, // enter keydown event
                  problem.answer, // the correct answer
                  correctTally, // problem set correct tally state
                  setCorrectTally, // to set total correct tally state
                  problemSet, // current problem set state
                  setProblemSet // to increment the problem set if correct >= 20
                )
              }
            ></input>
          </div>
          <Footbox correct={correctTally} />
        </div>
      </div>
    </div>
  );
}

const mathProblems = [
  { 0: "0 + 0 =" },
  { 1: "1 + 0 =" },
  { 2: "1 + 1 =" },
  { 3: "2 + 1 =" },
  { 4: "2 + 2 =" },
  { 5: "3 + 2 =" },
  { 6: "3 + 3 =" },
  { 7: "4 + 3 =" },
  { 8: "4 + 4 =" },
  { 9: "6 + 3 =" },
  { 10: "5 + 5 =" },
];

const setHeader = [
  "Problem Set 1 - Addition to 10",
  "Problem Set 2 - Substraction to 10",
  "Problem Set 3 - Addition to 20",
  "Problem Set 4 - Subtraction to 20",
];
