import './LevelUp.css'; // component styles

// planet images for display:
import arithImg from '@root/assets/svgs/arith.svg';
import alphaImg from '@root/assets/svgs/alpha-literacy.svg';
import perspImg from '@root/assets/svgs/perspective.svg';

export default function LevelUp({
  path, // subject 'Arith' or 'Alpha-Literacy' or 'Perspective'
  level, // level completed (state)
  levelScore, // score obtained during level (state)
  setLevelScore, // to reset score after level completion (state)
  setLevel, // increment level (state)
  setLevelUpEvent, // reset level event (state)
  setBegin, // begin level (state)
}) {
  // time to complete level
  let time = localStorage.getItem('time');

  // planet display in h2:
  const planetImg =
    path === 'Arith'
      ? arithImg
      : path === 'AlphaLit'
      ? alphaImg
      : path === 'Persp'
      ? perspImg
      : null;

  // continue button click event
  const continueEvent = () => {
    setLevelScore(0);
    setLevel(level + 1);
    setLevelUpEvent(false);
    setBegin(false);
  };

  return (
    <div id="levelUp">
      <div id="levelWrapper">
        <h2>
          <img src={planetImg} height={80} /> {path} level up!
        </h2>
        <h3>Level {level} complete.</h3>
        <p>Player Score: {levelScore}</p>
        <p>Time to complete: {time} seconds.</p>
        <button onClick={continueEvent}>Continue to next level</button>
      </div>
    </div>
  );
}
