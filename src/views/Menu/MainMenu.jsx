import './MainMenu.css'; // component styles

// imported views:
import About from './About/About.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Arith from '../Arith/Arith.jsx';
import AlphaLit from '../Alpha-Literacy/AlphaLit.jsx';
import Perspective from '../Perspective/Perspective.jsx';

// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import Popup from '@root/components/Popup/Popup.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton';

// imported hooks:
import { useState } from 'react';

/*
  MainMenu.jsx

    - MainMenu is the initial view displayed
      -MainMenu controls all view displays via the useContext global state
  
    - This menu page that has 3 paths:
      1) start, which calls <Dashboard /> view
      2) about, which calls <About /> view
      3) profile, which is not yet complete
*/
export default function MainMenu() {
  const { view, setView } = useView();
  const [showPopup, setShowPopup] = useState(true);

  // list of views in The Elijah Project:
  const views = {
    MainMenu: <MainMenu />,
    About: <About />,
    Dashboard: <Dashboard />,
    Arith: <Arith />,
    Perspective: <Perspective />,
    'Alpha-Literacy': <AlphaLit />,
  };

  console.log('main menu render');

  const start = () => {
    setView('Dashboard');
  };

  const about = () => {
    setView('About');
  };

  const closePopup = () => {
    // passed to the Popup component
    setShowPopup(false);
  };

  if (view === 'MainMenu') {
    return (
      <div id="mainMenu" className="flex justify-center">
        <div id="menuWrapper" className="flex-col align-center">
          <h1 className="small-caps">The Elijah Project</h1>
          <RedirectButton onclick={start} text={'Start'} css={'bkg-btn-blue'} />
          <RedirectButton onclick={about} text={'About'} css={'bkg-btn-blue'} />
          <RedirectButton
            onclick={null}
            text={'Profile'}
            css={'bkg-btn-blue'}
          />
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
  } else {
    return <div>{views[view]}</div>;
  }
}
