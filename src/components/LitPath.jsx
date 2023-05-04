// imported components:
import RocketHeader from "./RocketHeader";
import SetHeader from "./SetHeader";
import Footbox from "./Footbox";

// imported modules:
import answerEvent from "../modules/answerEvent";
import generateProblem from "../modules/litProblems";

// imported libraries:
import { useState, useRef } from "react";

/*
  Literacy Path component
 */
export default function LitPath() {
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [problemSet, setProblemSet] = useState(1); // problem set
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

  return (
    <div>
      <RocketHeader />

      <div id="litPath">
        <div id="litWrapper">
          <SetHeader subject={"Literacy"} set={problemSet} />

          {problemSet <= 3 ? (
            <p id="litQ">
              <span className="lineHeight4">Enter the letter:</span>
              <br />
              <span id="letterQ">{problem.question}</span>
            </p>
          ) : (
            <p id="litQ4">
              <span className="lineHeight8">Spell the word:</span>
              <br />
              <span className="medEmoji">{problem.emoji}</span>
              <br />
              <span className="emojiFont">{problem.question}</span>
            </p>
          )}

          <input
            id="litAns"
            type="text"
            onKeyDown={(event) => {
              // set the value of the user's answer
              let inputValue = event.target.value;

              // listen for enter keydown
              if (event.key === "Enter") {
                // first 2 problem sets are case insensitive
                if (problemSet === 1) {
                  inputValue = inputValue.toUpperCase();
                } else if (problemSet === 2) {
                  inputValue = inputValue.toLowerCase();
                }

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
          <Footbox correct={correctTally} style={"litFill"} />
        </div>
      </div>
    </div>
  );
}
