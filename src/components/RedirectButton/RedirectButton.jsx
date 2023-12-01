import './RedirectButton.css';

export default function RedirectButton({ text, onclick }) {
  return (
    <button className="redirect-button" onClick={onclick}>
      {text}
    </button>
  );
}
