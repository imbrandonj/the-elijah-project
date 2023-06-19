import { randomNum } from './util';

export default function generateProblem(problemSet) {
  // letters used for problem sets 1 - 3
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  const mixLetters = upperLetters + lowerLetters;

  // problem set 4
  const litSet4 = [
    { animal: 'cow', emoji: '🐄' },
    { animal: 'cat', emoji: '🐈' },
    { animal: 'dog', emoji: '🐕' },
    { animal: 'tiger', emoji: '🐅' },
    { animal: 'horse', emoji: '🐎' },
    { animal: 'pig', emoji: '🐖' },
    { animal: 'mouse', emoji: '🐁' },
    { animal: 'duck', emoji: '🦆' },
    { animal: 'owl', emoji: '🦉' },
    { animal: 'frog', emoji: '🐸' },
    { animal: 'snake', emoji: '🐍' },
    { animal: 'shark', emoji: '🦈' },
    { animal: 'snail', emoji: '🐌' },
    { animal: 'spider', emoji: '🕷️' },
    { animal: 'bee', emoji: '🐝' },
    { animal: 'sloth', emoji: '🦥' },
    { animal: 'skunk', emoji: '🦨' },
    { animal: 'bear', emoji: '🐻' },
    { animal: 'lion', emoji: '🦁' },
    { animal: 'fox', emoji: '🦊' },
    { animal: 'wolf', emoji: '🐺' },
    { animal: 'rabbit', emoji: '🐰' },
    { animal: 'fish', emoji: '🐠' },
    { animal: 'whale', emoji: '🐳' },
    { animal: 'shark', emoji: '🦈' },
    { animal: 'turtle', emoji: '🐢' },
  ];

  // problem object sets question & answer depending on the state (the problemSet)
  let problem = {
    question: '',
    answer: '',
    emoji: '', // relevent for problem set 4
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
  } else if (problemSet === 4) {
    let randomSelect = randomNum(litSet4.length);
    problem.question = litSet4[randomSelect].animal;
    problem.answer = litSet4[randomSelect].animal;
    problem.emoji = litSet4[randomSelect].emoji;
  }

  return problem;
}
