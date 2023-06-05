// imported components:
import RocketHeader from "./RocketHeader";
import SetHeader from "./SetHeader";
import Footbox from "./Footbox";
import Timer from "./Timer";

// imported modules:
import generateProblem from "../modules/generateProblem";
import answerEvent from "../modules/answerEvent";

// imported hooks:
import { useState, useRef } from "react";

/*
  Math Path component

  `set` argument (passed by SetMenu.jsx) indicates which problem set to begin with

  Problem sets multiples of 3 will render MathOperations component
 */
export default function MathPath({ set }) {
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(set); // question problem set
  const problemHistory = useRef([]); // to store problem history
  console.log("Render!");

  // `problem` object sets `question` & `answer` properties depending on the subject ("math") & state (the problemSet)
  let problem = generateProblem("math", problemSet, problemHistory); // generate a unique problem

  // return component
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
          <Timer />
        </div>
      </div>
    </div>
  );
}
