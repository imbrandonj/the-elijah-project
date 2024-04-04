import Objective from './Objective.jsx';
import Score from './Score.jsx';

import './LevelHeader.css';

export default function LevelHeader({ text, score }) {
  return (
    <div id="LevelHeader" className="flex align-center justify-around">
      <Objective text={text} />
      <Score score={score} />
    </div>
  );
}
