import './MainMenu.css'; // component styles

// imported views:
import About from './About/About.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Arith from '../Arith/Arith.jsx';
import AlphaLit from '../Alpha-Literacy/AlphaLit.jsx';
import Perspective from '../Perspective/Perspective.jsx';

// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import Popup from '@root/components/Popup/Popup.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import RocketButton from '@root/components/RocketButton/RocketButton.jsx';

// imported hooks:
import { useState } from 'react';

/*
  MainMenu.jsx

    - MainMenu is the initial view displayed
      -MainMenu controls all view displays via the useContext global state
  
    - This menu page that has 4 paths:
      1) log in, which calls <LogIn /> component
      2) sign up, which calls <SignUp /> component
      3) about, which calls <About /> component
      4) entry to all other views
*/
export default function MainMenu() {
  const { view, setView } = useView();
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
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

  const login = () => {
    setLogIn(true);
  };

  const signup = () => {
    setSignUp(true);
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
          {logIn ? (
            <LogIn setLogIn={setLogIn} />
          ) : signUp ? (
            <SignUp setSignUp={setSignUp} />
          ) : (
            <div className="flex-col align-center">
              <RedirectButton
                onclick={login}
                text={'Log In'}
                css={'bkg-btn-blue'}
              />
              <RedirectButton
                onclick={signup}
                text={'Sign Up'}
                css={'bkg-btn-blue'}
              />
              <RedirectButton
                onclick={about}
                text={'About'}
                css={'bkg-btn-blue'}
              />
            </div>
          )}
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
