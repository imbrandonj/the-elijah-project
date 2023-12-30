// imported internal components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';
import PlanetComplete from '@root/components/PlanetComplete/PlanetComplete.jsx';

// imported levels:
import ArithLevel1 from './levels/ArithLevel1.jsx';
import ArithLevel2 from './levels/ArithLevel2.jsx';
import ArithLevel3 from './levels/ArithLevel3.jsx';
import ArithLevel4 from './levels/ArithLevel4.jsx';
import ArithLevel5 from './levels/ArithLevel5.jsx';
import ArithLevel6 from './levels/ArithLevel6.jsx';
import ArithLevel7 from './levels/ArithLevel7.jsx';

// imported mp3 audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/ArithEntry1.mp3';
import audioEntry2 from '@root/assets/mp3/ArithEntry2.mp3';
import audioEntry3 from '@root/assets/mp3/ArithEntry3.mp3';
import audioEntry4 from '@root/assets/mp3/ArithEntry4.mp3';
import audioEntry5 from '@root/assets/mp3/ArithEntry5.mp3';
import audioEntry6 from '@root/assets/mp3/ArithEntry6.mp3';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/1234.svg';

import './Arith.css'; // view & component styles

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
  const [levelScore, setLevelScore] = useState(0); // player score used during each level play & LevelUp

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />
      <div id="ArithWrap">
        {levelUpEvent ? (
          <LevelUp
            planet="Arith"
            level={level}
            setLevel={setLevel}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
            setLevelUpEvent={setLevelUpEvent}
            setBegin={setBegin}
          />
        ) : level === 1 ? (
          begin ? (
            <ArithLevel1
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
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
            <ArithLevel2
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
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
            <ArithLevel3
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry3}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 3"
              text="ArithEntry3"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 4 ? (
          begin ? (
            <ArithLevel4
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry4}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 4"
              text="ArithEntry4"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 5 ? (
          begin ? (
            <ArithLevel5
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry5}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 5"
              text="ArithEntry5"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 6 ? (
          begin ? (
            <ArithLevel6
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={audioEntry6}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 6"
              text="ArithEntry6"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : level === 7 ? (
          begin ? (
            <ArithLevel7
              setLevelUpEvent={setLevelUpEvent}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
            />
          ) : (
            <LevelEntry
              voice={null}
              img={imgEntry1}
              planet="Arith"
              h2Text="Arith Level 7"
              text="ArithEntry7"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : (
          <PlanetComplete path={'Arith'} />
        )}
      </div>
    </div>
  );
}
