// imported components:
import AlphaLevel1Entry from './levels/AlphaLevel1Entry.jsx';
import AlphaLevel2Entry from './levels/AlphaLevel2Entry.jsx';
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';

// imported modules:
import answerEvent from '@root/modules/answerEvent';
import generateProblem from '@root/modules/generateProblem';

import './AlphaLit.css'; // component styles

// imported hooks:
import { useState, useRef } from 'react';

/*
  Alpha-Literacy `view` component

  Presents alphabetical literacy problems ~
  • Level up event triggers after every 3rd problem set
  • `setView` prop (state) is passed to RocketHeader for view redirect
  • `setLevel` prop (state) is used to set or modify the Alpha-Lit level
 */
export default function AlphaLit({ setView, level, setLevel }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [problemSet, setProblemSet] = useState(1); // problem set
  const [levelEvent, setLevelEvent] = useState(false); // toggle level (bool) to display `LevelUp` component

  console.log('Render!');

  // `problem` object sets `question` & `answer` properties depending on the subject ("lit") & state (the problemSet)
  let problem = generateProblem('lit', problemSet, problemHistory); // generate a unique problem

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />

      {levelEvent ? (
        <LevelUp
          path="Literacy"
          level={level}
          setLevel={setLevel}
          setLevelEvent={setLevelEvent}
        />
      ) : (
        <div id="litPath">
          <div id="litWrapper">
            {problemSet <= 3 ? (
              <p id="litQ">
                <span>Enter the letter:</span>
                <br />
                <span id="letterQ">{problem.question}</span>
              </p>
            ) : (
              <p id="litQ4">
                <span id="spell">Spell the word:</span>
                <br />
                <span className="medEmoji">{problem.emoji}</span>
                <br />
                <span className="emojiFont">{problem.question}</span>
              </p>
            )}

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
            <Footbox correct={correctTally} style={'litFill'} />
            <Timer />
          </div>
        </div>
      )}
    </div>
  );
}
