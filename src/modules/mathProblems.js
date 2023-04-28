import { randomNum } from "./util";

export default function generateProblem(problemSet) {
  // math problem set 1
  const mathSet1 = [
    { problem: "0 + 0 =", answer: 0 },
    { problem: "1 + 0 =", answer: 1 },
    { problem: "1 + 1 =", answer: 2 },
    { problem: "2 + 0 =", answer: 2 },
    { problem: "2 + 1 =", answer: 3 },
    { problem: "2 + 2 =", answer: 4 },
    { problem: "3 + 1 =", answer: 4 },
    { problem: "3 + 2 =", answer: 5 },
    { problem: "4 + 1 =", answer: 5 },
    { problem: "3 + 3 =", answer: 6 },
    { problem: "4 + 2 =", answer: 6 },
    { problem: "5 + 1 =", answer: 6 },
    { problem: "5 + 2 =", answer: 7 },
    { problem: "6 + 1 =", answer: 7 },
    { problem: "4 + 3 =", answer: 7 },
    { problem: "3 + 5 =", answer: 8 },
    { problem: "6 + 2 =", answer: 8 },
    { problem: "4 + 4 =", answer: 8 },
    { problem: "6 + 3 =", answer: 9 },
    { problem: "8 + 1 =", answer: 9 },
    { problem: "4 + 5 =", answer: 9 },
    { problem: "7 + 2 =", answer: 9 },
    { problem: "5 + 5 =", answer: 10 },
    { problem: "6 + 4 =", answer: 10 },
    { problem: "1 + 9 =", answer: 10 },
    { problem: "7 + 3 =", answer: 10 },
    { problem: "8 + 2 =", answer: 10 },
  ];

  // problem set 2
  const mathSet2 = [
    { problem: "1 - 1 =", answer: 0 },
    { problem: "2 - 1 =", answer: 1 },
    { problem: "1 - 0 =", answer: 1 },
    { problem: "3 - 1 =", answer: 2 },
    { problem: "4 - 2 =", answer: 2 },
    { problem: "5 - 3 =", answer: 2 },
    { problem: "5 - 2 =", answer: 3 },
    { problem: "5 - 4 =", answer: 1 },
    { problem: "5 - 5 =", answer: 0 },
    { problem: "5 - 1 =", answer: 4 },
    { problem: "5 - 0 =", answer: 5 },
    { problem: "6 - 3 =", answer: 3 },
    { problem: "6 - 2 =", answer: 4 },
    { problem: "6 - 4 =", answer: 2 },
    { problem: "6 - 5 =", answer: 1 },
    { problem: "7 - 2 =", answer: 5 },
    { problem: "8 - 4 =", answer: 4 },
    { problem: "9 - 3 =", answer: 6 },
    { problem: "9 - 6 =", answer: 3 },
    { problem: "10 - 5 =", answer: 5 },
  ];

  // problem set 3
  const mathSet3 = [
    { problem: "10 + 1 =", answer: 11 },
    { problem: "10 + 2 =", answer: 12 },
    { problem: "10 + 3 =", answer: 13 },
    { problem: "10 + 4 =", answer: 14 },
    { problem: "10 + 5 =", answer: 15 },
    { problem: "10 + 6 =", answer: 16 },
    { problem: "10 + 7 =", answer: 17 },
    { problem: "10 + 8 =", answer: 18 },
    { problem: "10 + 9 =", answer: 19 },
    { problem: "10 + 10 =", answer: 20 },
  ];

  // problem object sets question & answer depending on the state (the problemSet)
  let problem = {
    question: "",
    answer: "",
  };

  // generate problem of mathSet1:
  if (problemSet === 1) {
    // generate random problem number
    let problemNum = randomNum(mathSet1.length);

    // set question and answer
    problem.question = Object.values(mathSet1[problemNum])[0];
    problem.answer = Object.values(mathSet1[problemNum])[1];

    // generate problem of mathSet2:
  } else if (problemSet === 2) {
    // generate random problem number
    let problemNum = randomNum(mathSet2.length);

    // set question and answer
    problem.question = Object.values(mathSet2[problemNum])[0];
    problem.answer = Object.values(mathSet2[problemNum])[1];

    // generate problem of mathSet3:
  } else if (problemSet === 3) {
    // generate random problem number
    let problemNum = randomNum(mathSet3.length);

    // set question and answer
    problem.question = Object.values(mathSet3[problemNum])[0];
    problem.answer = Object.values(mathSet3[problemNum])[1];
  }
  return problem; // object containing `question` and `answer` properties
}
