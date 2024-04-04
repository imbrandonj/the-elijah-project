// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import { useAudio } from '@root/contexts/AudioContext.jsx';

// imported internal modules:
import { getAudio } from './arithAudio.js';
import { randomNum } from '@root/modules/util.js';
import tallyUp from '@root/modules/tallyUp.js';

import '../Arith.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
    Arith Level 11 Component

    This level uses 4 input boxes for an operation
    Format: a (+ or -) b = c
    Where the user must input the numbers listed from the given audio (a, b, c)
    and type the correct operation type (+ or -)

    The audio is imported from arithAudio.js

    `setLevelEvent` prop (state) is passed from Arith view
      - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel11({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const { playAudio, stopAudio } = useAudio(); // audio global state context
  const [operand1, setOperand1] = useState(0); // defaults to 0 before knowing if operation is 'add' or 'sub'
  const [operand2, setOperand2] = useState(0); // defaults to 0 before knowing if operation is 'add' or 'sub'
  const [answer, setAnswer] = useState(0); // defaults to 0 before knowing if operation is 'add' or 'sub'
  const [operation, setOperation] = useState(''); // operation is either addition or subtraction
  const [audio, setAudio] = useState(''); // string to import audio from getAudio(str: audio)
  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  // user provided input:
  const [userOperand1, setUserOperand1] = useState(''); // default=displays empty input box
  const [userOperand2, setUserOperand2] = useState(''); // default=displays empty input box
  const [userOperation, setUserOperation] = useState(''); // default=displays empty input box
  const [userAnswer, setUserAnswer] = useState(''); // default=displays empty input box

  console.log(audio, 'from main');

  // must determine if the operation is addition or subtraction
  // then set the component state appropriately:
  useEffect(() => {
    const isAddition = Math.random() < 0.5; // boolean logic for 50% chance
    const operationType = isAddition ? 'add' : 'sub';
    setOperation(operationType === 'add' ? '+' : '-');

    // generate operands based on operation type:
    let num1, num2;
    if (isAddition) {
      num1 = randomNum(5);
      num2 = randomNum(5);
      setOperand1(num1);
      setOperand2(num2);
    } else {
      num1 = randomNum(9) + 1;
      num2 = randomNum(num1 - 1);
      setOperand1(num1);
      setOperand2(num2);
    }

    // set the answer and audio (state)
    setAnswer(isAddition ? num1 + num2 : num1 - num2);
    setAudio(operationType + num1 + num2); // audio must be saved in state due to the playButton() fn

    // retrieve and play audio mp3
    playAudio(getAudio(operationType + num1 + num2));

    document.getElementById('operand1').focus(); // focus on the input box

    return () => stopAudio(); // clean up audio fn when component unmounts or re-renders
  }, [correctTally]);

  // audio play button:
  const playButton = () => {
    playAudio(getAudio(audio));
  };

  // check answer event:
  function answerEvent() {
    // correct answer event:
    if (
      operand1 === userOperand1 &&
      operand2 === userOperand2 &&
      operation === userOperation &&
      answer === Number(userAnswer)
    ) {
      console.log(true);

      setUserOperand1('');
      setUserOperand2('');
      setUserOperation('');
      setUserAnswer('');

      // module tallyUp.js
      tallyUp(
        20, // `totalQuestions`
        correctTally, // total correct tally (state)
        setCorrectTally, // to set total correct tally (set state)
        setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
      );

      setLevelScore(levelScore + 20);

      // reset the incorrect numbers, keep the correct ones:
    } else {
      if (operand1 !== userOperand1) setUserOperand1('');
      if (operand2 !== userOperand2) setUserOperand2('');
      if (operation !== userOperation) setUserOperation('');
      if (answer != Number(userAnswer)) setUserAnswer(' ');
      console.log(false);
    }
  }

  return (
    <div id="ArithLevel" className="flex-col align-center">
      <LevelHeader text="Type numbers of an operation" score={levelScore} />
      <button className="speaker" onClick={playButton}>
        🔊
      </button>
      <div id="mathQABundle2" className="flex justify-center">
        <p id="mathQ">
          <input
            id="operand1"
            className="operandBox"
            type="text"
            value={userOperand1}
            onChange={event => {
              if (isNaN(parseInt(event.target.value))) setUserOperand1('');
              else setUserOperand1(parseInt(event.target.value));
            }}
            onKeyDown={event => {
              // listen for enter keydown
              if (event.key === 'Enter') answerEvent();
            }}
          />{' '}
          <input
            id="operationBox"
            className="operationBox"
            type="text"
            value={userOperation}
            onChange={event => {
              setUserOperation(event.target.value);
            }}
            onKeyDown={event => {
              if (event.key === 'Enter') answerEvent();
            }}
          />{' '}
          <input
            id="operand2"
            className="operandBox"
            type="text"
            value={userOperand2}
            onChange={event => {
              if (isNaN(parseInt(event.target.value))) setUserOperand2('');
              else setUserOperand2(parseInt(event.target.value));
            }}
            onKeyDown={event => {
              // listen for enter keydown
              if (event.key === 'Enter') answerEvent();
            }}
          />{' '}
          =
        </p>
        <input
          id="mathAns"
          type="text"
          value={userAnswer}
          onChange={event => {
            if (isNaN(parseInt(event.target.value))) setUserAnswer('');
            else setUserAnswer(parseInt(event.target.value));
          }}
          onKeyDown={event => {
            // listen for enter keydown
            if (event.key === 'Enter') answerEvent();
          }}
        />
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Click the speaker to hear the operation. Press enter to submit the operation." />
    </div>
  );
}
