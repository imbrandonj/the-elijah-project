// imported components:
import LitPath from "./LitPath";
import MathPath from "./MathPath";
import LogicPath from "./LogicPath";

// imported modules:
import litProblemSets from "../modules/litProblemSets";
import mathProblemSets from "../modules/mathProblemSets";

// imported hooks:
import { useState } from "react";

export default function SetMenu({ subject }) {
  const [setSelect, setSetSelect] = useState();

  // set `problemSets` to the correct imported subject
  let problemSets = subject === "math" ? mathProblemSets : litProblemSets;

  // stores subject and the pertaining problem sets
  // `problemSets` is an array from the imported subject module
  const pathContent = {
    subject,
    problemSets,
  };

  const handleClick = (setSet) => {
    setSetSelect(setSet);
  };

  const setButtons = problemSets.map((problemSet, index) => (
    <button onClick={() => handleClick(index)}>{problemSet}</button>
  ));

  return (
    <div id="setMenu">
      <div className="cardWrapper">
        <h1>{pathContent.subject}</h1>
        <button onClick={() => handleClick(0)}>Beginning</button>
        {setButtons}
      </div>
    </div>
  );
}
