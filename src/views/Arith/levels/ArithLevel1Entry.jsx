import ArithLevel1 from './ArithLevel1.jsx';

import { useState } from 'react';

/*
  Arith Level 1 Entry

  `setLevelEvent` prop (state) is passed from Arith `view`
    - if true, renders a <LevelUp /> component to display from Arith view
*/
export default function ArithLevel1Entry({ setLevelEvent }) {
  const [begin, setBegin] = useState(false);

  const beginButton = () => setBegin(true);

  if (!begin) {
    // display ArithLevel1Entry explanation
    return (
      <div id="mathWrapper">
        <p>Hello, I am Arith Level 1 Entry</p>
        <button onClick={beginButton}>Begin!</button>
      </div>
    );

    // begin button clicked:
  } else {
    return <ArithLevel1 setLevelEvent={setLevelEvent} />;
  }
}
