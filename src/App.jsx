// imported views:
import MainMenu from './views/Menu/MainMenu.jsx';
import About from './views/Menu/About/About.jsx';
import Dashboard from './views/Dashboard/Dashboard.jsx';
import PathMenu from './views/Menu/PathMenu/PathMenu.jsx';
import SetMenu from './views/Menu/SetMenu/SetMenu.jsx';
import LogicPath from './views/Perspective/LogicPath/LogicPath.jsx';

// external imports:
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

/*
  App.jsx

    This component is the entry to the application.

    - If the viewport is ever shrunk, width is checked
      - If width is inadequate, content will be a notification saying so
    
    - App calls the appropriate view to display,
      as this React application is unorthodox and operates more like a game.
      - Button redirection also utilizes `setView` state versus browser redirect
*/
const App = () => {
  const [view, setView] = useState('MainMenu');
  const [adequateWidth, setAdequateWidth] = useState(window.innerWidth >= 1100);

  const checkViewportWidth = () => {
    setAdequateWidth(window.innerWidth >= 1100);
  };

  window.addEventListener('resize', checkViewportWidth);

  if (adequateWidth) {
    return (
      <div>
        {view === 'MainMenu' ? (
          <MainMenu setView={setView} />
        ) : view === 'About' ? (
          <About setView={setView} />
        ) : view === 'Dashboard' ? (
          <Dashboard setView={setView} />
        ) : view === 'PathMenu' ? (
          <PathMenu setView={setView} />
        ) : view === 'SetMenuMath' ? (
          <SetMenu setView={setView} path={'math'} />
        ) : view === 'SetMenuLogic' ? (
          <LogicPath setView={setView} />
        ) : view === 'SetMenuLiteracy' ? (
          <SetMenu setView={setView} path={'literacy'} />
        ) : null}
      </div>
    );
  } else {
    return (
      <div id="narrowScreen">
        <div className="cardWrapper">
          <h1>This is a web application available in widescreen format.</h1>
          <ul>
            <li>Visit the site on your desktop or laptop.</li>
            <li>Maximize the browser if you haven't.</li>
            <li>
              Features of this web application are not intended for mobile
              devices.
            </li>
            <li>
              If you have the console running:
              <ul>
                <li>The viewport width minimum is 1100.</li>
                <li>
                  You can set the MainMenu component's hook 1 state to `true`.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
