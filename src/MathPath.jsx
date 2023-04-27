import RocketHeader from "./RocketHeader";
import Footbox from "./Footbox";

import generateProblem from "./mathProblems";
import answerEvent from "./answerEvent";
import { useState } from "react";

export default function MathPath() {
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(1); // question problem set

  // problem object sets `question` & `answer` properties depending on the state (the problemSet)
  let problem = generateProblem(problemSet);

  console.log(`Answer on page render: ${problem.answer}`);
  return (
    <div>
      <RocketHeader />
      <div id="mathPath">
        <div id="mathWrapper">
          <header className="setHeader">
            Math: {setHeader[problemSet - 1]}
          </header>
          <div id="mathQABundle">
            <p id="mathQ">{problem.question}</p>
            <input
              id="mathAns"
              type="text"
              onKeyDown={(event) => {
                // listen for enter keydown
                if (event.key === "Enter") {
                  // set the value of the user's answer
                  let inputValue = parseInt(event.target.value); // math answers must be parsed to int
                  event.target.value = ""; // clears the input box

                  // module answerEvent.js
                  answerEvent(
                    event, // enter keydown event
                    inputValue, // the user's given answer
                    problem.answer, // the correct answer
                    correctTally, // total correct tally (state)
                    setCorrectTally, // to set total correct tally (state)
                    problemSet, // current problem set (state)
                    setProblemSet // to increment the problem set (state) if correct >= 20
                  );
                }
              }}
            />
          </div>
          <Footbox correct={correctTally} style={"mathFill"} />
        </div>
      </div>
    </div>
  );
}

// header descriptions
const setHeader = [
  "Problem Set 1 - Addition to 10",
  "Problem Set 2 - Subtraction to 10",
  "Problem Set 3 - Addition from 10 to 20",
  "Problem Set 4 - Subtraction from 10 to 20",
];
