// imported components:
import { useView } from '@root/components/ViewContext.jsx';
import RocketHeader from '@root/components/RocketHeader/RocketHeader';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';
import PlanetComplete from '@root/components/PlanetComplete/PlanetComplete.jsx';

// imported levels:
import PerspLevel1 from './levels/PerspLevel1.jsx';
import PerspLevel2 from './levels/PerspLevel2.jsx';

// voice: en-US-Neural2-D
// imported mp3 audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/PerspEntry1.mp3';
import audioEntry2 from '@root/assets/mp3/PerspEntry2.mp3';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/shapes.svg';

import './Perspective.css'; // component styles

import { useState } from 'react';

/*
  Perspective `view` component

*/
export default function Perspective() {
  const { setView, level, setLevel } = useView();
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)
  const [levelScore, setLevelScore] = useState(0); // player score used during each level play & LevelUp

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader />

      <div id="PerspWrap">
        {levelUpEvent ? (
          <LevelUp
            planet="Persp"
            levelScore={levelScore}
            setLevelScore={setLevelScore}
            setLevelUpEvent={setLevelUpEvent}
            setBegin={setBegin}
          />
        ) : level === 1 ? (
          begin ? (
            <PerspLevel1
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry1}
              img={imgEntry1}
              planet="Persp"
              h2Text="Perspective Level 1"
              text="PerspEntry1"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 2 ? (
          begin ? (
            <PerspLevel2
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry2}
              img={imgEntry1}
              planet="Persp"
              h2Text="Perspective Level 2"
              text="PerspEntry2"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : (
          <PlanetComplete path={'Persp'} />
        )}
      </div>
    </div>
  );
}
