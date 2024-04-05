import './PlanetComplete.css'; // component styles

// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

// planet images for display:
import arithImg from '@root/assets/svgs/arith.svg';
import alphaImg from '@root/assets/svgs/alpha-literacy.svg';
import perspImg from '@root/assets/svgs/perspective.svg';
import RocketHome from '@root/assets/svgs/rocket-home.svg';

export default function PlanetComplete({
  path, // subject 'Arith' or 'Alpha-Literacy' or 'Perspective'
}) {
  const { setView } = useView();

  // planet display in h2:
  const planetImg =
    path === 'Arith'
      ? arithImg
      : path === 'AlphaLit'
      ? alphaImg
      : path === 'Persp'
      ? perspImg
      : null;

  // reformat text for display
  path =
    path === 'Arith'
      ? 'Arith'
      : path === 'AlphaLit'
      ? 'Alpha-Literacy'
      : path === 'Persp'
      ? 'Perspective'
      : null;

  const handleReturn = () => {
    setView('Dashboard');
  };

  return (
    <div id="planetComplete" className="flex-col align-center">
      <h2 className="flex align-center small-caps">
        <img src={planetImg} height={90} />
        planet {path} completed!
      </h2>
      <p>
        Congratulations, you have completed all of the levels for planet {path}.
      </p>
      <p>
        Elijah likes to play around with a text box when he's finished, so
        here's a text box to play with: <br /> <br />
      </p>
      <div className="flex align-center justify-evenly">
        <textarea />
        <button
          onClick={handleReturn}
          /* reused class (dashSwiperBtn) from SelectMission.jsx */
          className="dashSwiperBtn flex flex-col align-center"
        >
          <img src={RocketHome} height={140} />
          Return to Base
        </button>
      </div>
    </div>
  );
}
