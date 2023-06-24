import './RocketHeader.css'; // component styles

// displays wiggling Rocket which redirects the user home
export default function RocketHeader() {
  // change this to nav bar? perhaps an SVG icon animation
  return (
    <header id="rocketHeader">
      <h1>the ELIJAH PROJECT</h1>
      <a className="rocketBig" href="index.html">
        🚀
      </a>
    </header>
  );
}
