import './SetButton.css';

export default function SetButton({ set, score, onclick }) {
  return (
    <button className="set-button" onClick={onclick}>
      Set {set}
      <span>{score}</span>
    </button>
  );
}
