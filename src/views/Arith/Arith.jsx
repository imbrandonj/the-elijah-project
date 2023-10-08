// imported internal components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';

// imported levels:
import ArithLevel1 from './levels/ArithLevel1.jsx';
import ArithLevel2 from './levels/ArithLevel2.jsx';
import ArithLevel3 from './levels/ArithLevel3.jsx';

// imported mp3 audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/ArithEntry1.mp3';
import audioEntry2 from '@root/assets/mp3/ArithEntry2.mp3';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/1234.svg';

import './Arith.css'; // view & component styles

// imported hooks:
import { useState } from 'react';

/*
  Arith `view` component
  voice: English (UK) Neil

  Presents arithmetic problems ~
    • Level up event triggers after level completion
    • `setView` prop (state) is passed to RocketHeader for view redirect
    • `level` prop (state) is used to display the Arith level
    • `setLevel` prop (state) is used to set or modify the Arith level
*/
export default function Arith({ setView, level, setLevel }) {
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />
      <div id="ArithWrap">
        {levelUpEvent ? (
          <LevelUp
            path="Arith"
            level={level}
            setLevel={setLevel}
            setLevelUpEvent={setLevelUpEvent}
            setBegin={setBegin}
          />
        ) : level === 1 ? (
          begin ? (
            <ArithLevel1 setLevelUpEvent={setLevelUpEvent} />
          ) : (
            <LevelEntry
              voice={audioEntry1}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 1"
              text="ArithEntry1"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 2 ? (
          begin ? (
            <ArithLevel2 setLevelUpEvent={setLevelUpEvent} />
          ) : (
            <LevelEntry
              voice={audioEntry2}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 2"
              text="ArithEntry2"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 3 ? (
          begin ? (
            <ArithLevel3 setLevelUpEvent={setLevelUpEvent} />
          ) : (
            <LevelEntry
              voice={null}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 3"
              text="ArithEntry3"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : null}
      </div>
    </div>
  );
}
