import { randomNum } from "./util";

export default function generateProblem(problemSet) {
  // letters used for problem sets 1 - 3
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const mixLetters = upperLetters + lowerLetters;

  // problem object sets question & answer depending on the state (the problemSet)
  let problem = {
    question: "",
    answer: "",
  };

  // generate problem depending on problemSet (state)
  // for the first 3 problem sets, the answer is the question
  if (problemSet === 1) {
    problem.question = upperLetters.charAt(randomNum(upperLetters.length));
    problem.answer = problem.question;
  } else if (problemSet === 2) {
    problem.question = lowerLetters.charAt(randomNum(lowerLetters.length));
    problem.answer = problem.question;
  } else if (problemSet === 3) {
    problem.question = mixLetters.charAt(randomNum(mixLetters.length));
    problem.answer = problem.question;
  }

  return problem;
}
