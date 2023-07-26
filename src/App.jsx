// imported views:
import MainMenu from './views/Menu/MainMenu.jsx';
import About from './views/Menu/About/About.jsx';
import Dashboard from './views/Dashboard/Dashboard.jsx';
import Arith from './views/Arith/Arith.jsx';
import AlphaLit from './views/Alpha-Literacy/AlphaLit.jsx';
import Perspective from './views/Perspective/Perspective.jsx';

// external imports:
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

/*
  App.jsx

    This component is the entry to the application.

    - If the viewport is ever shrunk, width is checked
      - If width is inadequate, content will be a notification saying so
    
    - App calls the appropriate view to display (`view` & `setView` state),
      as this React application is unorthodox and operates more like a game.
      - Button redirection utilizes `setView` state versus url redirect

    - `level` & `setLevel` props are passed to the mission (Arith, AlphaLit, Perspective, etc. )
        to display the appropriate level from within the `view` component
    
    - `setView` prop (state) is passed to give the component the ability to redirect or change the view
*/
const App = () => {
  const [view, setView] = useState('MainMenu');
  const [level, setLevel] = useState(0);
  const [adequateWidth, setAdequateWidth] = useState(window.innerWidth >= 1100);

  const checkViewportWidth = () => {
    setAdequateWidth(window.innerWidth >= 1100);
  };

  window.addEventListener('resize', checkViewportWidth);

  if (adequateWidth) {
    // display view:

    return (
      <div>
        {view === 'MainMenu' ? (
          <MainMenu setView={setView} />
        ) : view === 'About' ? (
          <About setView={setView} />
        ) : view === 'Dashboard' ? (
          <Dashboard setView={setView} setLevel={setLevel} />
        ) : view === 'Arith' ? (
          <Arith level={level} setLevel={setLevel} setView={setView} />
        ) : view === 'Perspective' ? (
          <Perspective setView={setView} />
        ) : view === 'Alpha-Literacy' ? (
          <AlphaLit level={level} setLevel={setLevel} setView={setView} />
        ) : null}
      </div>
    );

    // inadequate viewport (shrunken screen)
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
