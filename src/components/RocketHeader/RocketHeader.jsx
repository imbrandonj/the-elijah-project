import './RocketHeader.css'; // component styles

// displays wiggling Rocket which redirects the user home
export default function RocketHeader({ setView }) {
  // change this to nav bar? perhaps an SVG icon animation

  const redirect = () => {
    setView('MainMenu');
  };

  return (
    <header id="rocketHeader">
      <h1>the ELIJAH PROJECT</h1>
      <span className="rocketBig" onClick={redirect}>
        🚀
      </span>
    </header>
  );
}
