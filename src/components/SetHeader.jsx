// imported modules:
import litProblemSets from "../modules/litProblemSets";
import mathProblemSets from "../modules/mathProblemSets";

export default function SetHeader({ subject, set }) {
  // literacy problem set headers:
  const litHeader = litProblemSets;

  // math problem set headers:
  const mathHeader = mathProblemSets;

  // match `subject` argument with it's problem set
  let headerText =
    subject === "Literacy" ? litHeader[set - 1] : mathHeader[set - 1];

  return (
    <header className="setHeader">
      {subject}: {headerText}
    </header>
  );
}
