import './RocketHeader.css'; // component styles
import { useView } from '@root/contexts/ViewContext.jsx';
import { useAudio } from '@root/contexts/AudioContext';

// displays wiggling Rocket which redirects the user home
export default function RocketHeader() {
  // change this to nav bar? perhaps an SVG icon animation

  const { setView } = useView();
  const { stopAudio } = useAudio();

  const redirect = () => {
    stopAudio();
    setView('Dashboard');
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
