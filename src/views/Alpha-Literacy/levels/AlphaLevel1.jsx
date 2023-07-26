// imported components:
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';

// imported modules:
import answerEvent from '@root/modules/answerEvent';
import generateProblem from '@root/modules/generateProblem';

import '../AlphaLit.css';

// imported hooks:
import { useState, useRef } from 'react';

/*
  AlphaLevel1 component

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel1({ setLevelEvent }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [problemSet, setProblemSet] = useState(1); // problem set

  // `problem` object sets `question` & `answer` properties depending on the subject ("lit") & state (the problemSet)
  let problem = generateProblem('lit', problemSet, problemHistory); // generate a unique problem

  console.log('what?');
  return (
    <div id="litWrapper">
      <p id="litQ">
        <span>Enter the letter:</span>
        <br />
        <span id="letterQ">{problem.question}</span>
      </p>
      <input
        id="litAns"
        type="text"
        onKeyDown={event => {
          // set the value of the user's answer
          let inputValue = event.target.value;

          // listen for enter keydown
          if (event.key === 'Enter') {
            // first 2 problem sets are case insensitive
            if (problemSet === 1) {
              inputValue = inputValue.toUpperCase();
            } else if (problemSet === 2) {
              inputValue = inputValue.toLowerCase();
            }

            event.target.value = ''; // clears the input box

            // module answerEvent.js
            answerEvent(
              inputValue, // the user's given answer
              problem.answer, // the correct answer
              correctTally, // total correct tally (state)
              setCorrectTally, // to set total correct tally (set state)
              problemSet, // current problem set (state)
              setProblemSet, // to increment the problem set (state) if correct >= 20
              setLevelEvent // to set a level up event and display `LevelUp` component on rerender (set state)
            );
          }
        }}
      />
      <Timer />
      <Footbox correct={correctTally} style={'litFill'} />
    </div>
  );
}
