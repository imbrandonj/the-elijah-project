// imported internal components:
import LevelHeader from '@root/components/LevelHeader/LevelHeader.jsx';
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

// imported internal modules:
import tallyUp from '@root/modules/tallyUp.js';

import '../AlphaLit.css';

// imported hooks:
import { useState, useEffect } from 'react';

/*
  Alpha-Literacy Level 7

  `setLevelEvent` prop (state) is passed from AlphaLit view
    - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function AlphaLevel7({
  setLevelUpEvent,
  levelScore,
  setLevelScore,
}) {
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const [emojiStr, setEmojiStr] = useState([
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
    '🐈',
    '🐕',
  ]);
  const [dogStr, setDogStr] = useState('');
  const [catStr, setCatStr] = useState('');
  const [word, setWord] = useState('');

  const hashKey = { '🐈': 'cat', '🐕': 'dog' };

  // focuses on input box with each render
  useEffect(() => {
    document.getElementById('litAns').focus();
  }, []);

  const answerEvent = userAnswer => {
    // correct answer event:
    if (userAnswer === hashKey[emojiStr[0]]) {
      // module answerEvent.js
      tallyUp(
        20, // `totalQuestions`
        correctTally, // total correct tally (state)
        setCorrectTally, // to set total correct tally (set state)
        setLevelUpEvent // to set a level up event and display `LevelUp` component on rerender (set state)
      );

      setLevelScore(levelScore + 20);

      // update each string after answering
      let newEmojiStr = emojiStr.slice(1); // pop the front of the stack
      if (emojiStr[0] === '🐕') {
        setDogStr(prevDogStr => [...prevDogStr, emojiStr[0]]);
      } else {
        setCatStr(prevCatStr => [...prevCatStr, emojiStr[0]]);
      }
      setEmojiStr(newEmojiStr);

      // setProblem(generateProblem(problemSet, problemHistory, true)); // generate a unique problem
    } else if (levelScore >= 10) {
      setLevelScore(levelScore - 10);
    }
  };

  return (
    <div id="litLevel" className="flex-col align-center">
      <LevelHeader text="Separate the cats & dogs!" score={levelScore} />
      <div id="emojiLevel" className="flex align-center justify-evenly">
        <p className="emojiBundle">{emojiStr}</p>
        <div id="litProb">
          <p>
            <span className="emojiQ">{emojiStr[0]}</span>
            <br />
            <br />
            <span className="wordQ">{hashKey[emojiStr[0]]}</span>
          </p>
          <input
            id="litAns"
            type="text"
            onKeyDown={event => {
              // set the value of the user's answer
              let inputValue = event.target.value;

              // listen for enter keydown
              if (event.key === 'Enter') {
                // case insensitive
                inputValue = inputValue.toLowerCase();

                answerEvent(inputValue);
                event.target.value = ''; // clears the input box
              }
            }}
          />
        </div>
        <div className="flex-col">
          <p className="emojiBundle">{catStr}</p>
          <p className="emojiBundle">{dogStr}</p>
        </div>
      </div>
      <Footbox correct={correctTally} />
      <Timer />
      <Tipbox text="Tip: Practice saying the word and speaking each letter as you type them." />
    </div>
  );
}
