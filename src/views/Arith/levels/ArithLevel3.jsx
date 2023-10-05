// imported internal components:
import Objective from '@root/components/Objective.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { level3 } from './ArithProblems.js';
import generateProblem from '@root/modules/generateProblem.js';
import tallyUp from '@root/modules/tallyUp.js';

import '../Arith.css';

// imported hooks:
import { useState, useRef } from 'react';

/*
    Arith Level 3 Component

    This level uses 3 input boxes for a binary operation
    Format: a + b = c
    Where the user must input the numbers listed from the given audio

    `setLevelEvent` prop (state) is passed from AlphaLit view
      - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function ArithLevel3({ setLevelUpEvent }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // total correct tally

  const problemSet = level3; // imported problems for this level

  // `problem` is an object with `question` & `answer` properties
  const problem = generateProblem(problemSet, problemHistory, true); // generate a unique problem

  // math input check, in this level, used 3 times, 1 for each input box
  function mathInputCheck(event) {
    // listen for enter keydown
    if (event.key === 'Enter') {
      // set the value of the user's answer
      let inputValue = parseInt(event.target.value); // math answers must be parsed to int

      event.target.value = ''; // clears the input box

      // correct answer event:
      if (inputValue === problem.answer) {
        // module tallyUp.js
        tallyUp(
          20, // `totalQuestions`
          correctTally, // total correct tally (state)
          setCorrectTally, // to set total correct tally (set state)
          setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
        );
      }
    }
  }

  return (
    <div id="ArithLevel">
      <Objective text="Listen to the operation and type the numbers in their appropriate boxes." />
      <div id="mathQABundle">
        <p id="mathQ">
          <input
            id="operand1"
            class="operandBox"
            type="text"
            onKeyDown={event => mathInputCheck(event)}
          />{' '}
          +{' '}
          <input
            id="operand2"
            class="operandBox"
            type="text"
            onKeyDown={event => mathInputCheck(event)}
          />{' '}
          =
        </p>
        <input
          id="mathAns"
          type="text"
          onKeyDown={event => mathInputCheck(event)}
        />
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Use your left hand fingers to count the left number and right hand fingers to count the right number." />
    </div>
  );
}
