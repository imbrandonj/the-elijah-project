import './EraseButton.css';

export default function EraseButton({ text, onclick, color, css }) {
  return (
    <button
      className={`erase-button ${
        color === 'black'
          ? 'bkg-blk-overlay pink eraser-blue'
          : 'bkg-btn-blue red eraser-black'
      } ${css}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
