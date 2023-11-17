// imported internal components:
import LevelHeader from '@root/components/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import tallyUp from '@root/modules/tallyUp.js';
import generateProblem from '@root/modules/generateProblem';

import '../Perspective.css';

// imported hooks:
import { useState, useEffect, useRef } from 'react';

// imported svgs:
import blueTriangle from '@root/assets/svgs/blueTriangle.svg';
import greenTriangle from '@root/assets/svgs/greenTriangle.svg';

/*
  Perspective Level 1

  `setLevelEvent` prop (state) is passed from Perspective view
    - if true, renders a <LevelUp /> component to display from Perspective view
*/
export default function PerspLevel1({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // correct tally

  let audio = 'test';

  // audio plays on component render
  useEffect(() => {
    console.log(audio);
    const mp3 = new Audio(audio);
    mp3.play(); // play on problem load
  }, [correctTally]);

  const playButton = () => {
    const mp3 = new Audio(audio);
    console.log('test from play button');
    console.log(audio);
    mp3.play();
  };

  return (
    <div id="PerspLevel">
      <LevelHeader
        text="Click on the shape given by the audio"
        score={levelScore}
      />
      <div className="shapeOverlay">
        <button className="speaker" onClick={playButton}>
          🔊
        </button>
        <div className="leftRight">
          <img
            src={greenTriangle}
            onClick={() => console.log('test')}
            height={200}
          />
          <img
            src={blueTriangle}
            onClick={() => console.log('test')}
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
