import '../styles/RocketButton.css';

/*
  RocketButton component

  Displays `text` and Rocket emoji which redirects the user home
  `position` argument is in reference to the rocket emoji in relation to `text`
  either "front", "behind", or "below"
  `movement` is either "vertical" or "horizontal", in reference to css hover movement
*/
export default function RocketButton({ text, position, movement }) {
  const redirect = () => {
    location.reload();
  };

  // return component
  if (position === 'below' && movement === 'horizontal') {
    return (
      <button
        id="rocketButton"
        className="rocketBelow horizontalBounce"
        onClick={redirect}
      >
        {text}
        <span className="rocketHorizontal">🚀</span>
      </button>
    );
  } else if (position === 'behind' && movement === 'vertical') {
    return (
      <button id="rocketButton" className="verticalBounce" onClick={redirect}>
        {text}
        <span className="rocketVertical">🚀</span>
      </button>
    );
  }
}
