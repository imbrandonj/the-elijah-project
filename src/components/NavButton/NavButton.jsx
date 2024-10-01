import './NavButton.css';

export default function NavButton({ onclick, direction }) {
  return (
    <button className="navBtn" onClick={onclick}>
      {direction}
    </button>
  );
}
