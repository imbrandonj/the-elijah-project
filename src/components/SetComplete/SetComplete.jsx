import './SetComplete.css';

// imported modules:
import { useView } from '@root/contexts/ViewContext.jsx';
import { getLevels } from '@root/modules/levelManager.js';

// imported svg:
import bronze from '@root/assets/svgs/bronze.svg';

import { useState, useEffect } from 'react';

export default function SetComplete({
  newLevel, // fn that increments level; sets state: setLevel(level + 1), setBegin(false), setLevelUpEvent(false)
  levelScore,
  planet,
  planetImg,
}) {
  const { level, setView } = useView();
  const [totalScore, setTotalScore] = useState(0);

  const set = level / 5;

  const returnHome = () => {
    setView('Dashboard');
  };

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
            Set Award:
            <span>
              <img src={bronze} height="80" />
            </span>
          </li>
        </ul>
      </div>
      <div className="btnRowBundle">
        <button className="" onClick={returnHome}>
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
