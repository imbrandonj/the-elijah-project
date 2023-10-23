// imported internal components:
import LevelHeader from '@root/components/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { letters } from '../AlphaProblems.js';
import tallyUp from '@root/modules/tallyUp.js';
import generateProblem from '@root/modules/generateProblem';

import '../AlphaLit.css';

// imported hooks:
import { useState, useRef } from 'react';

/*
  Alpha-Literacy Level 3

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel3({ setLevelUpEvent }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [userScore, setUserScore] = useState(0);

  const problemSet = letters.mixLetters; // imported problems for this level

  // `problem` object sets `question` & `answer` properties
  const [problem, setProblem] = useState(
    () => generateProblem(problemSet, problemHistory, false) // generate a unique problem
  );

  return (
    <div id="litLevel">
      <LevelHeader text="Type and enter 20 letters" score={userScore} />
      <p id="litQ">
        Enter the letter:
        <br />
        <span className="letterQ">{problem.question}</span>
      </p>
      <input
        id="litAns"
        type="text"
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

              setUserScore(userScore + 10);

              // generate a new problem after processing the current one
              setProblem(generateProblem(problemSet, problemHistory, false)); // generate a unique problem
            } else if (userScore >= 5) {
              setUserScore(userScore - 5);
            }
          }
        }}
      />
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Your answers are case-sensitive. Use the shift key to capitalize your letters." />
    </div>
  );
}
