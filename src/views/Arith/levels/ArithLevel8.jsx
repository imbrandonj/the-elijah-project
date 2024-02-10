// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { randomNum } from '@root/modules/util.js';
import speakText from '@root/modules/speakText.js';
import tallyUp from '@root/modules/tallyUp.js';

// mp3 audio imports:
import sub109 from '@root/assets/mp3/sub109.mp3';
import sub108 from '@root/assets/mp3/sub108.mp3';
import sub107 from '@root/assets/mp3/sub107.mp3';
import sub106 from '@root/assets/mp3/sub106.mp3';
import sub105 from '@root/assets/mp3/sub105.mp3';
import sub104 from '@root/assets/mp3/sub104.mp3';
import sub103 from '@root/assets/mp3/sub103.mp3';
import sub102 from '@root/assets/mp3/sub102.mp3';
import sub101 from '@root/assets/mp3/sub101.mp3';
import sub100 from '@root/assets/mp3/sub100.mp3';
import sub98 from '@root/assets/mp3/sub98.mp3';
import sub97 from '@root/assets/mp3/sub97.mp3';
import sub96 from '@root/assets/mp3/sub96.mp3';
import sub95 from '@root/assets/mp3/sub95.mp3';
import sub94 from '@root/assets/mp3/sub94.mp3';
import sub93 from '@root/assets/mp3/sub93.mp3';
import sub92 from '@root/assets/mp3/sub92.mp3';
import sub91 from '@root/assets/mp3/sub91.mp3';
import sub90 from '@root/assets/mp3/sub90.mp3';
import sub87 from '@root/assets/mp3/sub87.mp3';
import sub86 from '@root/assets/mp3/sub86.mp3';
import sub85 from '@root/assets/mp3/sub85.mp3';
import sub84 from '@root/assets/mp3/sub84.mp3';
import sub83 from '@root/assets/mp3/sub83.mp3';
import sub82 from '@root/assets/mp3/sub82.mp3';
import sub81 from '@root/assets/mp3/sub81.mp3';
import sub80 from '@root/assets/mp3/sub80.mp3';
import sub76 from '@root/assets/mp3/sub76.mp3';
import sub75 from '@root/assets/mp3/sub75.mp3';
import sub74 from '@root/assets/mp3/sub74.mp3';
import sub73 from '@root/assets/mp3/sub73.mp3';
import sub72 from '@root/assets/mp3/sub72.mp3';
import sub71 from '@root/assets/mp3/sub71.mp3';
import sub70 from '@root/assets/mp3/sub70.mp3';
import sub65 from '@root/assets/mp3/sub65.mp3';
import sub64 from '@root/assets/mp3/sub64.mp3';
import sub63 from '@root/assets/mp3/sub63.mp3';
import sub62 from '@root/assets/mp3/sub62.mp3';
import sub61 from '@root/assets/mp3/sub61.mp3';
import sub60 from '@root/assets/mp3/sub60.mp3';
import sub54 from '@root/assets/mp3/sub54.mp3';
import sub53 from '@root/assets/mp3/sub53.mp3';
import sub52 from '@root/assets/mp3/sub52.mp3';
import sub51 from '@root/assets/mp3/sub51.mp3';
import sub50 from '@root/assets/mp3/sub50.mp3';
import sub43 from '@root/assets/mp3/sub43.mp3';
import sub42 from '@root/assets/mp3/sub42.mp3';
import sub41 from '@root/assets/mp3/sub41.mp3';
import sub40 from '@root/assets/mp3/sub40.mp3';
import sub32 from '@root/assets/mp3/sub32.mp3';
import sub31 from '@root/assets/mp3/sub31.mp3';
import sub30 from '@root/assets/mp3/sub30.mp3';
import sub21 from '@root/assets/mp3/sub21.mp3';
import sub20 from '@root/assets/mp3/sub20.mp3';
import sub10 from '@root/assets/mp3/sub10.mp3';

