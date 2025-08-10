// imported components:
import DashEntry from './DashEntry.jsx';
import SelectMission from './SelectMission.jsx';
import Mission from './Mission.jsx';
import Stats from './Stats/Stats.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import RocketButton from '@root/components/RocketButton/RocketButton.jsx';

import './Dashboard.css';

import { useState } from 'react';

/*
  Dashboard.jsx

  planet argument redirects the user to the planet overview

*/
export default function Dashboard({ planet }) {
  const [dashSelect, setDashSelect] = useState(planet ? 'launch' : 'entry'); // user selection from DashEntry ('')
  const [missionSelect, setMissionSelect] = useState(planet ? planet : '');
  console.log(planet ? planet : '');
  console.log(dashSelect);

  const rocketClick = () => {
    setMissionSelect('');
  };

  return (
    <div id="Dashboard" className="flex justify-center">
      {missionSelect.length > 0 ? (
        <RocketButton
          text="go back"
          position="below"
          movement="horizontalLeft"
          onclick={rocketClick}
        />
      ) : null}

      <div id="dashboardWrap" className="flex-col align-center">
        <h1 className="self-start">the Elijah project</h1>

        {dashSelect === 'entry' ? (
          <DashEntry setDashSelect={setDashSelect} />
        ) : dashSelect === 'launch' && missionSelect.length === 0 ? (
          <SelectMission
            setMissionSelect={setMissionSelect}
            setDashSelect={setDashSelect}
          />
        ) : missionSelect.length > 0 ? (
          <div>
            <Mission
              missionSelect={missionSelect}
              setMissionSelect={setMissionSelect}
              setDashSelect={setDashSelect}
            />
          </div>
        ) : dashSelect === 'stats' ? (
          <Stats setDashSelect={setDashSelect} />
        ) : null}

        {dashSelect === 'stats' ? null : missionSelect.length === 0 ? (
          <Tipbox text="Navigate: Use your keyboard arrows or use the mouse to click, grab, and pull." />
        ) : (
          <Tipbox text="User Experience: Turn the sound on. Each level begins with an audible explanation." />
        )}
      </div>
    </div>
  );
}
