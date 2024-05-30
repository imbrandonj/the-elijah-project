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
  Perspective Level 4

  Level 4 displays 2 of the same images 
  The audio will tell the player to click either left or right

  `setLevelEvent` prop (state) is passed from Perspective view
    - if true, renders a <LevelUp /> component to display from Perspective view
*/
export default function PerspLevel4({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const { playAudio, stopAudio } = useAudio(); // audio global state context
  const [isLeft, setIsLeft] = useState(); // is left object the answer?
  const [isRight, setIsRight] = useState(); // is right object the answer?
  const [audio, setAudio] = useState(''); // string to import audio from getAudio(str: audio)
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const objectMap = {
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

  const objectKeys = Object.keys(objectMap);

  console.log('render!');
  useEffect(() => {
    // logic behind if the left or right object is the clickable answer:
    let bool = randomNum(1) < 1;
    setIsLeft(bool); // if bool is true, left object is correct
    setIsRight(!bool); // if bool is false, right object is correct

    // obtain random object image (emoji character) to click
    let randomKey = randomNum(objectKeys.length - 1);
    let answerKey = objectKeys[randomKey];
    let clickImg = Object.values(objectMap)[randomKey];

    // set the img src:
    const leftImg = document.getElementById('leftImg');
    const rightImg = document.getElementById('rightImg');
    leftImg.src = clickImg;
    rightImg.src = clickImg;

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

  return (
    <div id="PerspLevel" className="flex-col align-center">
      <LevelHeader
        text="Click on the shape given by the audio"
        score={levelScore}
      />
      <div className="shapeOverlay flex-col">
        <button className="speaker" onClick={playButton}>
          🔊
        </button>
        <div className="leftRight">
          <img id="leftImg" onClick={() => answerEvent(isLeft)} height={200} />
          <img
            id="rightImg"
            onClick={() => answerEvent(isRight)}
            height={200}
          />
        </div>
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Click the speaker to hear the audio again." />
    </div>
  );
}
