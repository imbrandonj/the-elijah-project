// imported components:
import SetMenu from '../SetMenu/SetMenu.jsx';
import LogicPath from '@root/views/Perspective/LogicPath/LogicPath.jsx';
import RocketButton from '@root/components/RocketButton/RocketButton.jsx';

// imported hooks:
import { useState } from 'react';

import './PathMenu.css'; // component styles

/*
  Path Menu Component
*/
export default function PathMenu() {
  const [pathSelect, setPathSelect] = useState('main');

  // click event to begin Math path:
  const setPathMath = () => setPathSelect(<SetMenu path={'math'} />);
  // click event to begin Logic path:
  const setPathLogic = () => setPathSelect(<LogicPath />);
  // click event to begin Literacy path:
  const setPathLit = () => setPathSelect(<SetMenu path={'literacy'} />);

  // initial render without user path selection:
  if (pathSelect === 'main') {
    return (
      <div id="pathMenu">
        <div className="cardWrapper">
          <h1>The Elijah Project</h1>
          <div>
            <button onClick={setPathMath}>Math</button>
            <button onClick={setPathLogic}>Logic</button>
            <button onClick={setPathLit}>Literacy</button>
            <footer id="pathFooter">
              <RocketButton text="Home" position="behind" movement="vertical" />
            </footer>
          </div>
        </div>
      </div>
    );
    // render after user path selection:
  } else {
    return pathSelect; // renders SetMenu with `subject` argument
  }
}
