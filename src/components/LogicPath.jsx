// imported components:
import RocketHeader from './RocketHeader';
import SetHeader from './SetHeader';
import ClickObject from './ClickObject';
import Footbox from './Footbox';
import Timer from './Timer';

import '../styles/LogicPath.css'; // component styles

// imported hooks:
import { useState, useRef } from 'react';

/*
  Logic Path component

  `set` argument (passed by SetMenu.jsx) indicates which problem set to begin with

  The logic path differs from its Math and Lit siblings and is much more complex...
  LogicPath calls components to display its problem set
  The problem sets can be as simple as clicking an object or as large as a minigame.
*/
export default function LogicPath({ set }) {
  const [problemSet, setProblemSet] = useState(set); // question problem set

  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader />

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
