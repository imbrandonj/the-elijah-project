// imported components:
import DashEntry from './DashEntry.jsx';
import MissionSelect from './MissionSelect.jsx';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';

import './Dashboard.css';

import { useState } from 'react';

/*
  Dashboard.jsx

*/
export default function Dashboard({ setView }) {
  const [dashSelect, setDashSelect] = useState('entry'); // user selection from DashEntry ('')
  return (
    <div id="Dashboard">
      <div id="dashboardWrap">
        {dashSelect === 'entry' ? (
          <DashEntry setDashSelect={setDashSelect} />
        ) : dashSelect === 'launch' ? (
          <MissionSelect setDashSelect={setDashSelect} />
        ) : null}

        <Tipbox
          className="Tipbox"
          text="Navigate: Use the keyboard arrows or use the mouse to click, grab, and pull."
        />
      </div>
    </div>
  );
}
