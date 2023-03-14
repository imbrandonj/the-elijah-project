import PathMenu from "./PathMenu";
import { useState } from "react";

export default function MainMenu() {
  const [menuSelect, setMenuSelect] = useState("main");

  const handleClick = () => {
    setMenuSelect("start");
  };

  if (menuSelect === "main") {
    return (
      <div id="mainMenu">
        <div className="cardWrapper">
          <h1>The Elijah Project</h1>
          <button onClick={handleClick}>Start</button>
          <button>About</button>
          <button>History</button>
        </div>
      </div>
    );
  } else if (menuSelect === "start") {
    return <PathMenu />;
  }
}
