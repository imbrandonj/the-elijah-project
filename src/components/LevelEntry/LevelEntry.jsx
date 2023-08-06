// imported components:
import AlphaLevel1 from '@root/views/Alpha-Literacy/levels/AlphaLevel1.jsx';
import BeginButton from '@root/components/BeginButton/BeginButton.jsx';
import Text from '@root/components/Text.jsx';

import './LevelEntry.css';

/*
  LevelEntry.jsx

  Props explained:
  - All Entrys allow a go back to level select
    - `setView` will put the user back to 'Dashboard' (`view` prop)
      - Call last because it relies on these props:
    - `setDashSelect` will bring the user to 'Launch' state
    - `setMissionSelect` will bring the user to 'Alpha-Literacy'
  - `setBegin` prop (state) begins the level, if begin button is clicked
  - `setLevelEvent` prop (state) is passed from AlphaLit `view`
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function LevelEntry({
  voice,
  img,
  h2Text,
  text,
  setView,
  view,
  setBegin,
  setLevelUpEvent,
}) {
  const audio = new Audio(voice);

  const beginButton = () => {
    audio.pause();
    setBegin(true);
  };

  // const goBack = () => {
  //   audio.pause();
  //   setView(view);
  // };

  audio.play();
  // display explanation:
  return (
    <div id="LevelEntry">
      <h2>{h2Text}</h2>
      <div className="para-img">
        <Text text={text} />
        <img src={img} height={200} />
      </div>
      <BeginButton text={'begin!'} onclick={beginButton} />
    </div>
  );
}
