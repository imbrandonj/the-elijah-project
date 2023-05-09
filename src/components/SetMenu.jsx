// imported components:
import LitPath from "./LitPath";
import MathPath from "./MathPath";
import LogicPath from "./LogicPath";

// imported modules:
import litProblemSets from "../modules/litProblemSets";
import mathProblemSets from "../modules/mathProblemSets";

// imported hooks:
import { useState } from "react";

/*
  Set Menu component

  `subject` argument (passed by PathMenu.jsx) is either "math", "literacy", or "logic"
*/
export default function SetMenu({ subject }) {
  const [setSelect, setSetSelect] = useState();

  // set `problemSets` to the pertaining imported subject
  let problemSets = subject === "math" ? mathProblemSets : litProblemSets;

  const handleClick = (setSet) => {
    if (subject === "math") setSetSelect(<MathPath set={setSet} />);
    else if (subject === "literacy") setSetSelect(<LitPath set={setSet} />);
  };

  // create an array of buttons to display each problem set
  const setButtons = problemSets.map((problemSet, index) => (
    <button onClick={() => handleClick(index + 1)}>{problemSet}</button>
  ));

  // initial render without user set selection:
  if (setSelect == null) {
    return (
      <div id="setMenu">
        <div id="setMenuWrapper">
          <h1>{subject}</h1>
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
