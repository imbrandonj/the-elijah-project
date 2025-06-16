import { auth } from '@root/firebaseConfig.js';
import { signOut } from 'firebase/auth'; // Firebase sign out function

// internal imports:
import './Panel.css'; // component styles
import { useView } from '@root/contexts/ViewContext.jsx';
import { useAudio } from '@root/contexts/AudioContext';

import Rocket from '@root/assets/svgs/rocket.svg';
import AlphaImg from '@root/assets/img/alpha-lit.webp';
import PerspImg from '@root/assets/img/perspective.webp';
import ArithImg from '@root/assets/img/arith.webp';
import Spacepod from '@root/assets/img/spacepod.webp';
import Astro from '@root/assets/img/astro_away.webp';

// displays wiggling Rocket which redirects the user home
export default function Panel() {
  // change this to nav bar? perhaps an SVG icon animation

  const { view, setView } = useView();
  const { stopAudio } = useAudio();

  console.log(view);

  const toPlanet = () => {
    stopAudio();
    setView('Dash' + view);
  };

  const toBase = () => {
    stopAudio();
    setView('Dashboard');
  };

  /*
    TO DO:
      guest user condition
  */
  const handleSignOut = async () => {
    try {
      await signOut(auth);

      stopAudio();
      setView('MainMenu');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="panel" className="flex-col align-center justify-center">
      <div className="panel-icon flex-col align-center">
        <span>navigate</span>
        <hr />
        <img src={Rocket} height={90} alt="Rocket Icon" />
      </div>
      <div className="panel-content flex align-center">
        <h1>the Elijah Project</h1>
        <hr />
        <nav>
          <ul className="flex-col justify-center align-center center-text">
            <li onClick={toPlanet}>
              <div className="image-wrapper">
                <img
                  src={
                    view === 'Arith'
                      ? ArithImg
                      : view === 'Alpha-Literacy'
                      ? AlphaImg
                      : view === 'Perspective'
                      ? PerspImg
                      : null
                  }
                  height={220}
                />
              </div>
              <div className="text-wrapper">
                Return to
                <br /> {view}
                <br /> Overview
              </div>
            </li>
            <li onClick={toBase}>
              <div className="image-wrapper">
                <img src={Spacepod} height={220} />
              </div>
              <div className="text-wrapper">
                Return
                <br /> to
                <br /> Base
              </div>
            </li>
            <li onClick={handleSignOut}>
              <div className="image-wrapper">
                <img src={Astro} height={220} />
              </div>
              <div className="text-wrapper">
                Sign
                <br /> Out
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
