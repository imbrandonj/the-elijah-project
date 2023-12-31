import './SetComplete.css';

// imported modules:
import { getLevels } from '@root/modules/levelManager';

// imported svg:
import bronze from '@root/assets/svgs/bronze.svg';
import rocket from '@root/assets/svgs/rocket-launch.svg';

import { useState, useEffect } from 'react';

export default function SetComplete({
  level,
  newLevel,
  levelScore,
  planet,
  planetImg,
}) {
  const [totalScore, setTotalScore] = useState(0);

  const set = level / 5;

  useEffect(() => {
    const levels = getLevels(planet);
    const tallyTotal = Object.values(levels).reduce((total, score) => {
      return (total += score);
    }, 0);
    setTotalScore(tallyTotal);
  }, []);

  return (
    <div id="setComplete">
      <h3>
        <img src={planetImg} height={70} />
        {planet} exercise set {set} finished
      </h3>
      <div className="setWrap">
        <h2>challenge complete</h2>

        <ul>
          <li>
            Challenge Score: <span>{levelScore}</span>
          </li>
          <li>
            Exercise Set Score: <span>{totalScore}</span>
          </li>
          <li>
            Score Awarded:
            <span>
              <img src={bronze} height="80" />
            </span>
          </li>
        </ul>
      </div>
      <div className="btnRowBundle">
        <button className="" onClick={newLevel}>
          Return to Base
        </button>
        <button onClick={newLevel}>Continue to Next Set</button>
        <button className="parent">
          <span className="erase">Reset Score</span>
        </button>
      </div>
    </div>
  );
}
