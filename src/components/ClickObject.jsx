// imported components:
import Footbox from "./Footbox.jsx";

// imported modules:
import { speakText, randomNum } from "../modules/util.js";
import generateSVG from "../modules/generateSVG.jsx";
import answerEvent from "../modules/answerEvent.js";

// imported hooks:
import { useState, useRef } from "react";

/*
    ClickObject component

    This component:
    Generates SVG objects which hold properties:
    `speech` - used for window speech dialect
    `position` 
    and renders the appropriate display of each Click Object problem set
*/
export default function ClickObject({ set, setSet }) {
  const [correctTally, setCorrectTally] = useState(0); // correct tally
  const problemHistory = useRef([]); // to store problem history

  let clickObj1 = generateSVG();
  let clickObj2 = generateSVG();

  speakText(clickObj1.props.description);

  return (
    <div>
      {clickObj1}
      {clickObj2}
      <Footbox correct={correctTally} style={"mathFill"} />
    </div>
  );
}
