import MathPath from "./MathPath";
import LitPath from "./LitPath";
import LogicPath from "./LogicPath";

import { useState } from "react";

export default function PathMenu() {
  const [pathSelect, setPathSelect] = useState("main");

  // Click event to begin Math path:
  const setPathMath = () => setPathSelect("math");
  // Click event to begin Logic path:
  const setPathLogic = () => setPathSelect("logic");
  // Click event to begin Literacy path:
  const setPathLit = () => setPathSelect("lit");

  if (pathSelect === "main") {
    return (
      <div id="pathMenu">
        <div className="cardWrapper">
          <h1>The Elijah Project</h1>
          <div>
            <button onClick={setPathMath}>Math</button>
            <button onClick={setPathLogic}>Logic</button>
            <button onClick={setPathLit}>Literacy</button>
          </div>
        </div>
      </div>
    );
  } else if (pathSelect === "math") {
    return <MathPath />;
  } else if (pathSelect === "logic") {
    return <LogicPath />;
  } else if (pathSelect === "lit") {
    return <LitPath />;
  }
}
