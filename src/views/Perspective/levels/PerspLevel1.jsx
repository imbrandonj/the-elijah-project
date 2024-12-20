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

// imported svgs:
import blueTriangle from '@root/assets/svgs/blueTriangle.svg';
import greenTriangle from '@root/assets/svgs/greenTriangle.svg';
import redTriangle from '@root/assets/svgs/redTriangle.svg';
import blueCircle from '@root/assets/svgs/blueCircle.svg';
import greenCircle from '@root/assets/svgs/greenCircle.svg';
import redCircle from '@root/assets/svgs/redCircle.svg';
import blueSquare from '@root/assets/svgs/blueSquare.svg';
import greenSquare from '@root/assets/svgs/greenSquare.svg';
import redSquare from '@root/assets/svgs/redSquare.svg';

/*
  Perspective Level 1

  Level 1 displays 2 shape images. 
  The audio will give the player instructions, such as (left red triangle)

  `setLevelEvent` prop (state) is passed from Perspective view
    - if true, renders a <LevelUp /> component to display from Perspective view
*/
export default function PerspLevel1({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const { playAudio, stopAudio } = useAudio(); // audio global state context
  const [leftObject, setLeftObject] = useState(); // is left object the answer?
  const [rightObject, setRightObject] = useState(); // is right object the answer?
  const [audio, setAudio] = useState(''); // string to import audio from getAudio(str: audio)
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  const leftObjects = {
    leftBlueTriangle: blueTriangle,
    leftGreenTriangle: greenTriangle,
    leftRedTriangle: redTriangle,
    leftBlueCircle: blueCircle,
    leftGreenCircle: greenCircle,
    leftRedCircle: redCircle,
    leftBlueSquare: blueSquare,
    leftGreenSquare: greenSquare,
    leftRedSquare: redSquare,
  };

  const rightObjects = {
    rightBlueTriangle: blueTriangle,
    rightGreenTriangle: greenTriangle,
    rightRedTriangle: redTriangle,
    rightBlueCircle: blueCircle,
    rightGreenCircle: greenCircle,
    rightRedCircle: redCircle,
    rightBlueSquare: blueSquare,
    rightGreenSquare: greenSquare,
    rightRedSquare: redSquare,
  };

  const leftKeys = Object.keys(leftObjects);
  const rightKeys = Object.keys(rightObjects);

  console.log('render!');
  useEffect(() => {
    // logic behind if the left or right object is the clickable answer:
    let bool = randomNum(1) < 1;
    setLeftObject(bool); // if bool is true, left object is correct
    setRightObject(!bool); // if bool is false, right object is correct

    // obtain 2 random values to decide left object and right object
    let lRandom = randomNum(leftKeys.length - 1);
    let rRandom = randomNum(rightKeys.length - 1);

    // the object to click (correct answer):
    let answerKey = bool ? leftKeys[lRandom] : rightKeys[rRandom];

    // set the img src:
    const leftImg = document.getElementById('leftImg');
    const rightImg = document.getElementById('rightImg');
    leftImg.src = Object.values(leftObjects)[lRandom];
    rightImg.src = Object.values(rightObjects)[rRandom];

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
    <div id="PerspLevel">
      <LevelHeader
        text="Click on the shape given by the audio"
        score={levelScore}
      />
      <div className="shapeOverlay flex-col align-center">
        <button className="speaker" onClick={playButton}>
          🔊
        </button>
        <div className="leftRight oneRow">
          <img
            id="leftImg"
            onClick={() => answerEvent(leftObject)}
            height={200}
          />
          <img
            id="rightImg"
            onClick={() => answerEvent(rightObject)}
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
