// imported svgs:
import AlphaLiteracy from '@root/assets/svgs/alpha-literacy.svg';
import Arith from '@root/assets/svgs/arith.svg';
import Perspective from '@root/assets/svgs/perspective.svg';

// imported components:
import TipBox from '@root/components/Tipbox/Tipbox.jsx';

/*
  Display planet selected (`missionSelect` state from MissionSelect.jsx)
*/
export default function Mission({
  missionSelect,
  setDashSelect,
  setMissionSelect,
  setView,
  setLevel,
}) {
  const begin = () => {
    setLevel(1);
    setView(missionSelect);
  };

  return (
    <div id="mission">
      {missionSelect === 'Alpha-Literacy' ? (
        <div className="planet alphaLitColor">
          <img src={AlphaLiteracy} height={200} />
          <h2>Alpha-Literacy</h2>
          <p>
            Navigate the keyboard and become a master of engineering letters.
          </p>
        </div>
      ) : missionSelect === 'Arith' ? (
        <div className="planet arithColor">
          <img src={Arith} height={220} />
          <h2>Arith</h2>
          <p>
            With numbers at your disposal, operate and express your way to
            numeric mastery.
          </p>
        </div>
      ) : missionSelect === 'Perspective' ? (
        <div className="planet perspectiveColor">
          <img src={Perspective} height={200} />
          <h2>Perspective</h2>
          <p>
            Dive into the crevices of your brain to provide your cordial
            perspective of right --or wrong.
          </p>
        </div>
      ) : null}
      <button onClick={begin}>begin here</button>
    </div>
  );
}
