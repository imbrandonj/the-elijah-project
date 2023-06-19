// imported components:
import RocketHeader from './RocketHeader';
import SetHeader from './SetHeader';
import Footbox from './Footbox';
import Timer from './Timer';
import LevelUp from './LevelUp';

// imported modules:
import answerEvent from '../modules/answerEvent';
import generateProblem from '../modules/generateProblem';

// imported hooks:
import { useState, useRef } from 'react';

/*
  Literacy Path component

  Presents literacy problems ~
  • Level up event triggers after every 3rd problem set
  • `set` prop (passed by SetMenu.jsx) indicates which problem set to begin with
 */
export default function LitPath({ set }) {
  const problemHistory = useRef([]); // to store problem history

  // state:
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [problemSet, setProblemSet] = useState(set); // problem set
  const [level, setLevel] = useState(1); // level; increments in `LevelUp` component
  const [levelEvent, setLevelEvent] = useState(false); // toggle level (bool) to display `LevelUp` component

  console.log('Render!');

  // `problem` object sets `question` & `answer` properties depending on the subject ("lit") & state (the problemSet)
  let problem = generateProblem('lit', problemSet, problemHistory); // generate a unique problem

  // return component
  return (
    <div>
      <RocketHeader />

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
            <SetHeader subject={'Literacy'} set={problemSet} />

            {problemSet <= 3 ? (
              <p id="litQ">
                <span className="lineHeight4">Enter the letter:</span>
                <br />
                <span id="letterQ">{problem.question}</span>
              </p>
            ) : (
              <p id="litQ4">
                <span className="lineHeight8">Spell the word:</span>
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
