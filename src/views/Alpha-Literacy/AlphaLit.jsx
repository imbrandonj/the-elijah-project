// imported components:
import { useView } from '@root/components/ViewContext.jsx';
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';
import PlanetComplete from '@root/components/PlanetComplete/PlanetComplete.jsx';

// imported levels:
import AlphaLevel1 from './levels/AlphaLevel1.jsx';
import AlphaLevel2 from './levels/AlphaLevel2.jsx';
import AlphaLevel3 from './levels/AlphaLevel3.jsx';
import AlphaLevel4 from './levels/AlphaLevel4.jsx';
import AlphaLevel5 from './levels/AlphaLevel5.jsx';

// voice: en-US-Studio-O
// imported audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/AlphaEntry1.mp3';
import audioEntry2 from '@root/assets/mp3/AlphaEntry2.mp3';
import audioEntry3 from '@root/assets/mp3/AlphaEntry3.mp3';
import audioEntry4 from '@root/assets/mp3/AlphaEntry4.mp3';
import audioEntry5 from '@root/assets/mp3/AlphaEntry5.mp3';

// imported img for `LevelEntry` component:
import astroUSA from '@root/assets/svgs/astro-usa.svg';

import './AlphaLit.css'; // view & component styles

// imported hooks:
import { useState } from 'react';

/*
  Alpha-Literacy `view` component

  Presents alphabetical literacy problems ~
    • Level up event triggers after level completion
    • `setView` prop (state) is passed to RocketHeader for view redirect
    • `level` prop (state) is used to display the Alpha-Lit level
    • `setLevel` prop (state) is used to set or modify the Alpha-Lit level
 */
export default function AlphaLit() {
  const { setView, level, setLevel } = useView();
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)
  const [levelScore, setLevelScore] = useState(0); // player score used during each level play & LevelUp

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader />
      <div id="litPath">
        {levelUpEvent ? (
          <LevelUp
            planet="AlphaLit"
            levelScore={levelScore}
            setLevelScore={setLevelScore}
            setLevelUpEvent={setLevelUpEvent}
            setBegin={setBegin}
          />
        ) : level === 1 ? (
          begin ? (
            <AlphaLevel1
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry1}
              img={astroUSA}
              planet="AlphaLit"
              h2Text="Alpha-Literacy Level 1"
              text="AlphaEntry1"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 2 ? (
          begin ? (
            <AlphaLevel2
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry2}
              img={astroUSA}
              planet="AlphaLit"
              h2Text="Alpha-Literacy Level 2"
              text="AlphaEntry2"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 3 ? (
          begin ? (
            <AlphaLevel3
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry3}
              img={astroUSA}
              planet="AlphaLit"
              h2Text="Alpha-Literacy Level 3"
              text="AlphaEntry3"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 4 ? (
          begin ? (
            <AlphaLevel4
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry4}
              img={astroUSA}
              planet="AlphaLit"
              h2Text="Alpha-Literacy Level 4"
              text="AlphaEntry4"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 5 ? (
          begin ? (
            <AlphaLevel5
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry5}
              img={astroUSA}
              planet="AlphaLit"
              h2Text="Alpha-Literacy Level 5"
              text="AlphaEntry5"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : (
          <PlanetComplete path={'AlphaLit'} />
        )}
      </div>
    </div>
  );
}
