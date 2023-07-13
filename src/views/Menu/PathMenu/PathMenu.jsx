// imported components:
import RocketButton from '@root/components/RocketButton/RocketButton.jsx';

// imported hooks:
import { useState } from 'react';

import './PathMenu.css'; // component styles

/*
  Path Menu Component
*/
export default function PathMenu({ setView }) {
  const [pathSelect, setPathSelect] = useState('main');

  // click event to begin Math path:
  const setPathMath = () => setView('SetMenuMath');
  // click event to begin Logic path:
  const setPathLogic = () => setView('SetMenuLogic');
  // click event to begin Literacy path:
  const setPathLit = () => setView('SetMenuLiteracy');

  return (
    <div id="pathMenu">
      <div className="cardWrapper">
        <h1>The Elijah Project</h1>
        <div>
          <button onClick={setPathMath}>Math</button>
          <button onClick={setPathLogic}>Logic</button>
          <button onClick={setPathLit}>Literacy</button>
          <footer id="pathFooter">
            <RocketButton
              text="Home"
              position="behind"
              movement="vertical"
              setView={setView}
              view="MainMenu"
            />
          </footer>
        </div>
      </div>
    </div>
  );
}
