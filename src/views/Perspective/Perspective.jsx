// imported components:
import RocketHeader from '@root/components/RocketHeader/RocketHeader';
import Footbox from '@root/components/Footbox/Footbox';
import Timer from '@root/components/Timer/Timer';

import './Perspective.css'; // component styles

/*
  Perspective

*/
export default function LogicPath({ setView }) {
  console.log('Render!');

  // return component
  return (
    <div>
      <RocketHeader setView={setView} />

      <div id="logicPath">
        <div id="logicWrapper">
          <h2>Perspective coming soon.</h2>
          <p>
            Arith and Alpha-Literacy are both available
            <br />
            Press the rocket to return home
          </p>
        </div>
      </div>
    </div>
  );
}
