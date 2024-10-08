// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import Panel from '@root/components/Panel/Panel.jsx';
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
import ArithLevel8 from './levels/ArithLevel8.jsx';
import ArithLevel9 from './levels/ArithLevel9.jsx';
import ArithLevel10 from './levels/ArithLevel10.jsx';
import ArithLevel11 from './levels/ArithLevel11.jsx';
import ArithLevel12 from './levels/ArithLevel12.jsx';
import ArithLevel13 from './levels/ArithLevel13.jsx';
import ArithLevel14 from './levels/ArithLevel14.jsx';

// voice: English (UK) Neil
// imported mp3 audio for `LevelEntry` component:
import audioEntry1 from '@root/assets/mp3/ArithEntry1.mp3';
import audioEntry2 from '@root/assets/mp3/ArithEntry2.mp3';
import audioEntry3 from '@root/assets/mp3/ArithEntry3.mp3';
import audioEntry4 from '@root/assets/mp3/ArithEntry4.mp3';
import audioEntry5 from '@root/assets/mp3/ArithEntry5.mp3';
import audioEntry6 from '@root/assets/mp3/ArithEntry6.mp3';
import audioEntry7 from '@root/assets/mp3/ArithEntry7.mp3';
import audioEntry8 from '@root/assets/mp3/ArithEntry8.mp3';
import audioEntry9 from '@root/assets/mp3/ArithEntry9.mp3';
import audioEntry10 from '@root/assets/mp3/ArithEntry10.mp3';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/1234.svg';

import './Arith.css'; // view & component styles

import { useState } from 'react';

/*
  Arith `view` component

  Presents arithmetic problems ~
    • `level` state (context) is used to call the appropriate Arith level component
    • `levelUpEvent` triggers after level completion
    • `begin` triggers true inside the LevelEntry component, which begins the level if true
    • when all levels are finished, the PlanetComplete component is displayed
*/
export default function Arith() {
  const { level } = useView();
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)
  const [levelScore, setLevelScore] = useState(0); // player score used during each level play & LevelUp

  console.log('Render!');

  // return component
  return (
    <div id="ArithWrap" className="flex justify-center">
      <Panel />
      {levelUpEvent ? (
        <LevelUp
          planet="Arith"
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
            voice={audioEntry7}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 7"
            text="ArithEntry7"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 8 ? (
        begin ? (
          <ArithLevel8
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={audioEntry8}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 8"
            text="ArithEntry8"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 9 ? (
        begin ? (
          <ArithLevel9
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={audioEntry9}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 9"
            text="ArithEntry9"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 10 ? (
        begin ? (
          <ArithLevel10
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={audioEntry10}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 10"
            text="ArithEntry10"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 11 ? (
        begin ? (
          <ArithLevel11
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={null}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 11"
            text="ArithEntry11"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 12 ? (
        begin ? (
          <ArithLevel12
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={null}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 12"
            text="ArithEntry12"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 13 ? (
        begin ? (
          <ArithLevel13
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={null}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 13"
            text="ArithEntry13"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : level === 14 ? (
        begin ? (
          <ArithLevel14
            setLevelUpEvent={setLevelUpEvent}
            levelScore={levelScore}
            setLevelScore={setLevelScore}
          />
        ) : (
          <LevelEntry
            voice={null}
            img={imgEntry1}
            planet="Arith"
            h2Text="Arith Level 14"
            text="ArithEntry14"
            setBegin={setBegin}
            setLevelUpEvent={setLevelUpEvent}
          />
        )
      ) : (
        <PlanetComplete path={'Arith'} />
      )}
    </div>
  );
}
