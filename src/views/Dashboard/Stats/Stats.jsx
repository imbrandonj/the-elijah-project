import { usePlayer } from '@root/contexts/PlayerContext.jsx'; // global context
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

import './Stats.css';

export default function Stats({ setDashSelect }) {
  const { playerProfile } = usePlayer(); // context
  console.log(playerProfile);
  return (
    <div id="Stats" className="flex-col justify-center align-center">
      <h2>Player Statistics</h2>
      <hr />
      <RedirectButton onclick={() => setDashSelect('entry')} text={'Go Back'} />
    </div>
  );
}
