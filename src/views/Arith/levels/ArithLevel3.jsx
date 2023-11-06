// imported internal components:
import LevelHeader from '@root/components/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { randomNum } from '@root/modules/util.js';
import speakText from '@root/modules/speakText.js';
import tallyUp from '@root/modules/tallyUp.js';

// mp3 audio imports:
import add00 from '@root/assets/mp3/add00.mp3';
import add01 from '@root/assets/mp3/add01.mp3';
import add02 from '@root/assets/mp3/add02.mp3';
import add03 from '@root/assets/mp3/add03.mp3';
import add04 from '@root/assets/mp3/add04.mp3';
import add05 from '@root/assets/mp3/add05.mp3';
import add10 from '@root/assets/mp3/add10.mp3';
import add11 from '@root/assets/mp3/add11.mp3';
import add12 from '@root/assets/mp3/add12.mp3';
import add13 from '@root/assets/mp3/add13.mp3';
import add14 from '@root/assets/mp3/add14.mp3';
import add15 from '@root/assets/mp3/add15.mp3';
import add20 from '@root/assets/mp3/add20.mp3';
import add21 from '@root/assets/mp3/add21.mp3';
import add22 from '@root/assets/mp3/add22.mp3';
import add23 from '@root/assets/mp3/add23.mp3';
import add24 from '@root/assets/mp3/add24.mp3';
import add25 from '@root/assets/mp3/add25.mp3';
import add30 from '@root/assets/mp3/add30.mp3';
import add31 from '@root/assets/mp3/add31.mp3';
import add32 from '@root/assets/mp3/add32.mp3';
import add33 from '@root/assets/mp3/add33.mp3';
import add34 from '@root/assets/mp3/add34.mp3';
import add35 from '@root/assets/mp3/add35.mp3';
import add40 from '@root/assets/mp3/add40.mp3';
import add41 from '@root/assets/mp3/add41.mp3';
import add42 from '@root/assets/mp3/add42.mp3';
import add43 from '@root/assets/mp3/add43.mp3';
import add44 from '@root/assets/mp3/add44.mp3';
import add45 from '@root/assets/mp3/add45.mp3';
import add50 from '@root/assets/mp3/add50.mp3';
import add51 from '@root/assets/mp3/add51.mp3';
import add52 from '@root/assets/mp3/add52.mp3';
import add53 from '@root/assets/mp3/add53.mp3';
import add54 from '@root/assets/mp3/add54.mp3';
import add55 from '@root/assets/mp3/add55.mp3';

import '../Arith.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
    Arith Level 3 Component

    This level uses 3 input boxes for a binary operation
    Format: a + b = c
    Where the user must input the numbers listed from the given audio (a, b, c)

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
  let audio = 'add' + operand1 + operand2;
  switch (audio) {
    case 'add00':
      audio = add00;
      break;
    case 'add01':
      audio = add01;
      break;
    case 'add02':
      audio = add02;
      break;
    case 'add03':
      audio = add03;
      break;
    case 'add04':
      audio = add04;
      break;
    case 'add05':
      audio = add05;
      break;
    case 'add10':
      audio = add10;
      break;
    case 'add11':
      audio = add11;
      break;
    case 'add12':
      audio = add12;
      break;
    case 'add13':
      audio = add13;
      break;
    case 'add14':
      audio = add14;
      break;
    case 'add15':
      audio = add15;
      break;
    case 'add20':
      audio = add20;
      break;
    case 'add21':
      audio = add21;
      break;
    case 'add22':
      audio = add22;
      break;
    case 'add23':
      audio = add23;
      break;
    case 'add24':
      audio = add24;
      break;
    case 'add25':
      audio = add25;
      break;
    case 'add30':
      audio = add30;
      break;
    case 'add31':
      audio = add31;
      break;
    case 'add32':
      audio = add32;
      break;
    case 'add33':
      audio = add33;
      break;
    case 'add34':
      audio = add34;
      break;
    case 'add35':
      audio = add35;
      break;
    case 'add40':
      audio = add40;
      break;
    case 'add41':
      audio = add41;
      break;
    case 'add42':
      audio = add42;
      break;
    case 'add43':
      audio = add43;
      break;
    case 'add44':
      audio = add44;
      break;
    case 'add45':
      audio = add45;
      break;
    case 'add50':
      audio = add50;
      break;
    case 'add51':
      audio = add51;
      break;
    case 'add52':
      audio = add52;
      break;
    case 'add53':
      audio = add53;
      break;
    case 'add54':
      audio = add54;
      break;
    case 'add55':
      audio = add55;
      break;
  }

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

      setLevelScore(levelScore + 10);

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
      <LevelHeader
        text="Listen to the operation and type the numbers in their appropriate boxes."
        score={levelScore}
      />
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
