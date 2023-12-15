import './SetComplete.css';

// imported modules:
import { getLevels } from '@root/modules/levelManager';

import { useState, useEffect } from 'react';

export default function SetComplete({ level, newLevel, planet, planetImg }) {
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
        <p>Set Score: {totalScore} </p>
        <button onClick={newLevel}>Continue to Next Set</button>
      </div>
    </div>
  );
}
