// imported components:
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';
import Text from '@root/components/Text.jsx';
import arithImg from '@root/assets/svgs/arith.svg';
import alphaImg from '@root/assets/svgs/alpha-literacy.svg';
import perspImg from '@root/assets/svgs/perspective.svg';

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
  const audio = new Audio(voice);

  const beginButton = () => {
    audio.pause();
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

  console.log(planet);

  audio.play();
  // display explanation:
  return (
    <div id="LevelEntry">
      <h2>
        <img src={planetImg} height={88} /> {h2Text}
      </h2>
      <div className="para-img">
        <Text text={text} />
        <img src={img} height={250} />
      </div>
      <BeginButton text={'begin!'} onclick={beginButton} />
    </div>
  );
}
