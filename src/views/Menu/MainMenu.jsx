import './MainMenu.css'; // component styles

// imported views:
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
import About from './About.jsx';
import Popup from '@root/components/Popup/Popup.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

import tep from '@root/assets/img/tep2.webp';

// imported hooks:
import { useState, useEffect } from 'react';

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
  // component renders in MainMenu, show if true:
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [openPlay, setOpenPlay] = useState(false);
  const [about, setAbout] = useState(false);
  const [selectPlayer, setSelectPlayer] = useState(false);
  // player profiles fetched from firebase:
  const [playerProfiles, setPlayerProfiles] = useState([]);
  // const [showPopup, setShowPopup] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  // list of views in The Elijah Project:
  const views = {
    MainMenu: <MainMenu />,
    Dashboard: <Dashboard />,
    DashArith: <Dashboard planet={'Arith'} />,
    DashPerspective: <Dashboard planet={'Perspective'} />,
    'DashAlpha-Literacy': <Dashboard planet={'Alpha-Literacy'} />,
    Arith: <Arith />,
    Perspective: <Perspective />,
    'Alpha-Literacy': <AlphaLit />,
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  console.log('main menu render');

  if (view === 'MainMenu') {
    return (
      <div id="mainMenu" className="flex justify-center align-center">
        <div
          id="menuWrapper"
          className={`flex justify-center align-center ${
            showSplash ? 'splash-active' : 'post-splash fadeIn'
          } `}
        >
          <img
            src={tep}
            height={750}
            id="menuImg"
            className={showSplash ? 'fullImage' : 'miniImage'}
          />

          {!showSplash && (
            <div
              id="menuSelection"
              className="flex justify-center align-center fadeIn"
            >
              {logIn ? (
                <Login
                  setLogIn={setLogIn}
                  setSelectPlayer={setSelectPlayer}
                  setPlayerProfiles={setPlayerProfiles}
                />
              ) : signUp ? (
                <SignUp
                  setSignUp={setSignUp}
                  setSelectPlayer={setSelectPlayer}
                />
              ) : openPlay ? (
                <OpenPlay setOpenPlay={setOpenPlay} />
              ) : about ? (
                <About setAbout={setAbout} />
              ) : selectPlayer ? (
                <SelectPlayer
                  setSelectPlayer={setSelectPlayer}
                  playerProfiles={playerProfiles}
                />
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
                      onclick={() => setAbout(true)}
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
          )}
        </div>
        {/* {showPopup && (
          <Popup
            closePopup={() => setShowPopup(false)}
            buttonAction={() => setShowPopup(false)}
            para1={`Hello and thanks for visiting the app. You will find some functionalities missing, i.e., user login and authentication. These are currently being updated. To play The Elijah Project, select the Open Play button in the main menu.`}
            para2={
              'This is an ongoing solo project; as such, you will find varying degrees of depth. I am adding content often. Enjoy your visit and feel free to email me at imbrandonj42@gmail.com'
            }
            buttonText={'continue to The Elijah Project'}
            buttonText2={null}
          />
        )} */}
      </div>
    );
  } else {
    return <div>{views[view]}</div>;
  }
}
