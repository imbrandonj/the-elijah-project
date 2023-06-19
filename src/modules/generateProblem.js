// imported problem modules:
import litProblems from './litProblems';
import mathProblems from './mathProblems';

/*
    generateProblem.js

    Takes arguments:
    path: import a problem from appropriate subject path
    problemSet: import a problem from appropriate problem set
    problemHistory: ensure problem is unique without being a repeat
*/
export default function generateProblem(path, problemSet, problemHistory) {
  // create a problem history array for each `problemSet`
  // this ensures a unique `problem` without any repeats
  if (!problemHistory.current[problemSet]) {
    problemHistory.current[problemSet] = [];
  }

  // obtain a `problem` object for appropriate `path` and `problemSet`
  // ternary used as `path` can only be "lit", "math", or "logic"
  let problem =
    path === 'lit'
      ? litProblems(problemSet)
      : path === 'math'
      ? mathProblems(problemSet)
      : //: path === "logic"
        //? logicProblems(problemSet)
        undefined;

  // generate a unique `problem` object (no repeats per `problemSet`)
  while (
    problemHistory.current[problemSet].some(
      history => history.question === problem.question
    )
  ) {
    // generate a new `problem` if repeat:
    problem =
      path === 'lit'
        ? litProblems(problemSet)
        : path === 'math'
        ? mathProblems(problemSet)
        : //: path === "logic"
          //? logicProblems(problemSet)
          undefined;
  }

  // add `problem` to the problem set history
  problemHistory.current[problemSet].push(problem);

  return problem;
}
