// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { shortAnimals } from '../AlphaProblems.js';
import tallyUp from '@root/modules/tallyUp.js';
import generateProblem from '@root/modules/generateProblem';

import '../AlphaLit.css';

// imported hooks:
import { useState, useEffect, useRef } from 'react';

/*
  Alpha-Literacy Level 4

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel4({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const problemSet = shortAnimals; // imported problems for this level

  // `problem` object sets `question` & `answer` properties
  const [problem, setProblem] = useState(
    () => generateProblem(problemSet, problemHistory, true) // generate a unique problem
  );

  // focuses on input box with each render
  useEffect(() => {
    document.getElementById('litAns').focus();
  }, []);

  return (
    <div id="litLevel">
      <LevelHeader text="Spell 20 short animal words" score={levelScore} />
      <div id="litProb">
        <p>
          <span className="emojiQ">{problem.question}</span>
          <br />
          <br />
          <span className="wordQ">{problem.answer}</span>
        </p>
        <input
          id="litAns"
          type="text"
          autoComplete="off"
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
      <Tipbox text="Tip: Practice speaking each letter as you type them." />
    </div>
  );
}
