// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import { useAudio } from '@root/contexts/AudioContext.jsx';

// imported internal modules:
import { getAudio } from './perspAudio.js';
import { randomNum } from '@root/modules/util.js';
import tallyUp from '@root/modules/tallyUp.js';

import '../Perspective.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
  Perspective Level 3

  Level 3 displays two identical emoji images
  The audio will tell the player to click either the left or the right

  `setLevelEvent` prop (state) is passed from Perspective view
    - if true, renders a <LevelUp /> component to display from Perspective view
*/
export default function PerspLevel3({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const { playAudio, stopAudio } = useAudio(); // audio global state context
  const [emoji, setEmoji] = useState('');
  const [isLeft, setIsLeft] = useState(); // is left object the answer?
  const [isRight, setIsRight] = useState(); // is right object the answer?
  const [audio, setAudio] = useState(''); // string to import audio from getAudio(str: audio)
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const leftObjects = {
    leftCat: '🐈',
    leftDog: '🐕',
    leftCow: '🐄',
    leftPig: '🐖',
    leftTurtle: '🐢',
    leftFish: '🐠',
    leftOwl: '🦉',
    leftSnake: '🐍',
    leftHorse: '🐎',
    leftTiger: '🐅',
    leftBee: '🐝',
    leftSnail: '🐌',
    leftShark: '🦈',
    leftGoat: '🐐',
    leftSheep: '🐑',
  };

  const rightObjects = {
    rightCat: '🐈',
    rightDog: '🐕',
    rightCow: '🐄',
    rightPig: '🐖',
    rightTurtle: '🐢',
    rightFish: '🐠',
    rightOwl: '🦉',
    rightSnake: '🐍',
    rightHorse: '🐎',
    rightTiger: '🐅',
    rightBee: '🐝',
    rightSnail: '🐌',
    rightShark: '🦈',
    rightGoat: '🐐',
    rightSheep: '🐑',
  };

  const leftKeys = Object.keys(leftObjects);
  const rightKeys = Object.keys(rightObjects);

  console.log('render!');
  useEffect(() => {
    // logic behind if the left or right object is the clickable answer:
    let bool = randomNum(1) < 1;
    setIsLeft(bool); // if bool is true, left object is correct
    setIsRight(!bool); // if bool is false, right object is correct

    // obtain random object image (emoji character) to click
    let answerKey = bool
      ? leftKeys[randomNum(leftKeys.length - 1)]
      : rightKeys[randomNum(rightKeys.length - 1)];
    setEmoji(bool ? leftObjects[answerKey] : rightObjects[answerKey]);

    // retrieve and play audio mp3
    setAudio(answerKey); // audio must be saved in state due to the playButton() fn
    playAudio(getAudio(answerKey));

    return () => stopAudio(); // clean up audio fn when component unmounts or re-renders
  }, [correctTally]);

  // retrieve and play audio mp3
  const playButton = () => {
    playAudio(getAudio(audio));
  };

  // checks if the clickable object is correct (`object` arg is a boolean)
  function answerEvent(object) {
    if (object) {
      // module tallyUp.js
      tallyUp(
        20, // `totalQuestions`
        correctTally, // total correct tally (state)
        setCorrectTally, // to set total correct tally (set state)
        setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
      );

      setLevelScore(levelScore + 20);
    } else {
      if (levelScore > 0) setLevelScore(levelScore - 10);
    }
  }

  console.log(isLeft);
  console.log(isRight);

  return (
    <div id="PerspLevel">
      <LevelHeader
        text="Click on the shape given by the audio"
        score={levelScore}
      />
      <div className="shapeOverlay oneRow flex-col align-center">
        <button className="speaker" onClick={playButton}>
          🔊
        </button>
        <div className="leftRight oneRow">
          <button className="emojiImg" onClick={() => answerEvent(isLeft)}>
            {emoji}
          </button>
          <button className="emojiImg" onClick={() => answerEvent(isRight)}>
            {emoji}
          </button>
        </div>
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Click the speaker to hear the audio again." />
    </div>
  );
}
