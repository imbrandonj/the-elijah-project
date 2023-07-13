// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader';
import SetHeader from '@root/components/SetHeader/SetHeader';
import ClickObject from '@root/components/ClickObject';
import Footbox from '@root/components/Footbox/Footbox';
import Timer from '@root/components/Timer/Timer';

import './LogicPath.css'; // component styles

/*
  Logic Path component

  `set` argument (passed by SetMenu.jsx) indicates which problem set to begin with

  The logic path differs from its Math and Lit siblings and is much more complex...
  LogicPath calls components to display its problem set
  The problem sets can be as simple as clicking an object or as large as a minigame.
*/
export default function LogicPath({ setView }) {
  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />

      <div id="logicPath">
        <div id="logicWrapper">
          {/* <SetHeader subject={"Logic"} set={problemSet} />
          <ClickObject set={problemSet} setSet={setProblemSet} />
          <Timer /> */}
          <h2>Logic Path coming soon.</h2>
          <p>
            Math and Literacy paths available
            <br />
            Press the rocket to return home
          </p>
        </div>
      </div>
    </div>
  );
}
