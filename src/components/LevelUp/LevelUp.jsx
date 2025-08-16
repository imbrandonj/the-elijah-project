import './LevelUp.css'; // component styles

// contexts:
import { usePlayer } from '@root/contexts/PlayerContext.jsx';
import { useView } from '@root/contexts/ViewContext.jsx';

// imported components:
import SetComplete from '@root/components/SetComplete/SetComplete.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import EraseButton from '@root/components/EraseButton/EraseButton.jsx';
import Popup from '@root/components/Popup/Popup.jsx';

// imported imgs:
import arithImg from '@root/assets/svgs/arith.svg';
import alphaImg from '@root/assets/svgs/alpha-literacy.svg';
import perspImg from '@root/assets/svgs/perspective.svg';
import astroFlag from '@root/assets/svgs/astro-flag2.svg';
import objective from '@root/assets/svgs/objective.svg';

import { useState, useEffect } from 'react';

export default function LevelUp({
  planet, // 'Arith' or 'Alpha-Literacy' or 'Perspective'
  levelScore, // score obtained during level (state)
  setLevelScore, // to reset score after level completion (state)
  setLevelUpEvent, // reset level event (state)
  setBegin, // begin level (state)
}) {
  const { playerProfile, userInstance, saveScore } = usePlayer(); // context
  const { level, setLevel } = useView(); // context
  const [oldScore, setOldScore] = useState(0);
  const [time, setTime] = useState(parseInt(localStorage.getItem('time')));
  const [popup, setPopup] = useState(false);

  // calculate score:
  const timeBonus = 300 - time;
  const playerScore = levelScore + timeBonus;

  // every fifth level is a challenge with a minScore of 600
  const minScore = level % 5 === 0 ? 600 : 0;

  useEffect(() => {
    if (!userInstance || playerProfile === 'openPlay') {
      console.log('Open Play mode: skipping data storage.');
      return;
    }

    const recordScore =
      playerProfile.progress?.[planet]?.[`level${level}`] ?? 0;

    setOldScore(recordScore);

    if (playerScore > recordScore) {
      saveScore({ planet, level, score: playerScore });
    }
  }, []);

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
    if (userInstance && playerProfile !== 'openPlay') {
      // reset progress:
      saveScore({ planet, level, score: oldScore });
    }

    setLevelScore(0);
    setLevel(level);
    setLevelUpEvent(false);
    setBegin(false);
  };

  // level completed:
  if (playerScore >= minScore) {
    // challenge level completed:
    if (level % 5 === 0)
      return (
        <SetComplete
          newLevel={newLevel}
          retry={retry}
          levelScore={playerScore}
          planet={planet}
          planetImg={planetImg}
        />
      );
    // regular level completed:
    return (
      <div id="levelUp" className="flex-col justify-center align-center">
        {popup ? (
          <Popup
            buttonAction={retry}
            closePopup={() => setPopup(false)}
            para2={'Do you want to reset your score and try again?'}
            buttonText={'Yes, Retry'}
            buttonText2={'No, do not reset'}
          />
        ) : null}
        <div id="levelUpWrapper">
          <h2 className="flex align-center justify-center">
            {planet} level up
            <img src={planetImg} height={88} />
          </h2>
          <h3 className="center-text">Level {level} Completed</h3>
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
            <li className="score flex align-center">
              {' '}
              <img src={astroFlag} height={95} />
              Score Total: <span className="green">{playerScore}</span>
            </li>
          </ul>
          <div className="flex justify-evenly">
            <EraseButton
              text={'Reset Score & Try Again'}
              onclick={() => setPopup(true)}
              css={'bkg-btn-blue red'}
            />
            <RedirectButton
              text={'Continue to next level'}
              onclick={newLevel}
              css={'bkg-btn-blue'}
            />
          </div>
        </div>
      </div>
    );
  } else {
    // level failed:
    return (
      <div id="levelUp">
        <div id="levelUpWrapper" className="flex-col align-center">
          <h2 className="red flex align-center">Level Failed.</h2>
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
            <li className="score flex align-center">
              <img src={objective} height={60} />
              Score Total: <span className="red">{playerScore}</span>, Score
              Needed: <span className="green">{minScore}</span>
            </li>
          </ul>
          <RedirectButton text={'Retry'} onclick={retry} css={'bkg-btn-blue'} />
        </div>
      </div>
    );
  }
}
