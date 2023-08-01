import './BeginButton.css';

export default function BeginButton({ text, onclick }) {
  return (
    <button id="BeginButton" onClick={onclick}>
      {text}
    </button>
  );
}
