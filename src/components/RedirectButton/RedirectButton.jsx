import './RedirectButton.css';

export default function RedirectButton({ text, onclick, color, css }) {
  return (
    <button
      className={`redirect-button ${
        color === 'black'
          ? 'bkg-blk-overlay hover-blue'
          : 'bkg-btn-blue hover-black'
      } ${css}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
