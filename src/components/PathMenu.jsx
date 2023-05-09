// imported components:
import SetMenu from "./SetMenu";

// imported hooks:
import { useState } from "react";

export default function PathMenu() {
  const [pathSelect, setPathSelect] = useState("main");

  // Click event to begin Math path:
  const setPathMath = () => setPathSelect(<SetMenu subject={"math"} />);
  // Click event to begin Logic path:
  const setPathLogic = () => setPathSelect(<SetMenu subject={"logic"} />);
  // Click event to begin Literacy path:
  const setPathLit = () => setPathSelect(<SetMenu subject={"literacy"} />);

  // Initial render without user path selection
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
    // Render after user path selection:
  } else {
    return pathSelect; // renders an imported component: MathPath, LogicPath, or LitPath
  }
}
