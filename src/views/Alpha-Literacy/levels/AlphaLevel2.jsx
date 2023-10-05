// imported internal components:
import Objective from '@root/components/Objective.jsx';
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
  Alpha-Literacy Level 2

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel2({ setLevelUpEvent }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const problemSet = letters.lowerLetters; // imported problems for this level

  // `problem` object sets `question` & `answer` properties
  const problem = generateProblem(problemSet, problemHistory, false); // generate a unique problem

  return (
    <div id="litLevel">
      <Objective text="Type and enter 20 letters" />
      <p id="litQ">
        <span>Enter the letter:</span>
        <br />
        <span id="letterQ">{problem.question}</span>
      </p>
      <input
        id="litAns"
        type="text"
        onKeyDown={event => {
          // listen for enter keydown
          if (event.key === 'Enter') {
            // set the value of the user's answer, case insensitive
            let inputValue = event.target.value.toLowerCase();

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
            }
          }
        }}
      />
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Your answers are case insensitive. You can type uppercase or lowercase." />
    </div>
  );
}
