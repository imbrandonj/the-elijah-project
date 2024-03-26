// imported initial view:
import MainMenu from './views/Menu/MainMenu.jsx';

import { ViewProvider } from '@root/contexts/ViewContext.jsx'; // global state for views and levels
import { AudioProvider } from '@root/contexts/AudioContext.jsx'; // for audio global state

// external imports:
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

/*
  App.jsx

    This component is the entry to the application.

    - If the viewport is ever shrunk, width is checked
      - If width is inadequate, content will be a notification saying so
    
    - App calls the useContext ViewProvider to initialize global state
      - The game is nested within the render of <MainMenu />
    
*/
const App = () => {
  const [adequateWidth, setAdequateWidth] = useState(window.innerWidth >= 1100);

  const checkViewportWidth = () => {
    setAdequateWidth(window.innerWidth >= 1100);
  };

  window.addEventListener('resize', checkViewportWidth);

  console.log('app render');

  if (adequateWidth) {
    // display view:
    return (
      <ViewProvider>
        <AudioProvider>
          <MainMenu />
        </AudioProvider>
      </ViewProvider>
    );
  } else {
    // inadequate viewport (shrunken screen):
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
