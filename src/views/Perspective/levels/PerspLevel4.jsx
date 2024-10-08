// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
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

  console.log('render!');
  useEffect(() => {}, [correctTally]);

  // checks if the clickable object is correct (`object` arg is a boolean)
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
      <div className="shapeOverlay flex-col justify-center">
        <ul className="flex align-center justify-center twoSets">
          <li className="emojiImg">🟩</li>
          <li className="emojiImg">🔵</li>
          <li className="emojiImg">🟩</li>
          <li className="emojiImg">🔵</li>
          <li className="emojiImg">🟩</li>
          <li>__</li>
        </ul>
        <hr />
        <ul className="flex justify-center twoSets">
          <li>
            <button className="emojiImg">🟩</button>
          </li>
          <li>
            <button className="emojiImg">🔵</button>
          </li>
        </ul>
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Click on the shape that comes next." />
    </div>
  );
}
