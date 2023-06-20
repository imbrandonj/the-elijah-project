import '../styles/LevelUp.css'; // component styles

export default function LevelUp({
  path, // subject: "Math", "Literacy", or "Logic"
  level, // level completed
  setLevel, // increment level
  setLevelEvent, // reset level event
}) {
  // time to complete level
  let time = localStorage.getItem('time');

  // continue button click event
  const continueEvent = () => {
    setLevel(level + 1);
    setLevelEvent(false);
  };

  return (
    <div id="levelUp">
      <div id="levelWrapper">
        <h2>{path} path level up!</h2>
        <h3>Level {level} complete.</h3>
        <p>Time to complete: {time} seconds.</p>
        <button onClick={continueEvent}>Continue to next level</button>
      </div>
    </div>
  );
}
