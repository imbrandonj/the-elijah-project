export default function SetHeader({ subject, set }) {
  // literacy problem set headers:
  const litHeader = [
    "Problem Set 1 - Enter the Uppercase Letter",
    "Problem Set 2 - Type the Lowercase Letter",
    "Problem Set 3 - Type the Letter (Mixed, Case-Sensitive)",
    "Problem Set 4 - Spelling Short Words (Animals)",
  ];

  // math problem set headers:
  const mathHeader = [
    "Problem Set 1 - Addition to 10",
    "Problem Set 2 - Subtraction to 10",
    "Problem Set 3 - Addition from 10 to 20",
    "Problem Set 4 - Subtraction from 10 to 20",
  ];

  // match `subject` argument with it's problem set
  let headerText =
    subject === "Literacy" ? litHeader[set - 1] : mathHeader[set - 1];

  return (
    <header className="setHeader">
      {subject}: {headerText}
    </header>
  );
}
