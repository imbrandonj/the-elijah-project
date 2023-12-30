// imported components:
import { useView } from '@root/components/ViewContext.jsx';
import RocketHeader from '@root/components/RocketHeader/RocketHeader';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import LevelEntry from '@root/components/LevelEntry/LevelEntry.jsx';
import PlanetComplete from '@root/components/PlanetComplete/PlanetComplete.jsx';
import Popup from '@root/components/Popup/Popup.jsx';

// imported levels:
import PerspLevel1 from './levels/PerspLevel1.jsx';

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

  // temporary pop up message:
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    // passed to the Popup component
    setShowPopup(false);
  };

  console.log('Render!');

  let audioEntry1 = null;

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
              img={imgEntry1}
              planet="Persp"
              h2Text="Perspective Level 1"
              text="PerspEntry1"
              setBegin={setBegin}
              setLevelUpEvent={setLevelUpEvent}
            />
          )
        ) : (
          <PlanetComplete path={'Persp'} />
        )}
      </div>

      {showPopup && (
        <Popup
          closePopup={closePopup}
          para1={
            'Perspective is the newest planet added. It is very much under construction. Feel free to take a look though. :)'
          }
          para2={null}
          buttonText={'continue to planet Perspective'}
        />
      )}
    </div>
  );
}
