// imported internal components:
import Objective from '@root/components/Objective.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { shortAnimals } from '../AlphaProblems.js';
import tallyUp from '@root/modules/tallyUp.js';
import generateProblem from '@root/modules/generateProblem';

import '../AlphaLit.css';

// imported hooks:
import { useState, useRef } from 'react';

/*
  Alpha-Literacy Level 4

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel4({ setLevelUpEvent }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const problemSet = shortAnimals; // imported problems for this level

  // `problem` object sets `question` & `answer` properties
  const problem = generateProblem(problemSet, problemHistory, true); // generate a unique problem

  return (
    <div id="litLevel">
      <Objective text="Spell 20 short animal words" />
      <p id="litQ">
        <span>Spell:</span>
        <br />
        <span id="letterQ">
          {problem.question}
          <br />
          {problem.answer}
        </span>
      </p>
      <input
        id="litAns"
        type="text"
        onKeyDown={event => {
          // set the value of the user's answer
          let inputValue = event.target.value;

          // listen for enter keydown
          if (event.key === 'Enter') {
            // case insensitive
            inputValue = inputValue.toLowerCase();

            event.target.value = ''; // clears the input box

            // correct answer event:
            if (inputValue === problem.answer) {
              // module answerEvent.js
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
      <Tipbox text="Tip: Spelling Tip!" />
    </div>
  );
}
