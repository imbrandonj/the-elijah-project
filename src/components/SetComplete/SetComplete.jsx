import './SetComplete.css';

export default function SetComplete({ level, newLevel, planet, planetImg }) {
  const set = level / 5;

  return (
    <div id="setComplete">
      <h3>
        <img src={planetImg} height={70} />
        {planet} exercise set {set} finished
      </h3>
      <div className="setWrap">
        <h2>challenge complete</h2>
        <button onClick={newLevel}>Continue to Next Set</button>
      </div>
    </div>
  );
}
