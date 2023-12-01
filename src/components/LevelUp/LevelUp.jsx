import './LevelUp.css'; // component styles

import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

// planet images for display:
import arithImg from '@root/assets/svgs/arith.svg';
import alphaImg from '@root/assets/svgs/alpha-literacy.svg';
import perspImg from '@root/assets/svgs/perspective.svg';
import astroFlag from '@root/assets/svgs/astro-flag2.svg';

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

  // reformat text for display
  path =
    path === 'Arith'
      ? 'Arith'
      : path === 'AlphaLit'
      ? 'Alpha-Literacy'
      : path === 'Persp'
      ? 'Perspective'
      : null;

  // continue button click event
  const continueEvent = () => {
    setLevelScore(0);
    setLevel(level + 1);
    setLevelUpEvent(false);
    setBegin(false);
  };

  // retry button click event
  const retry = () => {
    setLevelScore(0);
    setLevel(level);
    setLevelUpEvent(false);
    setBegin(false);
  };

  const timeBonus = 300 - time;
  const playerScore = levelScore + timeBonus;

  // every 5 levels are challenge levels with a minScore of 600
  let minScore = level % 5 === 0 ? 600 : 0;

  if (playerScore >= minScore) {
    return (
      <div id="levelUp">
        <div id="levelUpWrapper">
          <h2>
            {path} level up
            <img src={planetImg} height={88} />
          </h2>
          <h3>Level {level} Completed</h3>
          <ul>
            <li>
              Level Score: <span>{levelScore}</span>
            </li>
            <li>
              Time to Complete: <span>{time}</span> seconds
            </li>
            <li>
              Time Bonus: <span>{timeBonus}</span>
            </li>
            <li className="score">
              {' '}
              <img src={astroFlag} height={90} />
              Score Total: {playerScore}
            </li>
          </ul>
          <RedirectButton
            onclick={continueEvent}
            text={'Continue to next level'}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div id="levelUp">
        <div id="levelUpWrapper">
          <h2 className="red">Challenge Failed.</h2>
          <h3>Level {level} Incomplete</h3>
          <ul>
            <li>
              Level Score: <span>{levelScore}</span>
            </li>
            <li>
              Time to Complete: <span>{time}</span> seconds
            </li>
            <li>
              Time Bonus: <span>{timeBonus}</span>
            </li>
            <li className="score">
              {' '}
              <img src={astroFlag} height={90} />
              Score Total: {playerScore}
            </li>
            <li>
              Score Needed: <span>{minScore}</span>
            </li>
          </ul>
          <button onClick={retry}>Retry</button>
        </div>
      </div>
    );
  }
}
