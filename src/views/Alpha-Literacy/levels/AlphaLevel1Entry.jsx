import AlphaLevel1 from './AlphaLevel1.jsx';

import { useState } from 'react';

/*
  Alpha-Literacy Level 1 Entry

  `setLevelEvent` prop (state) is passed from AlphaLit `view`
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel1Entry({ setLevelEvent }) {
  const [begin, setBegin] = useState(false);

  const beginButton = () => setBegin(true);

  if (!begin) {
    // display AlphaLevel1Entry explanation
    return (
      <div id="litWrapper">
        <h2>Alpha-Literacy Level 1</h2>
        <button onClick={beginButton}>Begin!</button>
      </div>
    );
    // begin button clicked:
  } else {
    return <AlphaLevel1 setLevelEvent={setLevelEvent} />;
  }
}