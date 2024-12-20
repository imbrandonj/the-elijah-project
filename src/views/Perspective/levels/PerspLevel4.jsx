// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import { level4 } from './perspProblems.js';
import { randomNum } from '@root/modules/util.js';
import tallyUp from '@root/modules/tallyUp.js';

import '../Perspective.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
  Perspective Level 4

  Level 4 is the first pattern recognition level

  `setLevelEvent` prop (state) is passed from Perspective view
    - if true, renders a <LevelUp /> component to display from Perspective view
*/
export default function PerspLevel4({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const problemSet = level4; // imported problems for this level
  const [problemIndex, setProblemIndex] = useState(
    randomNum(problemSet.length - 1)
  );
  const [pattern, setPattern] = useState(problemSet[problemIndex]);
  const [button1, setButton1] = useState(randomNum(1) == true ? true : false);
  const [button2, setButton2] = useState(button1 === true ? false : true);

  useEffect(() => {
    let newIndex = randomNum(problemSet.length - 1);
    while (newIndex === problemIndex) {
      newIndex = randomNum(problemSet.length - 1);
    }
    setPattern(problemSet[newIndex]);
    setProblemIndex(newIndex);
    const newButton1 = randomNum(1) == true ? true : false;
    setButton1(newButton1);
    setButton2(!newButton1);
  }, [correctTally]);

  // checks if the clickable object is correct (`object` arg is a boolean: true = correct)
  function answerEvent(object) {
    if (object) {
      // module tallyUp.js
      tallyUp(
        20, // `totalQuestions`
        correctTally, // total correct tally (state)
        setCorrectTally, // to set total correct tally (set state)
        setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
      );

      setLevelScore(levelScore + 20);
    } else {
      if (levelScore > 0) setLevelScore(levelScore - 10);
    }
  }

  return (
    <div id="PerspLevel">
      <LevelHeader text="Solve the pattern!" score={levelScore} />
      <div className="shapeOverlay flex-col justify-center align-center">
        <ul className="flex align-center justify-center twoRows">
          {pattern.map((item, index) => {
            if (index === pattern.length - 1) {
              return null;
            }
            return (
              <li key={index} className="emojiImg">
                {item}
              </li>
            );
          })}
          <li>__</li>
        </ul>
        <hr />
        <div className="flex leftRight twoRows">
          <button className="emojiImg" onClick={() => answerEvent(button1)}>
            {button1
              ? pattern[pattern.length - 1]
              : pattern[pattern.length - 2]}
          </button>
          <button className="emojiImg" onClick={() => answerEvent(button2)}>
            {button2
              ? pattern[pattern.length - 1]
              : pattern[pattern.length - 2]}
          </button>
        </div>
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Click on the shape that comes next." />
    </div>
  );
}
