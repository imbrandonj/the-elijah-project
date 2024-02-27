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
    Arith Level 3 Component

    This level uses 3 input boxes for a binary operation
    Format: a + b = c
    Where the user must input the numbers listed from the given audio (a, b, c)
    The audio is imported from arithAudio.js

    `setLevelEvent` prop (state) is passed from Arith view
      - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel3({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  // select 2 random numbers as operands, max = 5
  const [operand1, setOperand1] = useState(randomNum(5));
  const [operand2, setOperand2] = useState(randomNum(5));

  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  // user provided input:
  const [userOperand1, setUserOperand1] = useState(''); // default=displays empty input box
  const [userOperand2, setUserOperand2] = useState(''); // default=displays empty input box
  const [userSum, setUserSum] = useState(''); // default=displays empty input box

  const sum = operand1 + operand2;
  let audio = getAudio('add', operand1, operand2);

  // audio plays on component render
  // and `operand1` input box becomes focus
  useEffect(() => {
    const mp3 = new Audio(audio);
    mp3.play(); // play on problem load
    document.getElementById('operand1').focus();
  }, [correctTally]);

  const playButton = () => {
    const mp3 = new Audio(audio);
    console.log('test from play button');
    console.log(audio);
    mp3.play();
  };

  function answerEvent() {
    // correct answer event:
    if (
      operand1 === userOperand1 &&
      operand2 === userOperand2 &&
      sum === userSum
    ) {
      console.log(true);

      setUserOperand1('');
      setUserOperand2('');
      setUserSum('');
      setOperand1(randomNum(5));
      setOperand2(randomNum(5));

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
      if (sum != userSum) setUserSum(' ');
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
          value={userSum}
          onChange={event => {
            if (isNaN(parseInt(event.target.value))) setUserSum('');
            else setUserSum(parseInt(event.target.value));
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
