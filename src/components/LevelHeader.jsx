import Objective from './Objective';
import Score from './Score';
export default function LevelHeader({ text, score }) {
  return (
    <div id="LevelHeader">
      <Objective text={text} />
      <Score score={score} />
    </div>
  );
}
