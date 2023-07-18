// imported components:
import DashEntry from './DashEntry.jsx';
import MissionSelect from './MissionSelect.jsx';
import Mission from './Mission.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

import './Dashboard.css';

import { useState } from 'react';

/*
  Dashboard.jsx

*/
export default function Dashboard({ setView }) {
  const [dashSelect, setDashSelect] = useState('entry'); // user selection from DashEntry ('')
  const [missionSelect, setMissionSelect] = useState('');

  return (
    <div id="Dashboard">
      <div id="dashboardWrap">
        <h1>the Elijah project</h1>
        {dashSelect === 'entry' ? (
          <DashEntry setDashSelect={setDashSelect} />
        ) : dashSelect === 'launch' && missionSelect.length === 0 ? (
          <MissionSelect
            setMissionSelect={setMissionSelect}
            setDashSelect={setDashSelect}
          />
        ) : missionSelect.length > 0 ? (
          <div>
            <Mission
              missionSelect={missionSelect}
              setMissionSelect={setMissionSelect}
              setDashSelect={setDashSelect}
              setView={setView}
            />
          </div>
        ) : null}
        {missionSelect.length === 0 ? (
          <Tipbox text="Navigate: Use the keyboard arrows or use the mouse to click, grab, and pull." />
        ) : (
          <Tipbox text="User Experience: Turn the sound on. Each level begins with an explanation." />
        )}
      </div>
    </div>
  );
}
