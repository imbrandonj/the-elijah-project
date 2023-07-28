import { randomNum } from './util';

/*
    generateProblem.js

    Takes arguments:
      `problemSet`: a collection of problems
      `problemHistory`: a useRef hook to ensure problem is unique without being a repeat

    Returns:
      A unique `problem` object with 2 properties:
        `question` and `answer`
*/
export default function generateProblem(problemSet, problemHistory) {
  console.log('generateProblems render');
  // select random problem index
  let problemIndex = randomNum(problemSet.length);

  // `problem` object sets `question` & `answer` based on `problemIndex` of `problemSet`
  let problem = {
    question: Object.values(problemSet[problemIndex])[0],
    answer: Object.values(problemSet[problemIndex])[1],
  };

  // generate a unique `problem` object (no repeats)
  while (
    problemHistory.current.some(
      history => history.question === problem.question
    )
  ) {
    // select random problem index
    problemIndex = randomNum(problemSet.length);

    // set `question` and `answer`
    problem.question = Object.values(problemSet[problemIndex])[0];
    problem.answer = Object.values(problemSet[problemIndex])[1];
  }

  // add `problem` to the problem set history
  problemHistory.current.push(problem);

  return problem;
}
