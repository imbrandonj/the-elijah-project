// imported components:
import SetMenu from "./SetMenu";

// imported hooks:
import { useState } from "react";

/*
  Path Menu Component
*/
export default function PathMenu() {
  const [pathSelect, setPathSelect] = useState("main");

  // click event to begin Math path:
  const setPathMath = () => setPathSelect(<SetMenu subject={"math"} />);
  // click event to begin Logic path:
  const setPathLogic = () => setPathSelect(<SetMenu subject={"logic"} />);
  // click event to begin Literacy path:
  const setPathLit = () => setPathSelect(<SetMenu subject={"literacy"} />);

  // initial render without user path selection:
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
    // render after user path selection:
  } else {
    return pathSelect; // renders SetMenu with `subject` argument
  }
}
