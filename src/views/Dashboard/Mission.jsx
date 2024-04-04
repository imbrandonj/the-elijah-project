// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';
import SetButton from '@root/components/SetButton/SetButton.jsx';

// imported modules:
import { getLevels } from '@root/modules/levelManager.js';

import { useState, useEffect } from 'react';

// imported svgs:
import AlphaLiteracy from '@root/assets/svgs/alpha-literacy.svg';
import Arith from '@root/assets/svgs/arith.svg';
import Perspective from '@root/assets/svgs/perspective.svg';

/*
  Mission.jsx

  Display planet selected (`missionSelect` state from MissionSelect.jsx)
*/
export default function Mission({ missionSelect }) {
  const { setView, setLevel } = useView();
  const [setScores, setSetScores] = useState();
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // get completed levels for the selected planet
    const finishedLevels = getLevels(missionSelect); // this is an object with level (key) and score (value)
    const levelKeys = Object.keys(finishedLevels);
    console.log(finishedLevels);

    // obtain scores for each set
    const scoreTotals = [];
    for (let i = 0; i < levelKeys.length; i += 5) {
      // only create a set button if the entire set is complete (5 levels: i + 4)
      if (levelKeys.length >= i + 5) {
        let scores = Object.values(finishedLevels).slice(i, i + 5); // a set is 5 levels
        const sum = scores.reduce((accumulator, i) => accumulator + i, 0);
        scoreTotals.push(sum);
      }
    }

    setSetScores(scoreTotals);

    if (scoreTotals.length > 0) {
      setFirstVisit(false);
    }
  }, []);

  // Begin Level:
  const begin = level => {
    setLevel(level);
    setView(missionSelect); // sets view to planet selected
  };

  return (
    <div id="mission" className="flex align-center justify-evenly">
      {missionSelect === 'Alpha-Literacy' ? (
        <div className="planet flex-col alphaLitColor">
          <img src={AlphaLiteracy} height={200} />
          <h2>Alpha-Literacy</h2>
          <p>
            Navigate the keyboard and become a master of engineering letters.
          </p>
        </div>
      ) : missionSelect === 'Arith' ? (
        <div className="planet flex-col arithColor">
          <img src={Arith} height={220} />
          <h2>Arith</h2>
          <p>
            With numbers at your disposal, operate and express your way to
            numeric mastery.
          </p>
        </div>
      ) : missionSelect === 'Perspective' ? (
        <div className="planet flex-col perspectiveColor">
          <img src={Perspective} height={200} />
          <h2>Perspective</h2>
          <p>
            Dive into the crevices of your brain to provide your cordial
            perspective of right --or wrong.
          </p>
        </div>
      ) : null}
      <ul className="levelSection flex-col">
        {firstVisit ? (
          <BeginButton text={'begin here'} onclick={() => begin(1)} />
        ) : (
          setScores.map((score, i) => (
            <li key={score}>
              <SetButton
                set={i + 1}
                score={score}
                onclick={() => begin(i === 0 ? i + 1 : i * 5 + 1)} // each set begins a level in increments of 5: 1, 6, 11, 16, etc.
              />
            </li>
          ))
        )}
        {firstVisit ? null : (
          <BeginButton
            text={`Begin Set ${setScores.length + 1}`}
            onclick={() => begin(setScores.length * 5 + 1)}
          />
        )}
      </ul>
    </div>
  );
}
