// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';

// imported levels:
import AlphaLevel1 from './levels/AlphaLevel1.jsx';
import AlphaLevel2 from './levels/AlphaLevel2.jsx';

// imported audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/AlphaEntry1.mp3';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/astro-usa.svg';

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
export default function AlphaLit({ setView, level, setLevel }) {
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />
      <div id="litPath">
        {levelUpEvent ? (
          <LevelUp
            path="Literacy"
            level={level}
            setLevel={setLevel}
            setLevelUpEvent={setLevelUpEvent}
          />
        ) : level === 1 ? (
          begin ? (
            <AlphaLevel1 />
          ) : (
            <LevelEntry
              voice={audioEntry1}
              img={imgEntry1}
              h2Text="Alpha-Literacy Level 1"
              text="AlphaEntry1"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 2 ? (
          begin ? (
            <AlphaLevel2 />
          ) : (
            <LevelEntry
              h2Text="Alpha-Literacy Level 2"
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : null}
      </div>
    </div>
  );
}
