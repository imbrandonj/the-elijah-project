// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import { useAudio } from '@root/contexts/AudioContext.jsx';

// imported internal modules:
import { getAudio } from './arithAudio.js';
import { randomNum } from '@root/modules/util.js';
import speakText from '@root/modules/speakText.js';
import tallyUp from '@root/modules/tallyUp.js';

import '../Arith.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
    Arith Level 8 Component

    This level uses 3 input boxes for an operation
    Format: a - b = c
    Where the user must input the numbers listed from the given audio (a, b, c)
    The audio is imported from arithAudio.js

    `setLevelEvent` prop (state) is passed from Arith view
      - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel8({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const { playAudio, stopAudio } = useAudio(); // audio global state context

  // select 2 random numbers as operands, operand1 max = 10, operand2 max = operand1 - 1
  const [operand1, setOperand1] = useState(randomNum(9) + 1);
  const [operand2, setOperand2] = useState(randomNum(operand1 - 1));

  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  // user provided input:
  const [userOperand1, setUserOperand1] = useState(''); // default=displays empty input box
  const [userOperand2, setUserOperand2] = useState(''); // default=displays empty input box
  const [userDiff, setUserDiff] = useState(''); // default=displays empty input box

  const diff = operand1 - operand2;

  let audio = getAudio('sub' + operand1 + operand2); // generates an mp3 import

  // audio plays on component render
  // and `operand1` input box becomes focus
  useEffect(() => {
    playAudio(audio); // play on problem load
    document.getElementById('operand1').focus();

    return () => stopAudio(); // clean up audio fn when component unmounts or re-renders
  }, [correctTally]);

  const playButton = () => {
    playAudio(audio);
  };

  function answerEvent() {
    // correct answer event:
    if (
      operand1 === userOperand1 &&
      operand2 === userOperand2 &&
      diff === userDiff
    ) {
      console.log(true);

      setUserOperand1('');
      setUserOperand2('');
      setUserDiff('');

      // select 2 random numbers as operands, operand1 max = 10, operand2 max = operand1 - 1
      let getRandom = randomNum(9) + 1;
      setOperand1(getRandom);
      setOperand2(randomNum(getRandom - 1));

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
      if (diff != userDiff) setUserDiff(' ');
      console.log(diff);
      console.log(userDiff);
      console.log(false);
    }
  }

  return (
    <div id="ArithLevel">
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
            autoComplete="off"
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
          -{' '}
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
          value={userDiff}
          onChange={event => {
            if (isNaN(parseInt(event.target.value))) setUserDiff('');
            else setUserDiff(parseInt(event.target.value));
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
