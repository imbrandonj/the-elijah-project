// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { getAudio } from './arithAudio.js';
import { randomNum } from '@root/modules/util.js';
import speakText from '@root/modules/speakText.js';
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
  const [operand1, setOperand1] = useState(0); // defaults to 0 before knowing if operation is 'add' or 'sub'
  const [operand2, setOperand2] = useState(0); // defaults to 0 before knowing if operation is 'add' or 'sub'
  const [answer, setAnswer] = useState(0); // defaults to 0 before knowing if operation is 'add' or 'sub'
  const [operation, setOperation] = useState(''); // operation is either addition or subtraction
  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  // user provided input:
  const [userOperand1, setUserOperand1] = useState(''); // default=displays empty input box
  const [userOperand2, setUserOperand2] = useState(''); // default=displays empty input box
  const [userAnswer, setUserAnswer] = useState(''); // default=displays empty input box

  let audio; // global, set in useEffect hook but also called in playButton()

  // must determine if the operation is addition or subtraction
  // then set the component state appropriately:
  useEffect(() => {
    const isAddition = Math.random() < 0.5; // boolean logic for 50% chance
    setOperation(isAddition ? 'add' : 'sub');

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

    setAnswer(isAddition ? num1 + num2 : num1 - num2);

    // Calculate audio based on operation type and operands
    audio = getAudio(operation, num1, num2);

    // Play audio and focus the input box
    const mp3 = new Audio(audio);
    mp3.play();
    document.getElementById('operand1').focus();
  }, [correctTally, operation]);

  // audio plays on component render
  // and `operand1` input box becomes focus
  // useEffect(() => {
  //   let audio = getAudio(operation, operand1, operand2);

  //   const mp3 = new Audio(audio);
  //   mp3.play(); // play on problem load
  //   document.getElementById('operand1').focus();
  // }, [correctTally]);

  // audio play button:
  const playButton = () => {
    const mp3 = new Audio(audio);
    console.log('test from play button');
    console.log(audio);
    mp3.play();
  };

  // check answer event:
  function answerEvent() {
    // correct answer event:
    if (
      operand1 === userOperand1 &&
      operand2 === userOperand2 &&
      answer === Number(userAnswer)
    ) {
      console.log(true);

      setUserOperand1('');
      setUserOperand2('');
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
      if (operand1 != userOperand1) setUserOperand1('');
      if (operand2 != userOperand2) setUserOperand2('');
      if (answer != Number(userAnswer)) setUserAnswer(' ');
      console.log(false);
    }
  }

  return (
    <div id="ArithLevel">
      <LevelHeader text="Type numbers of an operation" score={levelScore} />
      <button className="speaker" onClick={playButton}>
        🔊
      </button>
      <div id="mathQABundle2">
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
          +{' '}
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
