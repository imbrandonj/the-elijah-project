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
    { problem: "1 - 0 =", answer: 1 },
    { problem: "1 - 1 =", answer: 0 },
    { problem: "2 - 0 =", answer: 2 },
    { problem: "2 - 1 =", answer: 1 },
    { problem: "2 - 2 =", answer: 0 },
    { problem: "3 - 1 =", answer: 2 },
    { problem: "3 - 2 =", answer: 1 },
    { problem: "4 - 1 =", answer: 3 },
    { problem: "4 - 2 =", answer: 2 },
    { problem: "4 - 3 =", answer: 1 },
    { problem: "4 - 4 =", answer: 0 },
    { problem: "5 - 0 =", answer: 5 },
    { problem: "5 - 1 =", answer: 4 },
    { problem: "5 - 2 =", answer: 3 },
    { problem: "5 - 3 =", answer: 2 },
    { problem: "5 - 4 =", answer: 1 },
    { problem: "5 - 5 =", answer: 0 },
    { problem: "6 - 1 =", answer: 5 },
    { problem: "6 - 2 =", answer: 4 },
    { problem: "6 - 3 =", answer: 3 },
    { problem: "6 - 4 =", answer: 2 },
    { problem: "6 - 5 =", answer: 1 },
    { problem: "7 - 2 =", answer: 5 },
    { problem: "8 - 4 =", answer: 4 },
    { problem: "8 - 5 =", answer: 3 },
    { problem: "9 - 3 =", answer: 6 },
    { problem: "9 - 6 =", answer: 3 },
    { problem: "10 - 1 =", answer: 9 },
    { problem: "10 - 2 =", answer: 8 },
    { problem: "10 - 3 =", answer: 7 },
    { problem: "10 - 4 =", answer: 6 },
    { problem: "10 - 5 =", answer: 5 },
    { problem: "10 - 6 =", answer: 4 },
    { problem: "10 - 7 =", answer: 3 },
    { problem: "10 - 8 =", answer: 2 },
    { problem: "10 - 9 =", answer: 1 },
    { problem: "10 - 0 =", answer: 10 },
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
    { problem: "11 + 1 =", answer: 12 },
    { problem: "11 + 2 =", answer: 13 },
    { problem: "11 + 3 =", answer: 14 },
    { problem: "11 + 4 =", answer: 15 },
    { problem: "11 + 5 =", answer: 16 },
    { problem: "11 + 6 =", answer: 17 },
    { problem: "11 + 7 =", answer: 18 },
    { problem: "11 + 8 =", answer: 19 },
    { problem: "11 + 9 =", answer: 20 },
    { problem: "12 + 1 =", answer: 13 },
    { problem: "12 + 2 =", answer: 14 },
    { problem: "12 + 3 =", answer: 15 },
    { problem: "12 + 4 =", answer: 16 },
    { problem: "12 + 5 =", answer: 17 },
    { problem: "12 + 6 =", answer: 18 },
    { problem: "12 + 7 =", answer: 19 },
    { problem: "13 + 1 =", answer: 14 },
    { problem: "13 + 2 =", answer: 15 },
    { problem: "13 + 3 =", answer: 16 },
    { problem: "13 + 4 =", answer: 17 },
    { problem: "13 + 5 =", answer: 18 },
    { problem: "13 + 6 =", answer: 19 },
    { problem: "13 + 7 =", answer: 20 },
    { problem: "14 + 1 =", answer: 15 },
    { problem: "14 + 2 =", answer: 16 },
    { problem: "14 + 3 =", answer: 17 },
    { problem: "14 + 4 =", answer: 18 },
    { problem: "14 + 5 =", answer: 19 },
    { problem: "14 + 6 =", answer: 20 },
    { problem: "15 + 1 =", answer: 16 },
    { problem: "15 + 2 =", answer: 17 },
    { problem: "15 + 3 =", answer: 18 },
    { problem: "15 + 4 =", answer: 19 },
    { problem: "15 + 5 =", answer: 20 },
    { problem: "16 + 1 =", answer: 17 },
    { problem: "16 + 2 =", answer: 18 },
    { problem: "16 + 3 =", answer: 19 },
    { problem: "16 + 4 =", answer: 20 },
    { problem: "17 + 1 =", answer: 18 },
    { problem: "17 + 2 =", answer: 19 },
    { problem: "17 + 3 =", answer: 20 },
    { problem: "18 + 1 =", answer: 19 },
    { problem: "18 + 2 =", answer: 20 },
    { problem: "19 + 1 =", answer: 20 },
    { problem: "20 + 0 =", answer: 20 },
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

    // set `question` and `answer`
    problem.question = Object.values(mathSet1[problemNum])[0];
    problem.answer = Object.values(mathSet1[problemNum])[1];

    // generate problem of mathSet2:
  } else if (problemSet === 2) {
    // generate random problem number
    let problemNum = randomNum(mathSet2.length);

    // set `question` and `answer`
    problem.question = Object.values(mathSet2[problemNum])[0];
    problem.answer = Object.values(mathSet2[problemNum])[1];

    // generate problem of mathSet3:
  } else if (problemSet === 3) {
    // generate random problem number
    let problemNum = randomNum(mathSet3.length);

    // set `question` and `answer`
    problem.question = Object.values(mathSet3[problemNum])[0];
    problem.answer = Object.values(mathSet3[problemNum])[1];
  }
  return problem; // object containing `question` and `answer` properties
}
