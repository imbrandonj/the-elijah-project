import './LevelUp.css'; // component styles

// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import SetComplete from '@root/components/SetComplete/SetComplete.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

// imported modules:
import { storeLevel } from '@root/modules/levelManager.js';

// imported imgs:
import arithImg from '@root/assets/svgs/arith.svg';
import alphaImg from '@root/assets/svgs/alpha-literacy.svg';
import perspImg from '@root/assets/svgs/perspective.svg';
import astroFlag from '@root/assets/svgs/astro-flag2.svg';
import objective from '@root/assets/svgs/objective.svg';

export default function LevelUp({
  planet, // 'Arith' or 'Alpha-Literacy' or 'Perspective'
  levelScore, // score obtained during level (state)
  setLevelScore, // to reset score after level completion (state)
  setLevelUpEvent, // reset level event (state)
  setBegin, // begin level (state)
}) {
  const { level, setLevel } = useView();

  // time to complete level
  const time = localStorage.getItem('time');

  // planet display in h2:
  const planetImg =
    planet === 'Arith'
      ? arithImg
      : planet === 'AlphaLit'
      ? alphaImg
      : planet === 'Persp'
      ? perspImg
      : null;

  // reformat text for display
  planet =
    planet === 'Arith'
      ? 'Arith'
      : planet === 'AlphaLit'
      ? 'Alpha-Literacy'
      : planet === 'Persp'
      ? 'Perspective'
      : null;

  // continue button click event
  const newLevel = () => {
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

  // calculate score:
  const timeBonus = 300 - time;
  const playerScore = levelScore + timeBonus;

  // set score in local storage:
  storeLevel(planet, level, playerScore); // imported module

  // every fifth level is a challenge with a minScore of 600
  const minScore = level % 5 === 0 ? 600 : 0;

  // level completed:
  if (playerScore >= minScore) {
    // challenge level completed:
    if (level % 5 === 0)
      return (
        <SetComplete
          newLevel={newLevel}
          levelScore={playerScore}
          planet={planet}
          planetImg={planetImg}
        />
      );
    // regular level completed:
    return (
      <div id="levelUp">
        <div id="levelUpWrapper">
          <h2>
            {planet} level up
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
              <img src={astroFlag} height={95} />
              Score Total: <span className="green">{playerScore}</span>
            </li>
          </ul>
          <RedirectButton onclick={newLevel} text={'Continue to next level'} />
        </div>
      </div>
    );
  } else {
    // level failed:
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
              <img src={objective} height={60} />
              Score Total: <span className="red">{playerScore}</span>, Score
              Needed: <span className="green">{minScore}</span>
            </li>
          </ul>
          <RedirectButton onclick={retry} text={'Retry'} />
        </div>
      </div>
    );
  }
}
