// imported components:
import LitPath from '@root/views/Literacy/LitPath/LitPath.jsx';
import MathPath from '@root/views/Math/MathPath/MathPath.jsx';
import LogicPath from '@root/views/Perspective/LogicPath/LogicPath.jsx';

// imported modules:
import litProblemSets from '@root/modules/litProblemSets';
import mathProblemSets from '@root/modules/mathProblemSets';

import './SetMenu.css'; // component styles

// imported hooks:
import { useState } from 'react';

/*
  Set Menu component

  `path` argument (passed by PathMenu.jsx) is either "math", "literacy", or "logic"
*/
export default function SetMenu({ path }) {
  const [setSelect, setSetSelect] = useState();

  // set `problemSets` to the pertaining imported path
  let problemSets = path === 'math' ? mathProblemSets : litProblemSets;

  // !add comments explaining this one!
  const handleClick = setSet => {
    if (path === 'math') setSetSelect(<MathPath set={setSet} />);
    else if (path === 'literacy') setSetSelect(<LitPath set={setSet} />);
    else if (path === 'logic') setSetSelect(<LogicPath set={setSet} />);
  };

  // create an array of buttons to display each problem set
  const setButtons = problemSets.map((problemSet, index) => (
    <button key={problemSet} onClick={() => handleClick(index + 1)}>
      {problemSet}
    </button>
  ));

  // initial render without user set selection:
  if (setSelect == null) {
    return (
      <div id="setMenu">
        <div id="setMenuWrapper">
          <h1>{path}</h1>
          <button id="beginningButton" onClick={() => handleClick(1)}>
            Begin Here
          </button>
          <h2>jump to:</h2>
          <div id="setButtonWrapper">{setButtons}</div>
        </div>
      </div>
    );
    // render after user set selection:
  } else {
    return setSelect; // renders an imported component: MathPath, LogicPath, or LitPath
  }
}
