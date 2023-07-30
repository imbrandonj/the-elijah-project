import './RocketButton.css';

/*
  RocketButton component

  Displays `text` and a Rocket emoji which calls the `onclick` prop
    - `position` prop references where the rocket emoji is in relation to the `text`
      either "front", "behind", or "below" (front currently not implemented)
    - `movement` is either "vertical", "horizontalRight", or "horizontalLeft"
      - this references the direction the Rocket emoji faces and which way it moves on css :hover
*/
export default function RocketButton({ text, position, movement, onclick }) {
  // return component
  if (position === 'below' && movement === 'horizontalRight') {
    return (
      <button
        id="rocketButton"
        className="rocketBelow horizontalBounceRight"
        onClick={onclick}
      >
        {text}
        <span className="rocketHorizontalRight">🚀</span>
      </button>
    );
  } else if (position === 'below' && movement === 'horizontalLeft') {
    return (
      <button
        id="rocketButton"
        className="rocketBelow horizontalBounceLeft"
        onClick={onclick}
      >
        {text}
        <span className="rocketHorizontalLeft">🚀</span>
      </button>
    );
  } else if (position === 'behind' && movement === 'vertical') {
    return (
      <button id="rocketButton" className="verticalBounce" onClick={onclick}>
        {text}
        <span className="rocketVertical">🚀</span>
      </button>
    );
  }
}
