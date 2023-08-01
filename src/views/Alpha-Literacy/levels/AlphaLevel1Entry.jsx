// imported components:
import AlphaLevel1 from './AlphaLevel1.jsx';
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';

// imported assets:
import AlphaAudio from '@root/assets/mp3/AlphaEntry1.mp3';
import astroUSA from '@root/assets/svgs/astro-usa.svg';

import { useState } from 'react';

/*
  Alpha-Literacy Level 1 Entry

  `setLevelEvent` prop (state) is passed from AlphaLit `view`
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel1Entry({ setLevelEvent }) {
  const [begin, setBegin] = useState(false);
  const audio = new Audio(AlphaAudio);

  const beginButton = () => {
    audio.pause();
    setBegin(true);
  };

  if (!begin) {
    audio.play();
    // display AlphaLevel1Entry explanation
    return (
      <div id="litEntry">
        <h2>Alpha-Literacy Level 1</h2>
        <div className="para-img">
          <p>
            Welcome to planet Alpha-Literacy. <br />
            <br />
            Here, you will navigate the English alphabet. <br />
            Do you know your way around the keyboard yet? <br />
            Don't worry, you'll get plenty of practice. <br /> <br />
            Prepare your fingers! <br />
            Click the <span className="italic">Begin!</span> button <br />
          </p>
          <img src={astroUSA} height={200} />
        </div>
        <BeginButton text={'begin!'} onclick={beginButton} />
      </div>
    );
    // begin button clicked:
  } else {
    return <AlphaLevel1 setLevelEvent={setLevelEvent} />;
  }
}
