import './MainMenu.css'; // component styles

// imported views:
import About from './About/About.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Arith from '../Arith/Arith.jsx';
import AlphaLit from '../Alpha-Literacy/AlphaLit.jsx';
import Perspective from '../Perspective/Perspective.jsx';

// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import OpenPlay from './OpenPlay.jsx';
import SelectPlayer from './SelectPlayer.jsx';
import Popup from '@root/components/Popup/Popup.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

// imported hooks:
import { useState } from 'react';

/*
  MainMenu.jsx

    - MainMenu is the initial view displayed
      -MainMenu controls all view displays via the useContext global state
  
    - This menu page that has 4 paths:
      1) login, which calls <Login /> component
      2) sign up, which calls <SignUp /> component
      3) about, which calls <About /> component
      4) entry to all other views
*/
export default function MainMenu() {
  const { view, setView } = useView();
  const [logIn, setLogIn] = useState(false); // shows the login menu when true
  const [signUp, setSignUp] = useState(false); // shows the sign up menu when true
  const [openPlay, setOpenPlay] = useState(false); // shows the open play menu when true
  const [selectPlayer, setSelectPlayer] = useState(false); // shows the select player menu when true
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

  if (view === 'MainMenu') {
    return (
      <div id="mainMenu" className="flex justify-center">
        <div id="menuWrapper" className="flex justify-center align-center">
          <h1 className="flex justify-center small-caps">
            the
            <br /> Elijah
            <br /> Project
          </h1>
          <div id="menuSelection" className="flex justify-center align-center">
            {logIn ? (
              <Login setLogIn={setLogIn} setSelectPlayer={setSelectPlayer} />
            ) : signUp ? (
              <SignUp setSignUp={setSignUp} setSelectPlayer={setSelectPlayer} />
            ) : openPlay ? (
              <OpenPlay setOpenPlay={setOpenPlay} />
            ) : selectPlayer ? (
              <SelectPlayer setSelectPlayer={setSelectPlayer} />
            ) : (
              <div className="menuBundle">
                <div>
                  <RedirectButton
                    onclick={() => setLogIn(true)}
                    text={'Login'}
                    css={'bkg-btn-blue'}
                  />
                  <RedirectButton
                    onclick={() => setSignUp(true)}
                    text={'Sign Up'}
                    css={'bkg-btn-blue'}
                  />
                </div>
                <div>
                  <RedirectButton
                    onclick={() => setOpenPlay(true)}
                    text={'Open Play'}
                    css={'bkg-btn-blue'}
                  />
                  <RedirectButton
                    onclick={() => setView('About')}
                    text={'About'}
                    css={'bkg-btn-blue'}
                  />
                </div>
                <div className="rocket">
                  <span>🚀</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {showPopup && (
          <Popup
            closePopup={() => setShowPopup(false)}
            buttonAction={() => setShowPopup(false)}
            para1={
              'Hello and thanks for visiting the app. You will find some functionalities missing, i.e., user login and authentication. These will be updated soon. To play The Elijah Project, select the Open Play button in the main menu.'
            }
            para2={
              'This is an ongoing solo project; as such, you will find varying degrees of depth. I am adding content often. Enjoy your visit and feel free to email me at imbrandonj42@gmail.com'
            }
            buttonText={'continue to The Elijah Project'}
            buttonText2={null}
          />
        )}
      </div>
    );
  } else {
    return <div>{views[view]}</div>;
  }
}