import '../Arith.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
    Arith Level 8 Component

    This level uses 3 input boxes for a binary operation
    Format: a - b = c
    Where the user must input the numbers listed from the given audio (a, b, c)

    `setLevelEvent` prop (state) is passed from Arith view
      - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel8({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  // select 2 random numbers as operands, operand1 max = 10, operand2 max = operand1 - 1
  const [operand1, setOperand1] = useState(randomNum(9) + 1);
  const [operand2, setOperand2] = useState(randomNum(operand1 - 1));

  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  // user provided input:
  const [userOperand1, setUserOperand1] = useState(''); // default=displays empty input box
  const [userOperand2, setUserOperand2] = useState(''); // default=displays empty input box
  const [userDiff, setUserDiff] = useState(''); // default=displays empty input box

  const diff = operand1 - operand2;

  let audio = 'sub' + operand1 + operand2;
  switch (audio) {
    case 'sub109':
      audio = sub109;
      break;
    case 'sub108':
      audio = sub108;
      break;
    case 'sub107':
      audio = sub107;
      break;
    case 'sub106':
      audio = sub106;
      break;
    case 'sub105':
      audio = sub105;
      break;
    case 'sub104':
      audio = sub104;
      break;
    case 'sub103':
      audio = sub103;
      break;
    case 'sub102':
      audio = sub102;
      break;
    case 'sub101':
      audio = sub101;
      break;
    case 'sub100':
      audio = sub100;
      break;
    case 'sub98':
      audio = sub98;
      break;
    case 'sub97':
      audio = sub97;
      break;
    case 'sub96':
      audio = sub96;
      break;
    case 'sub95':
      audio = sub95;
      break;
    case 'sub94':
      audio = sub94;
      break;
    case 'sub93':
      audio = sub93;
      break;
    case 'sub92':
      audio = sub92;
      break;
    case 'sub91':
      audio = sub91;
      break;
    case 'sub90':
      audio = sub90;
      break;
    case 'sub87':
      audio = sub87;
      break;
    case 'sub86':
      audio = sub86;
      break;
    case 'sub85':
      audio = sub85;
      break;
    case 'sub84':
      audio = sub84;
      break;
    case 'sub83':
      audio = sub83;
      break;
    case 'sub82':
      audio = sub82;
      break;
    case 'sub81':
      audio = sub81;
      break;
    case 'sub80':
      audio = sub80;
      break;
    case 'sub76':
      audio = sub76;
      break;
    case 'sub75':
      audio = sub75;
      break;
    case 'sub74':
      audio = sub74;
      break;
    case 'sub73':
      audio = sub73;
      break;
    case 'sub72':
      audio = sub72;
      break;
    case 'sub71':
      audio = sub71;
      break;
    case 'sub70':
      audio = sub70;
      break;
    case 'sub65':
      audio = sub65;
      break;
    case 'sub64':
      audio = sub64;
      break;
    case 'sub63':
      audio = sub63;
      break;
    case 'sub62':
      audio = sub62;
      break;
    case 'sub61':
      audio = sub61;
      break;
    case 'sub60':
      audio = sub60;
      break;
    case 'sub54':
      audio = sub54;
      break;
    case 'sub53':
      audio = sub53;
      break;
    case 'sub52':
      audio = sub52;
      break;
    case 'sub51':
      audio = sub51;
      break;
    case 'sub50':
      audio = sub50;
      break;
    case 'sub43':
      audio = sub43;
      break;
    case 'sub42':
      audio = sub42;
      break;
    case 'sub41':
      audio = sub41;
      break;
    case 'sub40':
      audio = sub40;
      break;
    case 'sub32':
      audio = sub32;
      break;
    case 'sub31':
      audio = sub31;
      break;
    case 'sub30':
      audio = sub30;
      break;
    case 'sub21':
      audio = sub21;
      break;
    case 'sub20':
      audio = sub20;
      break;
    case 'sub10':
      audio = sub10;
      break;
  }

  // audio plays on component render
  // and `operand1` input box becomes focus
  useEffect(() => {
    console.log(audio);
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
