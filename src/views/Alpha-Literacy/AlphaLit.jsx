// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader.jsx';
import LevelUp from '@root/components/LevelUp/LevelUp.jsx';
import AlphaLevel1Entry from './levels/AlphaLevel1Entry.jsx';
import AlphaLevel2Entry from './levels/AlphaLevel2Entry.jsx';

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
  const [levelEvent, setLevelEvent] = useState(false); // toggle level (bool) to display `LevelUp` component

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />
      <div id="litPath">
        {levelEvent ? (
          <LevelUp
            path="Literacy"
            level={level}
            setLevel={setLevel}
            setLevelEvent={setLevelEvent}
          />
        ) : level === 1 ? (
          <AlphaLevel1Entry setLevelEvent={setLevelEvent} />
        ) : level === 2 ? (
          <AlphaLevel2Entry setLevelEvent={setLevelEvent} />
        ) : null}
      </div>
    </div>
  );
}
