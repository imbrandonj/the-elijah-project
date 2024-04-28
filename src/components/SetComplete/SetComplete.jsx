import './SetComplete.css';

// imported components:
import RedirectButton from '../RedirectButton/RedirectButton';
import EraseButton from '../EraseButton/EraseButton';
import { useView } from '@root/contexts/ViewContext.jsx';

// imported modules:
import { getLevels } from '@root/modules/levelManager.js';

// imported svg:
import bronze from '@root/assets/svgs/bronze.svg';

import { useState, useEffect } from 'react';

export default function SetComplete({
  newLevel, // fn that increments level; sets state: setLevel(level + 1), setBegin(false), setLevelUpEvent(false)
  retry, // retry fn allows user to retry challenge level
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

  // obtain set score:
  useEffect(() => {
    const levels = getLevels(planet);
    const tallyTotal = Object.values(levels).reduce((total, score) => {
      return (total += score);
    }, 0);
    setTotalScore(tallyTotal);
  }, []);

  return (
    <div id="setComplete">
      <h3 className="flex align-center small-caps italic">
        <img src={planetImg} height={70} />
        {planet} exercise set {set} finished
      </h3>
      <div className="setWrap flex-col align-center">
        <h2 className="small-caps">challenge complete</h2>

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
      <div className="flex justify-evenly">
        <RedirectButton
          text="Return to Base"
          onclick={returnHome}
          color="black"
          css={'bkg-blk-overlay clr-btn-blue small-caps'}
        />
        <RedirectButton
          text="Continue to Next Set"
          onclick={newLevel}
          color="black"
          css={'bkg-blk-overlay clr-btn-blue small-caps'}
        />
        <EraseButton
          text="Retry Challenge"
          onclick={retry}
          color="black"
          css={'small-caps'}
        />
      </div>
    </div>
  );
}
