// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import SetHeader from '@root/components/SetHeader/SetHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';

// imported modules:
import generateProblem from '@root/modules/generateProblem';
import answerEvent from '@root/modules/answerEvent';

import './MathPath.css'; // component styles

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
export default function MathPath({ setView }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(1); // question problem set
  const [level, setLevel] = useState(1); // level; increments in `LevelUp` component
  const [levelEvent, setLevelEvent] = useState(false); // toggle level (bool) to display `LevelUp` component

  console.log('Render!');

  // `problem` object sets `question` & `answer` properties depending on the subject ("math") & state (the problemSet)
  const problem = generateProblem('math', problemSet, problemHistory); // generate a unique problem

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />

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
