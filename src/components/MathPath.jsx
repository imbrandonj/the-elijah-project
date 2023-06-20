// imported components:
import RocketHeader from './RocketHeader';
import SetHeader from './SetHeader';
import Footbox from './Footbox';
import Timer from './Timer';
import LevelUp from './LevelUp';

// imported modules:
import generateProblem from '../modules/generateProblem';
import answerEvent from '../modules/answerEvent';

import '../styles/MathPath.css'; // component styles

// imported hooks:
import { useState, useRef } from 'react';

/*
  Math Path component

  Presents math problems ~
  • QA bundle displays problem + input box in simple format
  • After level 1, problem sets multiples of 3 will render MathOperations component
  • Level up event triggers after every 3rd problem set
  • `set` prop (passed by SetMenu.jsx) indicates which problem set to begin with
 */
export default function MathPath({ set }) {
  const problemHistory = useRef([]); // to store problem history

  // state:
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(set); // question problem set
  const [level, setLevel] = useState(1); // level; increments in `LevelUp` component
  const [levelEvent, setLevelEvent] = useState(false); // toggle level (bool) to display `LevelUp` component

  console.log('Render!');
  // console.log(`levelEvent: ${levelEvent}`);
  // console.log(`problemSet: ${problemSet}`);
  // console.log(`correctTally: ${correctTally}`);

  // `problem` object sets `question` & `answer` properties depending on the subject ("math") & state (the problemSet)
  const problem = generateProblem('math', problemSet, problemHistory); // generate a unique problem

  // return component
  return (
    <div>
      <RocketHeader />

      {levelEvent ? (
        <LevelUp
          path="Math"
          level={level}
          setLevel={setLevel}
          setLevelEvent={setLevelEvent}
        />
      ) : (
        <div id="mathPath">
          <div id="mathWrapper">
            <SetHeader subject={'Math'} set={problemSet} />

            <div id="mathQABundle">
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
            </div>
            <Footbox correct={correctTally} style={'mathFill'} />
            <Timer />
          </div>
        </div>
      )}
    </div>
  );
}
