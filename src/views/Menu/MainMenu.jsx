import './MainMenu.css'; // component styles

import Popup from '@root/components/Popup/Popup.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton';

// imported hooks:
import { useState } from 'react';

/*
  MainMenu
  
    - This a menu page that has 3 paths:
      1) start, which calls <PathMenu />
      2) about, which calls <About />
      3) profile, which is not yet complete
*/
export default function MainMenu({ setView }) {
  const [showPopup, setShowPopup] = useState(true);

  const start = () => {
    //setView('PathMenu');
    setView('Dashboard');
  };

  const about = () => {
    setView('About');
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    // passed to the Popup component
    setShowPopup(false);
  };

  return (
    <div id="mainMenu">
      <div className="menu-wrapper">
        <h1>The Elijah Project</h1>
        <RedirectButton onclick={start} text={'Start'} />
        <RedirectButton onclick={about} text={'About'} />
        <RedirectButton onclick={null} text={'Profile'} />
      </div>

      {showPopup && (
        <Popup
          closePopup={closePopup}
          para1={
            'Hello. Thanks for visiting the app. You will find some functionalities missing, i.e., profile and profile configuration. Originally, the application was to utilize a database and backend. I am currently migrating The Elijah Project to a desktop application utilizing Electron.js.'
          }
          para2={
            'This is an ongoing solo project; as such, you will find varying degrees of depth. I am adding content often. Enjoy your visit and feel free to email me at imbrandonj42@gmail.com'
          }
          buttonText={'continue to The Elijah Project'}
        />
      )}
    </div>
  );
}
