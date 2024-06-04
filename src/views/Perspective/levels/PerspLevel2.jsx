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
  Perspective Level 2

  Level 2 displays 4 shape images. 
  The audio will give the player instructions, such as (left red triangle)

  `setLevelEvent` prop (state) is passed from Perspective view
    - if true, renders a <LevelUp /> component to display from Perspective view
*/
export default function PerspLevel2({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const { playAudio, stopAudio } = useAudio(); // audio global state context
  const [leftObject1, setLeftObject1] = useState(); // is top left object the answer?
  const [leftObject2, setLeftObject2] = useState(); // is bottom left object the answer?
  const [rightObject1, setRightObject1] = useState(); // is top right object the answer?
  const [rightObject2, setRightObject2] = useState(); // is bottom right object the answer?
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

  // image objects, boolean: is correct answer?
  const objects = {
    0: false, // top left
    1: false, // top right
    2: false, // bottom left
    3: false, // bottom right
  };

  console.log('render!');
  useEffect(() => {
    // select random object (1-4, see above `objects`) to be the correct image
    const correctObject = randomNum(3);
    objects[correctObject] = true;
    setLeftObject1(objects[0]);
    setRightObject1(objects[1]);
    setLeftObject2(objects[2]);
    setRightObject2(objects[3]);

    // obtain 4 random values to decide left objects and right objects
    let lRandom1 = randomNum(leftKeys.length - 1); // object 1
    let lRandom2 = randomNum(leftKeys.length - 1); // object 3
    let rRandom1 = randomNum(rightKeys.length - 1); // object 2
    let rRandom2 = randomNum(rightKeys.length - 1); // object 4

    while (lRandom1 === lRandom2) {
      lRandom1 = randomNum(leftKeys.length - 1);
    }

    while (rRandom1 === rRandom2) {
      rRandom1 = randomNum(rightKeys.length - 1);
    }

    let answerKey;
    for (let obj of Object.keys(objects)) {
      if (objects[obj]) {
        switch (obj) {
          case '0':
            answerKey = Object.keys(leftObjects)[lRandom1];
            break;
          case '1':
            answerKey = Object.keys(rightObjects)[rRandom1];
            break;
          case '2':
            answerKey = Object.keys(leftObjects)[lRandom2];
            break;
          case '3':
            answerKey = Object.keys(rightObjects)[rRandom2];
            break;
        }
      }
    }

    // set the img src:
    const leftImg1 = document.getElementById('leftImg1');
    const leftImg2 = document.getElementById('leftImg2');
    const rightImg1 = document.getElementById('rightImg1');
    const rightImg2 = document.getElementById('rightImg2');
    leftImg1.src = Object.values(leftObjects)[lRandom1];
    leftImg2.src = Object.values(leftObjects)[lRandom2];
    rightImg1.src = Object.values(rightObjects)[rRandom1];
    rightImg2.src = Object.values(rightObjects)[rRandom2];

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
      <div className="shapeOverlay flex-col align-center">
        <button className="speaker" onClick={playButton}>
          🔊
        </button>
        <div className="leftRight twoSets">
          <img
            id="leftImg1"
            onClick={() => answerEvent(leftObject1)}
            height={140}
          />
          <img
            id="rightImg1"
            onClick={() => answerEvent(rightObject1)}
            height={140}
          />
        </div>
        <div className="leftRight twoSets">
          <img
            id="leftImg2"
            onClick={() => answerEvent(leftObject2)}
            height={140}
          />
          <img
            id="rightImg2"
            onClick={() => answerEvent(rightObject2)}
            height={140}
          />
        </div>
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Click the speaker to hear the audio again." />
    </div>
  );
}
