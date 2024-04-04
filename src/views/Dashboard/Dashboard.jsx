// imported components:
import DashEntry from './DashEntry.jsx';
import SelectMission from './SelectMission.jsx';
import Mission from './Mission.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import RocketButton from '@root/components/RocketButton/RocketButton.jsx';

import './Dashboard.css';
import '@root/components/RocketButton/RocketButton.css';

import { useState } from 'react';

/*
  Dashboard.jsx

*/
export default function Dashboard() {
  const [dashSelect, setDashSelect] = useState('entry'); // user selection from DashEntry ('')
  const [missionSelect, setMissionSelect] = useState('');

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
        ) : null}

        {missionSelect.length === 0 ? (
          <Tipbox text="Navigate: Use the keyboard arrows or use the mouse to click, grab, and pull." />
        ) : (
          <Tipbox text="User Experience: Turn the sound on. Each level begins with an audible explanation." />
        )}
      </div>
    </div>
  );
}
