// imported components:
import ArithLevel1 from './ArithLevel1.jsx';
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';

// imported assets:
import ArithAudio from '@root/assets/mp3/ArithEntry1.mp3';
import operators from '@root/assets/svgs/operators.svg';

import { useState } from 'react';

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
        <div className="para-img">
          <p>
            Welcome to Arith! <br />
            <br />
            This is a place to build your math skills. <br />
            Do you know what math is? <br />
            <br />
            Let's begin with the easiest math. <br /> <br />
            Count and add 20 objects. <br />
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
          <img src={operators} height={200} />
        </div>
        <BeginButton text={'begin!'} onclick={beginButton} />
      </div>
    );

    // begin button clicked:
  } else {
    return <ArithLevel1 setLevelEvent={setLevelEvent} />;
  }
}
