import { randomNum } from './util';

/*
    generateProblem.js

    Takes arguments:
      `problemSet`: a collection of problems
      `problemHistory`: a useRef hook to ensure problem is unique without being a repeat
      `object`: boolean ~ is `problemSet` an array of key: value objects?

    Returns:
      A unique `problem` object with 2 properties:
        `question` and `answer`
*/
export default function generateProblem(problemSet, problemHistory, object) {
  let problem = setProblem(problemSet, object); // an object containing `question` and `answer` properties

  // this triggers if there's a repeat question in `problemHistory`
  while (
    problemHistory.current.some(
      history => history.question === problem.question
    )
  ) {
    // generate new `problem` object
    problem = setProblem(problemSet, object);
  }

  // add `problem` to the problem set history
  problemHistory.current.push(problem);

  return problem;
}

// logic for setting `problem` object
// `problemSet`: a collection of problems
// `object` prop: boolean ~ is `problemSet` an array of key: value objects?
const setProblem = (problemSet, object) => {
  let problemIndex = randomNum(problemSet.length); // select random problem index
  let problem; // an object containing `question` and `answer` properties

  if (object) {
    // `question` and `answer` properties exist in the `problemSet` array
    problem = {
      question: Object.values(problemSet[problemIndex])[0],
      answer: Object.values(problemSet[problemIndex])[1],
    };
  } else {
    // `question` and `answer` properties are identical
    problem = {
      question: problemSet[problemIndex],
      answer: problemSet[problemIndex],
    };
  }

  return problem;
};
