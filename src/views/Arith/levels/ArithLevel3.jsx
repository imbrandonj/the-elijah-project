// imported internal components:
import Objective from '@root/components/Objective.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { randomNum } from '@root/modules/util.js';
import tallyUp from '@root/modules/tallyUp.js';

// import add55 from
// import add22 from

import '../Arith.css';

// imported hooks:
import { useState, useRef } from 'react';

/*
    Arith Level 3 Component

    This level uses 3 input boxes for a binary operation
    Format: a + b = c
    Where the user must input the numbers listed from the given audio

    `setLevelEvent` prop (state) is passed from Arith view
      - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel3({ setLevelUpEvent }) {
  // select 2 random numbers as operands, max = 5
  const [operand1, setOperand1] = useState(randomNum(5));
  const [operand2, setOperand2] = useState(randomNum(5));
  const [sum, setSum] = useState(operand1 + operand2); // sum of the 2 generated operands
  const [audio, setAudio] = useState('add' + operand1 + operand2); // audio of the operation using the 2 generated operands

  // user provided input:
  const [userOperand1, setUserOperand1] = useState(''); // default=displays empty input box
  const [userOperand2, setUserOperand2] = useState(''); // default=displays empty input box
  const [userSum, setUserSum] = useState(' '); // default=displays empty input box

  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  console.log(audio);

  console.log(`operand1: ${operand1}`);
  console.log(`operand2: ${operand2}`);
  console.log(`sum: ${sum}`);
  console.log(`userOperand1: ${userOperand1}`);
  console.log(`userOperand2: ${userOperand2}`);
  console.log(`userSum: ${userSum}`);

  let correct = false;

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
      setSum(operand1 + operand2);

      // module tallyUp.js
      tallyUp(
        20, // `totalQuestions`
        correctTally, // total correct tally (state)
        setCorrectTally, // to set total correct tally (set state)
        setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
      );
    } else {
      console.log(false);
    }
  }

  return (
    <div id="ArithLevel">
      <Objective text="Listen to the operation and type the numbers in their appropriate boxes." />
      <div id="mathQABundle">
        <p id="mathQ">
          <input
            id="operand1"
            className="operandBox"
            type="text"
            value={userOperand1}
            onChange={event => setUserOperand1(parseInt(event.target.value))}
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
            onChange={event => setUserOperand2(parseInt(event.target.value))}
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
          onChange={event => setUserSum(parseInt(event.target.value))}
          onKeyDown={event => {
            // listen for enter keydown
            if (event.key === 'Enter') answerEvent();
          }}
        />
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Use your left hand fingers to count the left number and right hand fingers to count the right number." />
    </div>
  );
}
