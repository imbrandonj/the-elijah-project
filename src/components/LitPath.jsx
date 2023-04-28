// imported components:
import RocketHeader from "./RocketHeader";
import Footbox from "./Footbox";

// imported modules:
import answerEvent from "../modules/answerEvent";
import generateProblem from "../modules/litProblems";

// imported libraries:
import { useState } from "react";

/*
 */
export default function LitPath() {
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [problemSet, setProblemSet] = useState(1); // problem set

  // problem object sets `question` & `answer` properties depending on the state (the problemSet)
  let problem = generateProblem(problemSet);

  // Return for the first 3 problem sets
  if (problemSet <= 3) {
    return (
      <div>
        <RocketHeader />

        <div id="litPath">
          <div id="litWrapper">
            <header className="setHeader">
              Literacy: {setHeader[problemSet + 1]}
            </header>
            <p id="litQ">
              Enter the letter:
              <br />
              <span id="focused">{problem.question}</span>
            </p>
            <input
              id="litAns"
              type="text"
              onKeyDown={(event) => {
                // listen for enter keydown
                if (event.key === "Enter") {
                  // set the value of the user's answer
                  let inputValue = event.target.value;

                  // first 2 problem sets are case insensitive
                  if (problemSet === 0) {
                    inputValue = inputValue.toUpperCase();
                  } else if (problemSet === 1) {
                    inputValue = inputValue.toLowerCase();
                  }

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
            <Footbox correct={correctTally} style={"litFill"} />
          </div>
        </div>
      </div>
    );
  }
}

// Problem set headers
const setHeader = [
  "Problem Set 1 - Enter the Uppercase Letter",
  "Problem Set 2 - Type the Lowercase Letter",
  "Problem Set 3 - Type the Letter (Mixed Case)",
  "Problem Set 4 - Spelling 3 Letter Words",
];
