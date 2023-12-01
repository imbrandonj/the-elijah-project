import './BeginButton.css';

export default function BeginButton({ text, onclick }) {
  return (
    <button className="begin-button" onClick={onclick}>
      {text}
    </button>
  );
}
