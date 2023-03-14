import Footbox from "./Footbox";
import { handleEnterKeyPress, checkAnswer, randomNum } from "./util";
import { useState } from "react";

export default function LitPath() {
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [problemSet, setProblemSet] = useState(0); // problem set
  const [inputValue, setInputValue] = useState(""); // user input values

  // Problem object sets question & answer depending on the state (the problemSet)
  let problem = {
    question: "",
    answer: "",
  };

  // Generate problem depending on problem set
  // For the first 3 problem sets, the answer is the question
  if (problemSet === 0) {
    problem.question = upperLetters.charAt(randomNum(upperLetters.length));
    problem.answer = problem.question;
  } else if (problemSet === 1) {
    problem.question = lowerLetters.charAt(randomNum(lowerLetters.length));
    problem.answer = problem.question;
  } else if (problemSet === 2) {
    problem.question = mixLetters.charAt(randomNum(mixLetters.length));
    problem.answer = problem.question;
  }

  // Return for the first 3 problem sets
  if (problemSet <= 3) {
    return (
      <div>
        <h2>The Elijah Project</h2>

        <div id="litPath">
          <div id="litWrapper">
            <header className="setHeader">
              Literacy: {setHeader[problemSet]}
            </header>
            <p id="litQ">
              Enter the letter:
              <br />
              <span id="focused">{problem.question}</span>
            </p>
            <input
              id="litAns"
              type="text"
              value={inputValue}
              // Set state to represent user input:
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) =>
                // see util.js for handleKeyPress function
                handleEnterKeyPress(
                  event, // enter keydown event
                  inputValue,
                  setInputValue,
                  problem.answer, // the correct answer
                  correctTally, // total correct tally state
                  setCorrectTally, // to set total correct tally state
                  problemSet, // current problem set state
                  setProblemSet // to increment the problem set if correct >= 20
                )
              }
            />
            <Footbox />
          </div>
        </div>
      </div>
    );
  }
}

// Letters used for problem sets 1 - 3
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const mixLetters = upperLetters + lowerLetters;

// Problem set headers
const setHeader = [
  "Problem Set 1 - Enter the Uppercase Letter",
  "Problem Set 2 - Type the Lowercase Letter",
  "Problem Set 3 - Type the Letter (Mixed Case)",
  "Problem Set 4 - Spelling 3 Letter Words",
];
