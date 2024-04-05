import './RedirectButton.css';

export default function RedirectButton({ text, onclick, css }) {
  return (
    <button className={`redirect-button ${css}`} onClick={onclick}>
      {text}
    </button>
  );
}
