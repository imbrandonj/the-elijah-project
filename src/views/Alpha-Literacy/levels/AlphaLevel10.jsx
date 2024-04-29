// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { letters } from '../AlphaProblems.js';
import tallyUp from '@root/modules/tallyUp.js';
import generateProblem from '@root/modules/generateProblem';

import '../AlphaLit.css';

// imported hooks:
import { useState, useEffect, useRef } from 'react';

/*
  Alpha-Literacy Level 10

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel10({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const problemSet = letters.mixLetters; // imported problems for this level

  // `problem` object sets `question` & `answer` properties
  const [problem, setProblem] = useState(
    () => generateProblem(problemSet, problemHistory, false) // generate a unique problem
  );

  // focuses on input box with each render
  useEffect(() => {
    document.getElementById('litAns').focus();
  }, []);

  return (
    <div id="litLevel" className="flex-col align-center">
      <LevelHeader text="Type and enter 20 letters" score={levelScore} />
      <div id="litProb">
        <p>
          Enter the letter:
          <br />
          <span className="letterQ">{problem.question}</span>
        </p>
        <input
          id="litAns"
          type="text"
          autoComplete="off"
          onKeyDown={event => {
            // listen for enter keydown
            if (event.key === 'Enter') {
              // set the value of the user's answer
              let inputValue = event.target.value;

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

                setLevelScore(levelScore + 17);

                // generate a new problem after processing the current one
                setProblem(generateProblem(problemSet, problemHistory, false)); // generate a unique problem
              } else if (levelScore >= 10) {
                setLevelScore(levelScore - 10);
              }
            }
          }}
        />
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Your answers are case-sensitive. Use the shift key to capitalize your letters." />
    </div>
  );
}
