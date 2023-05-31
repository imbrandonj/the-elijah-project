// imported problem modules:
import litProblems from "./litProblems";
import mathProblems from "./mathProblems";

/*
    generateProblem.js

    Takes arguments:
    subject: import a problem from appropriate subject 
    problemSet: import a problem from appropriate problem set
    problemHistory: ensure problem is unique without being a repeat
*/
export default function generateProblem(subject, problemSet, problemHistory) {
  // create a problem history array for each `problemSet`
  // this ensures a unique `problem` without any repeats
  if (!problemHistory.current[problemSet]) {
    problemHistory.current[problemSet] = [];
  }

  // obtain a `problem` object of appropriate subject and `problemSet`
  // ternary used as `subject` can only be "lit", "math", or "clickObj"
  let problem =
    subject === "lit"
      ? litProblems(problemSet)
      : subject === "math"
      ? mathProblems(problemSet)
      : subject === "clickObj"
      ? clickObjectProblems(problemSet)
      : undefined;

  // generate a unique `problem` object (no repeats per `problemSet`)
  while (
    problemHistory.current[problemSet].some(
      (history) => history.question === problem.question
    )
  ) {
    // generate a new `problem` if repeat:
    problem =
      subject === "lit"
        ? litProblems(problemSet)
        : subject === "math"
        ? mathProblems(problemSet)
        : subject === "clickObj"
        ? clickObjectProblems(problemSet)
        : undefined;
  }

  // add `problem` to the problem set history
  problemHistory.current[problemSet].push(problem);

  return problem;
}
