// imported components:
import ArithLevel1 from './ArithLevel1.jsx';

// imported modules:
import speakText from '@root/modules/speakText.js';

import { useState, useEffect } from 'react';

/*
  Arith Level 1 Entry

  `setLevelEvent` prop (state) is passed from Arith `view`
    - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel1Entry({ setLevelEvent }) {
  const [begin, setBegin] = useState(false);

  const beginButton = () => setBegin(true);

  const text1 =
    'Welcome to Arith! During your journey, you will become well acquainted with numbers. Along the way, you will count, add, subtract, and implement mathematical operations.';

  const text2 =
    'Your mastery of the planet Arith shall lead you to great success with arithmetic mathematics. But before we get too far ahead, you must take your first steps. How are you with counting? Can you add and count objects?';

  const text3 =
    "Prove it! Count and add 20 objects. When you're ready to begin, click the begin button.";

  // const text = 'This is a stupid fucking test here.';
  // landing:
  if (!begin) {
    const synth = window.speechSynthesis;

    setTimeout(() => {
      let voices = synth.getVoices();
      console.log(voices);
      const msg = new SpeechSynthesisUtterance();
      if (voices.length > 22) {
        msg.voice = voices[107];
      } else {
        msg.voice = voices[6];
      }
      msg.text = text1;
      synth.speak(msg);
      msg.text = text2;
      synth.speak(msg);
      msg.text = text3;
      synth.speak(msg);
    }, 1000);

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
        <button id="BeginButton" onClick={beginButton}>
          begin!
        </button>
      </div>
    );

    // begin button clicked:
  } else {
    return <ArithLevel1 setLevelEvent={setLevelEvent} />;
  }
}
