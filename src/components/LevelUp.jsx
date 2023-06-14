export default function LevelUp({ path, level, setLevel, setLevelEvent }) {
  const continueEvent = () => {
    setLevel(level + 1);
    setLevelEvent(false);
  };

  return (
    <div id="levelUp">
      <div id="levelWrapper">
        <h2>{path} path level up !</h2>
        <h3>Level {level} complete.</h3>
        <button onClick={continueEvent}>Continue to next level</button>
      </div>
    </div>
  );
}
