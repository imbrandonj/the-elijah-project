// imported components:
import ArithLevel1 from './ArithLevel1.jsx';
import BeginButton from '@root/components/BeginButton.jsx';

import { useState } from 'react';

import ArithAudio from '@root/assets/mp3/ArithEntry1.mp3';

/*
  Arith Level 1 Entry

  `setLevelEvent` prop (state) is passed from Arith `view`
    - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel1Entry({ setLevelEvent }) {
  const [begin, setBegin] = useState(false);
  const audio = new Audio(ArithAudio);

  const beginButton = () => {
    audio.pause();
    setBegin(true);
  };

  // landing:
  if (!begin) {
    audio.play();
    // display Arith explanation:
    return (
      <div id="ArithEntry">
        <h2>Arith Level 1</h2>
        <p>
          Welcome to Arith! <br />
          <br />
          During your journey, you will become well acquainted with numbers.
          <br />
          Along the way, you will count, add, subtract, and implement
          mathematical operations. <br />
          Your mastery of the planet Arith shall lead you to great success with
          arithmetic mathematics. <br />
          <br />
          But before we get too far ahead, you must take your first steps.
          <br />
          How are you with counting? <br />
          Can you add and count objects? <br />
          Prove it! <br />
          <br />
          Count and add 20 objects. <br />
          When you're ready to begin, click the begin button.
        </p>
        <BeginButton text={'begin!'} onclick={beginButton} />
      </div>
    );

    // begin button clicked:
  } else {
    return <ArithLevel1 setLevelEvent={setLevelEvent} />;
  }
}
