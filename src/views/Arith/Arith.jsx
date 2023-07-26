// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import ArithLevel1Entry from './levels/ArithLevel1Entry.jsx';
import ArithLevel2Entry from './levels/ArithLevel2Entry.jsx';

import './Arith.css'; // view & component styles

// imported hooks:
import { useState } from 'react';

/*
  Arith `view` component

  Presents arithmetic problems ~
    • Level up event triggers after level completion
    • `setView` prop (state) is passed to RocketHeader for view redirect
    • `level` prop (state) is used to display the Arith level
    • `setLevel` prop (state) is used to set or modify the Arith level
*/
export default function Arith({ setView, level, setLevel }) {
  const [levelEvent, setLevelEvent] = useState(false); // toggle level (bool) to display `LevelUp` component

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />
      <div id="mathPath">
        {levelEvent ? (
          <LevelUp
            path="Math"
            level={level}
            setLevel={setLevel}
            setLevelEvent={setLevelEvent}
          />
        ) : level === 1 ? (
          <ArithLevel1Entry setLevelEvent={setLevelEvent} />
        ) : level === 2 ? (
          <ArithLevel2Entry setLevelEvent={setLevelEvent} />
        ) : null}
      </div>
    </div>
  );
}
