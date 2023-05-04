// imported components:
import RocketHeader from "./RocketHeader";
import SetHeader from "./SetHeader";
import Footbox from "./Footbox";

// imported modules:
import generateProblem from "../modules/mathProblems";
import answerEvent from "../modules/answerEvent";

// imported libraries:
import { useState, useRef } from "react";

/*
  Math Path component
 */
export default function MathPath() {
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(1); // question problem set
  const problemHistory = useRef([]); // to store problem history
  console.log("Render!");

  // create a problem history array for each problemSet
  if (!problemHistory.current[problemSet]) {
    problemHistory.current[problemSet] = [];
  }

  // problem sets `question` & `answer` properties depending on the state (the problemSet)
  let problem = generateProblem(problemSet);

  // generate a unique problem object (no repeats per problemSet)
  while (
    problemHistory.current[problemSet].some(
      (history) => history.question === problem.question
    )
  ) {
    problem = generateProblem(problemSet);
  }

  // add problem to the problem set history
  problemHistory.current[problemSet].push(problem);

  console.log(problemHistory);

  console.log(`Answer on page render: ${problem.answer}`);
  return (
    <div>
      <RocketHeader />

      <div id="mathPath">
        <div id="mathWrapper">
          <SetHeader subject={"Math"} set={problemSet} />

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
