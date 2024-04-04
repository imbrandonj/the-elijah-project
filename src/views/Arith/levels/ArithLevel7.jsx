// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { level7 } from './arithProblems.js';
import generateProblem from '@root/modules/generateProblem.js';
import tallyUp from '@root/modules/tallyUp.js';

import '../Arith.css';

// imported hooks:
import { useState, useEffect, useRef } from 'react';

/*
    Arith Level 7 Component

    Subtraction, { 6-10 - 0-10 }

    `setLevelEvent` prop (state) is passed from Arith view
      - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel7({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  const problemSet = level7; // imported problems for this level

  // `problem` is an object with `question` & `answer` properties
  const [problem, setProblem] = useState(
    () => generateProblem(problemSet, problemHistory, true) // generate a unique problem
  );

  // focuses on input box with each render
  useEffect(() => {
    document.getElementById('mathAns').focus();
  }, []);

  return (
    <div id="ArithLevel" className="flex-col align-center">
      <LevelHeader
        text="Subtract one number from the other."
        score={levelScore}
      />
      <div id="mathQABundle" className="flex justify-center">
        <p id="mathQ">{problem.question}</p>
        <input
          id="mathAns"
          type="text"
          onKeyDown={event => {
            // listen for enter keydown
            if (event.key === 'Enter') {
              // set the value of the user's answer
              let inputValue = parseInt(event.target.value); // math answers must be parsed to int

              event.target.value = ''; // clears the input box

              // correct answer event:
              if (inputValue === problem.answer) {
                // module tallyUp.js
                tallyUp(
                  20, // `totalQuestions`
                  correctTally, // total correct tally (state)
                  setCorrectTally, // to set total correct tally (set state)
                  setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
                );

                setLevelScore(levelScore + 20);

                // generate a new problem after processing the current one
                setProblem(generateProblem(problemSet, problemHistory, true)); // generate a unique problem
              } else if (levelScore >= 10) {
                setLevelScore(levelScore - 10);
              }
            }
          }}
        />
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: No number exceeds 10. Use the fingers of both hands to count and take away the appropriate amount." />
    </div>
  );
}
