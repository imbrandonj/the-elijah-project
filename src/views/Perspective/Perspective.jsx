// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import Panel from '@root/components/Panel/Panel.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';
import PlanetComplete from '@root/components/PlanetComplete/PlanetComplete.jsx';

// imported levels:
import PerspLevel1 from './levels/PerspLevel1.jsx';
import PerspLevel2 from './levels/PerspLevel2.jsx';
import PerspLevel3 from './levels/PerspLevel3.jsx';
import PerspLevel4 from './levels/PerspLevel4.jsx';

// voice: en-US-Neural2-D
// imported mp3 audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/PerspEntry1.mp3';
import audioEntry2 from '@root/assets/mp3/PerspEntry2.mp3';
import audioEntry3 from '@root/assets/mp3/PerspEntry3.mp3';
import audioEntry4 from '@root/assets/mp3/PerspEntry2.mp3';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/shapes.svg';

import './Perspective.css'; // component styles

import { useState } from 'react';

/*
  Perspective `view` component

*/
export default function Perspective() {
  const { level } = useView();
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)
  const [levelScore, setLevelScore] = useState(0); // player score used during each level play & LevelUp

  console.log('Render!');

  // return component
  return (
    <div id="PerspWrap" className="flex justify-center">
      <Panel />
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
      ) : level === 3 ? (
        begin ? (
          <PerspLevel3
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={audioEntry3}
            img={imgEntry1}
            planet="Persp"
            h2Text="Perspective Level 3"
            text="PerspEntry3"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 4 ? (
        begin ? (
          <PerspLevel4
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={audioEntry4}
            img={imgEntry1}
            planet="Persp"
            h2Text="Perspective Level 4"
            text="PerspEntry4"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : (
        <PlanetComplete path={'Persp'} />
      )}
    </div>
  );
}
