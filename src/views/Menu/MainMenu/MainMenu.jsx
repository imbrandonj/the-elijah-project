// imported components:
import PathMenu from '../PathMenu/PathMenu.jsx';
import About from '../About/About.jsx';

// imported hooks:
import { useState } from 'react';

import './MainMenu.css'; // component styles

/*
  MainMenu
  
    - This a menu page that has 3 paths:
      1) start, which calls <PathMenu />
      2) about, which calls <About />
      3) profile, which is not yet complete
*/
export default function MainMenu({ setView }) {
  const start = () => {
    setView('PathMenu');
  };

  const about = () => {
    setView('About');
  };

  return (
    <div id="mainMenu">
      <div className="cardWrapper">
        <h1>The Elijah Project</h1>
        <button onClick={start}>Start</button>
        <button onClick={about}>About</button>
        <button>Profile</button>
      </div>
    </div>
  );
}
