// imported components:
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';
import Text from '@root/components/Text.jsx';
import arithImg from '@root/assets/img/arith.webp';
import alphaImg from '@root/assets/img/alpha-lit.webp';
import perspImg from '@root/assets/img/perspective.webp';

// imported useContext:
import { useAudio } from '@root/contexts/AudioContext';

import { useEffect } from 'react';

import './LevelEntry.css';

/*
  LevelEntry.jsx

  - `setBegin` prop (state) begins the level, if begin button is clicked
*/
export default function LevelEntry({
  voice,
  img,
  planet,
  h2Text,
  text,
  setBegin,
}) {
  const { playAudio, stopAudio } = useAudio(); // Audio useContext

  // audio must be played during the commit phase, not render phase
  useEffect(() => {
    playAudio(voice);

    return () => stopAudio(); // clean up audio fn when component unmounts or re-renders
  }, []);

  const beginButton = () => {
    stopAudio();
    setBegin(true);
  };

  // planet display in h2:
  const planetImg =
    planet === 'Arith'
      ? arithImg
      : planet === 'AlphaLit'
      ? alphaImg
      : planet === 'Persp'
      ? perspImg
      : null;

  // display explanation:
  return (
    <div id="LevelEntry" className="flex-col align-center">
      <h2 className="flex align-center small-caps">
        <img src={planetImg} height={100} /> {h2Text}
      </h2>
      <hr />
      <div className="entry-row flex align-center">
        <div className="text-box flex-col align-center justify-center">
          <Text text={text} />
          <BeginButton text={'begin!'} onclick={beginButton} />
        </div>
        {/* <div>
          <img src={img} height={250} />
          <hr />
        </div> */}
      </div>
    </div>
  );
}
