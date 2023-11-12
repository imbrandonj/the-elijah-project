// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';

// imported levels:
import PerspLevel1 from './levels/PerspLevel1.jsx';

// imported img for `LevelEntry` component:
import imgEntry1 from '@root/assets/svgs/shapes.svg';

import './Perspective.css'; // component styles

import { useState } from 'react';

/*
  Perspective `view` component

*/
export default function Perspective({ setView, level, setLevel }) {
  const [levelUpEvent, setLevelUpEvent] = useState(false); // toggle level (bool) to display `LevelUp` component
  const [begin, setBegin] = useState(false); // toggle LevelEntry (false) or the level (true)
  const [levelScore, setLevelScore] = useState(0); // player score used during each level play & LevelUp

  console.log('Render!');

  let audioEntry1 = null;

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />

      <div id="PerspWrap">
        {levelUpEvent ? (
          <LevelUp
            path="Persp"
            level={level}
            setLevel={setLevel}
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
        ) : null}
      </div>
    </div>
  );
}
