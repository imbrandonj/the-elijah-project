import RocketHeader from "./RocketHeader";
import Footbox from "./Footbox";
import answerEvent from "./answerEvent";
import { randomNum } from "./util";
import { useState } from "react";

export default function MathPath() {
  const [question, setQuestion] = useState(0); // problem question
  const [answer, setAnswer] = useState(0); // the answer to the question (state)
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(0); // question problem set

  // Problem object sets question & answer depending on the state (the problemSet)
  let problem = {
    question: "",
    answer: "",
  };

  // generate problem depending on problem set
  if (problemSet == 0) {
    // generate random problem number
    let problemNum = randomNum(mathProblems.length);

    // set question and answer
    problem.question = Object.values(mathProblems[problemNum])[0];
    problem.answer = Object.keys(mathProblems[problemNum])[0];
  }

  console.log(`Answer on page render: ${problem.answer}`);
  return (
    <div>
      <RocketHeader />
      <div id="mathPath">
        <div id="mathWrapper">
          <header className="setHeader">Math: {setHeader[0]}</header>
          <div id="mathQABundle">
            <p id="mathQ">{problem.question}</p>
            <input
              id="mathAns"
              type="text"
              onKeyDown={(event) => {
                // listen for enter keydown
                if (event.key === "Enter") {
                  // set the value of the user's answer
                  let inputValue = event.target.value;

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
