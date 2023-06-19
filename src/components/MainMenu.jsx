// imported components:
import PathMenu from './PathMenu';
import About from './About';

// imported hooks:
import { useState } from 'react';

export default function MainMenu() {
  const [menuSelect, setMenuSelect] = useState('main');

  const start = () => {
    setMenuSelect('start');
  };

  const about = () => {
    setMenuSelect('about');
  };

  if (menuSelect === 'main') {
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
  } else if (menuSelect === 'start') {
    return <PathMenu />;
  } else if (menuSelect === 'about') {
    return <About />;
  }
}
