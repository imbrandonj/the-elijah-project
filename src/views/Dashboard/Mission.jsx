// imported components:
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';

// imported modules:
import { getLevels } from '@root/modules/levelManager.js';

import { useEffect } from 'react';

// imported svgs:
import AlphaLiteracy from '@root/assets/svgs/alpha-literacy.svg';
import Arith from '@root/assets/svgs/arith.svg';
import Perspective from '@root/assets/svgs/perspective.svg';

/*
  Mission.jsx

  Display planet selected (`missionSelect` state from MissionSelect.jsx)
*/
export default function Mission({ missionSelect, setView, setLevel }) {
  useEffect(() => {
    getLevels(missionSelect); // get completed levels for the selected planet
  }, []);

  // Begin Level:
  const begin = level => {
    setLevel(level);
    setView(missionSelect); // sets view to planet selected
  };

  return (
    <div id="mission">
      {missionSelect === 'Alpha-Literacy' ? (
        <div className="planet alphaLitColor">
          <img src={AlphaLiteracy} height={200} />
          <h2>Alpha-Literacy</h2>
          <p>
            Navigate the keyboard and become a master of engineering letters.
          </p>
        </div>
      ) : missionSelect === 'Arith' ? (
        <div className="planet arithColor">
          <img src={Arith} height={220} />
          <h2>Arith</h2>
          <p>
            With numbers at your disposal, operate and express your way to
            numeric mastery.
          </p>
        </div>
      ) : missionSelect === 'Perspective' ? (
        <div className="planet perspectiveColor">
          <img src={Perspective} height={200} />
          <h2>Perspective</h2>
          <p>
            Dive into the crevices of your brain to provide your cordial
            perspective of right --or wrong.
          </p>
        </div>
      ) : null}
      <BeginButton text="begin here" onclick={() => begin(1)} />
    </div>
  );
}
