/*
  RocketButton component

  Displays `text` and Rocket emoji which redirects the user home
  `position` argument is either "first" or "last"
  positioning `text` either in front of the rocket or after it

  The positioning of the rocket and how it faces also changes (css)
  according to the className given
*/
export default function RocketButton({ text, position }) {
  const redirect = () => {
    location.reload();
  };

  // return component
  return (
    <button id="rocketButton" onClick={redirect}>
      {position === "first" ? text : null}
      <span className="rocketSmall">🚀</span>
      {position === "last" ? text : null}
    </button>
  );
}
