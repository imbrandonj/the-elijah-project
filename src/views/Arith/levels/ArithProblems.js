/*
  ArithProblems.js

  This file contains all of the problems for planet Arith
*/
const level1 = [
  { problem: '🐻 + 🐻🐻 =', answer: 3 },
  { problem: '🐻🐻 + 🐻🐻🐻 =', answer: 5 },
  { problem: '🐻🐻🐻 + 🐻🐻🐻🐻 =', answer: 7 },
  { problem: '🐼 + 🐼 =', answer: 2 },
  { problem: '🐼🐼 + 🐼🐼 =', answer: 4 },
  { problem: '🐼🐼🐼 + 🐼🐼🐼 =', answer: 6 },
  { problem: '🐢 + 🐢 + 🐢 =', answer: 3 },
  { problem: '🐢 + 🐢🐢 + 🐢 =', answer: 4 },
  { problem: '🐢 + 🐢🐢🐢 + 🐢 =', answer: 5 },
  { problem: '🐌 + 🐌 + 🐌 + 🐌 =', answer: 4 },
  { problem: '🐝🐝 + 🐝🐝 =', answer: 4 },
  { problem: '🐵🐵🐵🐵 + 🐵🐵🐵 =', answer: 7 },
  { problem: '🐵🐵🐵 + 🐵🐵🐵 =', answer: 6 },
  { problem: '🐳  + 🐳  + 🐳 =', answer: 3 },
  { problem: '🌚 + 🌚 =', answer: 2 },
  { problem: '🌙 + 🌙 + 🌙 =', answer: 3 },
  { problem: '🌠🌠🌠 + 🌠🌠🌠 =', answer: 6 },
  { problem: '🌞🌞🌞🌞 + 🌞 =', answer: 5 },
  { problem: '🌌 + 🌌🌌 + 🌌 =', answer: 4 },
  { problem: '🌌 + 🌌🌌🌌 + 🌌 =', answer: 5 },
  { problem: '🪐🪐 + 🪐🪐 + 🪐', answer: 5 },
  { problem: '🌝 + 🌝 + 🌝 =', answer: 3 },
  { problem: '🌟🌟 + 🌟🌟🌟 =', answer: 5 },
  { problem: '🌛🌛  + 🌛🌛 =', answer: 4 },
  { problem: '🌖 + 🌖 + 🌖🌖 =', answer: 4 },
  { problem: '🌘 + 🌘 + 🌘 =', answer: 3 },
  { problem: '🛸🛸 + 🛸🛸 + 🛸 =', answer: 5 },
  { problem: '🛸 + 🛸🛸 + 🛸 =', answer: 4 },
  { problem: '🛸🛸 + 🛸🛸🛸🛸 =', answer: 6 },
  { problem: '👨‍🚀 + 👨‍🚀 =', answer: 2 },
  { problem: '👨‍🚀👨‍🚀 + 👨‍🚀👨‍🚀 =', answer: 4 },
  { problem: '👩‍🚀👩‍🚀 + 👩‍🚀 =', answer: 3 },
  { problem: '👽 + 👽 + 👽 + 👽 =', answer: 4 },
  { problem: '👽 + 👽👽 + 👽👽 =', answer: 5 },
  { problem: '🤖🤖 + 🤖 + 🤖 =', answer: 4 },
  { problem: '🤖 + 🤖 + 🤖🤖 =', answer: 4 },
  { problem: '🤖🤖🤖 + 🤖 =', answer: 4 },
];

// addition 0-5 + 0-5
const level2 = [
  { problem: '0 + 0 =', answer: 0 },
  { problem: '1 + 0 =', answer: 1 },
  { problem: '0 + 1 =', answer: 1 },
  { problem: '1 + 1 =', answer: 2 },
  { problem: '2 + 0 =', answer: 2 },
  { problem: '2 + 1 =', answer: 3 },
  { problem: '3 + 0 =', answer: 3 },
  { problem: '2 + 2 =', answer: 4 },
  { problem: '3 + 1 =', answer: 4 },
  { problem: '1 + 3 =', answer: 4 },
  { problem: '3 + 2 =', answer: 5 },
  { problem: '2 + 3 =', answer: 5 },
  { problem: '4 + 1 =', answer: 5 },
  { problem: '3 + 3 =', answer: 6 },
  { problem: '4 + 2 =', answer: 6 },
  { problem: '5 + 1 =', answer: 6 },
  { problem: '1 + 5 =', answer: 6 },
  { problem: '5 + 2 =', answer: 7 },
  { problem: '4 + 3 =', answer: 7 },
  { problem: '2 + 5 =', answer: 7 },
  { problem: '3 + 5 =', answer: 8 },
  { problem: '4 + 4 =', answer: 8 },
  { problem: '4 + 5 =', answer: 9 },
  { problem: '5 + 5 =', answer: 10 },
];

// not currently implemented, located on ArithLevel3
const level3 = [
  { box1: 1, box2: 1, answer: 2 },
  { box1: 1, box2: 2, answer: 3 },
];

// addition problems 0-5 + 0-5 + 0-5
const level4 = [
  { problem: '0 + 0 + 0 =', answer: 0 },
  { problem: '1 + 0 + 0 =', answer: 1 },
  { problem: '0 + 1 + 1 =', answer: 2 },
  { problem: '1 + 1 + 1 =', answer: 3 },
  { problem: '2 + 0 + 1 =', answer: 3 },
  { problem: '2 + 1 + 1 =', answer: 4 },
  { problem: '3 + 0 + 1 =', answer: 4 },
  { problem: '1 + 3 + 0 =', answer: 4 },
  { problem: '2 + 2 + 1 =', answer: 5 },
  { problem: '3 + 1 + 1 =', answer: 5 },
  { problem: '4 + 1 + 0 =', answer: 5 },
  { problem: '3 + 2 + 1 =', answer: 6 },
  { problem: '2 + 2 + 2 =', answer: 6 },
  { problem: '2 + 3 + 1 =', answer: 6 },
  { problem: '3 + 3 + 1 =', answer: 7 },
  { problem: '5 + 1 + 1 =', answer: 7 },
  { problem: '3 + 3 + 2 =', answer: 8 },
  { problem: '4 + 2 + 2 =', answer: 8 },
  { problem: '1 + 5 + 2 =', answer: 8 },
  { problem: '3 + 3 + 3 =', answer: 9 },
  { problem: '5 + 2 + 2 =', answer: 9 },
  { problem: '4 + 3 + 3 =', answer: 10 },
  { problem: '2 + 5 + 3 =', answer: 10 },
  { problem: '3 + 5 + 2 =', answer: 10 },
  { problem: '4 + 4 + 2 =', answer: 10 },
  { problem: '4 + 5 + 1 =', answer: 10 },
  { problem: '5 + 5 + 0 =', answer: 10 },
];

// subtraction problems 0-5 - 0-5
const level6 = [
  { problem: '0 - 0 =', answer: 0 },
  { problem: '1 - 0 =', answer: 1 },
  { problem: '1 - 1 =', answer: 0 },
  { problem: '2 - 0 =', answer: 2 },
  { problem: '2 - 1 =', answer: 1 },
  { problem: '2 - 2 =', answer: 0 },
  { problem: '3 - 0 =', answer: 3 },
  { problem: '3 - 1 =', answer: 2 },
  { problem: '3 - 2 =', answer: 1 },
  { problem: '3 - 3 =', answer: 0 },
  { problem: '4 - 0 =', answer: 4 },
  { problem: '4 - 1 =', answer: 3 },
  { problem: '4 - 2 =', answer: 2 },
  { problem: '4 - 3 =', answer: 1 },
  { problem: '4 - 4 =', answer: 0 },
  { problem: '5 - 0 =', answer: 5 },
  { problem: '5 - 1 =', answer: 4 },
  { problem: '5 - 2 =', answer: 3 },
  { problem: '5 - 3 =', answer: 2 },
  { problem: '5 - 4 =', answer: 1 },
  { problem: '5 - 5 =', answer: 0 },
];

// subtraction problems 6-10 - 0-10
const level7 = [
  { problem: '10 - 0 =', answer: 10 },
  { problem: '10 - 1 =', answer: 9 },
  { problem: '10 - 2 =', answer: 8 },
  { problem: '10 - 3 =', answer: 7 },
  { problem: '10 - 4 =', answer: 6 },
  { problem: '10 - 5 =', answer: 5 },
  { problem: '10 - 6 =', answer: 4 },
  { problem: '10 - 7 =', answer: 3 },
  { problem: '10 - 8 =', answer: 2 },
  { problem: '10 - 9 =', answer: 1 },
  { problem: '10 - 10 =', answer: 0 },
  { problem: '9 - 0 =', answer: 9 },
  { problem: '9 - 1 =', answer: 8 },
  { problem: '9 - 2 =', answer: 7 },
  { problem: '9 - 3 =', answer: 6 },
  { problem: '9 - 4 =', answer: 5 },
  { problem: '9 - 5 =', answer: 4 },
  { problem: '9 - 6 =', answer: 3 },
  { problem: '9 - 7 =', answer: 2 },
  { problem: '9 - 8 =', answer: 1 },
  { problem: '9 - 9 =', answer: 0 },
  { problem: '8 - 0 =', answer: 8 },
  { problem: '8 - 1 =', answer: 7 },
  { problem: '8 - 2 =', answer: 6 },
  { problem: '8 - 3 =', answer: 5 },
  { problem: '8 - 4 =', answer: 4 },
  { problem: '8 - 5 =', answer: 3 },
  { problem: '8 - 6 =', answer: 2 },
  { problem: '8 - 7 =', answer: 1 },
  { problem: '8 - 8 =', answer: 0 },
  { problem: '7 - 0 =', answer: 7 },
  { problem: '7 - 1 =', answer: 6 },
  { problem: '7 - 2 =', answer: 5 },
  { problem: '7 - 3 =', answer: 4 },
  { problem: '7 - 4 =', answer: 3 },
  { problem: '7 - 5 =', answer: 2 },
  { problem: '7 - 6 =', answer: 1 },
  { problem: '7 - 7 =', answer: 0 },
  { problem: '6 - 0 =', answer: 6 },
  { problem: '6 - 1 =', answer: 5 },
  { problem: '6 - 2 =', answer: 4 },
  { problem: '6 - 3 =', answer: 3 },
  { problem: '6 - 4 =', answer: 2 },
  { problem: '6 - 5 =', answer: 1 },
  { problem: '6 - 6 =', answer: 0 },
];

const level9 = [
  { problem: '10 - 9 - 1 =', answer: 0 },
  { problem: '10 - 8 - 1 =', answer: 1 },
  { problem: '10 - 8 - 2 =', answer: 0 },
  { problem: '10 - 7 - 3 =', answer: 0 },
  { problem: '10 - 7 - 2 =', answer: 1 },
  { problem: '10 - 7 - 1 =', answer: 2 },
  { problem: '10 - 6 - 4 =', answer: 0 },
  { problem: '10 - 6 - 3 =', answer: 1 },
  { problem: '10 - 6 - 2 =', answer: 2 },
  { problem: '10 - 6 - 1 =', answer: 3 },
  { problem: '10 - 5 - 5 =', answer: 0 },
  { problem: '10 - 5 - 4 =', answer: 1 },
  { problem: '10 - 5 - 3 =', answer: 2 },
  { problem: '10 - 5 - 2 =', answer: 3 },
  { problem: '10 - 5 - 1 =', answer: 4 },
  { problem: '10 - 4 - 6 =', answer: 0 },
  { problem: '10 - 4 - 5 =', answer: 1 },
  { problem: '10 - 4 - 4 =', answer: 2 },
  { problem: '10 - 4 - 2 =', answer: 4 },
  { problem: '9 - 7 - 2 =', answer: 0 },
  { problem: '9 - 6 - 2 =', answer: 1 },
  { problem: '9 - 6 - 1 =', answer: 2 },
  { problem: '9 - 5 - 4 =', answer: 0 },
  { problem: '9 - 5 - 3 =', answer: 1 },
  { problem: '9 - 5 - 2 =', answer: 2 },
  { problem: '9 - 5 - 1 =', answer: 3 },
  { problem: '8 - 6 - 2 =', answer: 0 },
  { problem: '8 - 6 - 1 =', answer: 1 },
  { problem: '8 - 5 - 3 =', answer: 0 },
  { problem: '8 - 5 - 2 =', answer: 1 },
  { problem: '8 - 5 - 1 =', answer: 2 },
  { problem: '8 - 4 - 4 =', answer: 0 },
  { problem: '8 - 4 - 3 =', answer: 1 },
  { problem: '8 - 4 - 2 =', answer: 2 },
  { problem: '8 - 4 - 1 =', answer: 3 },
  { problem: '8 - 3 - 5 =', answer: 0 },
  { problem: '8 - 3 - 3 =', answer: 2 },
  { problem: '8 - 2 - 6 =', answer: 0 },
  { problem: '8 - 2 - 3 =', answer: 3 },
  { problem: '8 - 2 - 2 =', answer: 4 },
  { problem: '7 - 5 - 2 =', answer: 0 },
  { problem: '7 - 4 - 3 =', answer: 0 },
  { problem: '7 - 4 - 2 =', answer: 1 },
  { problem: '7 - 3 - 4 =', answer: 0 },
  { problem: '7 - 3 - 3 =', answer: 1 },
  { problem: '7 - 2 - 5 =', answer: 0 },
  { problem: '7 - 2 - 3 =', answer: 2 },
  { problem: '6 - 4 - 2 =', answer: 0 },
  { problem: '6 - 3 - 3 =', answer: 0 },
  { problem: '6 - 2 - 4 =', answer: 0 },
  { problem: '6 - 2 - 2 =', answer: 2 },
  { problem: '6 - 1 - 5 =', answer: 0 },
  { problem: '6 - 1 - 2 =', answer: 3 },
  { problem: '5 - 4 - 1 =', answer: 0 },
  { problem: '5 - 3 - 2 =', answer: 0 },
  { problem: '5 - 3 - 1 =', answer: 1 },
  { problem: '5 - 2 - 3 =', answer: 0 },
  { problem: '5 - 1 - 1 =', answer: 3 },
  { problem: '4 - 3 - 1 =', answer: 0 },
  { problem: '4 - 2 - 2 =', answer: 0 },
  { problem: '4 - 2 - 1 =', answer: 1 },
  { problem: '4 - 1 - 2 =', answer: 1 },
  { problem: '4 - 1 - 1 =', answer: 2 },
  { problem: '3 - 2 - 1 =', answer: 0 },
  { problem: '3 - 1 - 2 =', answer: 0 },
  { problem: '3 - 1 - 1 =', answer: 1 },
  { problem: '2 - 1 - 1 =', answer: 0 },
];

// addition { 0-20 + 0-20 = 11-20 }
const level11 = [
  { problem: '20 + 0 =', answer: 20 },
  { problem: '19 + 1 =', answer: 20 },
  { problem: '18 + 2 =', answer: 20 },
  { problem: '18 + 1 =', answer: 19 },
  { problem: '17 + 3 =', answer: 20 },
  { problem: '17 + 2 =', answer: 19 },
  { problem: '17 + 1 =', answer: 18 },
  { problem: '16 + 4 =', answer: 20 },
  { problem: '16 + 3 =', answer: 19 },
  { problem: '16 + 2 =', answer: 18 },
  { problem: '16 + 1 =', answer: 17 },
  { problem: '15 + 5 =', answer: 20 },
  { problem: '15 + 4 =', answer: 19 },
  { problem: '15 + 3 =', answer: 18 },
  { problem: '15 + 2 =', answer: 17 },
  { problem: '15 + 1 =', answer: 16 },
  { problem: '14 + 6 =', answer: 20 },
  { problem: '14 + 5 =', answer: 19 },
  { problem: '14 + 4 =', answer: 18 },
  { problem: '14 + 3 =', answer: 17 },
  { problem: '14 + 2 =', answer: 16 },
  { problem: '14 + 1 =', answer: 15 },
  { problem: '13 + 7 =', answer: 20 },
  { problem: '13 + 6 =', answer: 19 },
  { problem: '13 + 5 =', answer: 18 },
  { problem: '13 + 4 =', answer: 17 },
  { problem: '13 + 3 =', answer: 16 },
  { problem: '13 + 2 =', answer: 15 },
  { problem: '13 + 1 =', answer: 14 },
  { problem: '12 + 8 =', answer: 20 },
  { problem: '12 + 7 =', answer: 19 },
  { problem: '12 + 6 =', answer: 18 },
  { problem: '12 + 5 =', answer: 17 },
  { problem: '12 + 4 =', answer: 16 },
  { problem: '12 + 3 =', answer: 15 },
  { problem: '12 + 2 =', answer: 14 },
  { problem: '12 + 1 =', answer: 13 },
  { problem: '11 + 9 =', answer: 20 },
  { problem: '11 + 8 =', answer: 19 },
  { problem: '11 + 7 =', answer: 18 },
  { problem: '11 + 6 =', answer: 17 },
  { problem: '11 + 5 =', answer: 16 },
  { problem: '11 + 4 =', answer: 15 },
  { problem: '11 + 3 =', answer: 14 },
  { problem: '11 + 2 =', answer: 13 },
  { problem: '11 + 1 =', answer: 12 },
  { problem: '10 + 10 =', answer: 20 },
  { problem: '10 + 9 =', answer: 19 },
  { problem: '10 + 8 =', answer: 18 },
  { problem: '10 + 7 =', answer: 17 },
  { problem: '10 + 6 =', answer: 16 },
  { problem: '10 + 5 =', answer: 15 },
  { problem: '10 + 4 =', answer: 14 },
  { problem: '10 + 3 =', answer: 13 },
  { problem: '10 + 2 =', answer: 12 },
  { problem: '10 + 1 =', answer: 11 },
  { problem: '9 + 11 =', answer: 20 },
  { problem: '9 + 10 =', answer: 19 },
  { problem: '9 + 9 =', answer: 18 },
  { problem: '9 + 8 =', answer: 17 },
  { problem: '9 + 6 =', answer: 15 },
  { problem: '9 + 5 =', answer: 14 },
  { problem: '9 + 4 =', answer: 13 },
  { problem: '9 + 3 =', answer: 12 },
  { problem: '9 + 2 =', answer: 11 },
  { problem: '9 + 1 =', answer: 10 },
  { problem: '8 + 12 =', answer: 20 },
  { problem: '8 + 11 =', answer: 19 },
  { problem: '8 + 10 =', answer: 18 },
  { problem: '8 + 9 =', answer: 17 },
  { problem: '8 + 8 =', answer: 16 },
  { problem: '8 + 7 =', answer: 15 },
  { problem: '8 + 6 =', answer: 14 },
  { problem: '8 + 5 =', answer: 13 },
  { problem: '8 + 4 =', answer: 12 },
  { problem: '8 + 3 =', answer: 11 },
  { problem: '7 + 13 =', answer: 20 },
  { problem: '7 + 12 =', answer: 19 },
  { problem: '7 + 11 =', answer: 18 },
  { problem: '7 + 10 =', answer: 17 },
  { problem: '7 + 9 =', answer: 16 },
  { problem: '7 + 8 =', answer: 15 },
  { problem: '7 + 7 =', answer: 14 },
  { problem: '7 + 6 =', answer: 13 },
  { problem: '7 + 5 =', answer: 12 },
  { problem: '7 + 4 =', answer: 11 },
  { problem: '6 + 14 =', answer: 20 },
  { problem: '6 + 13 =', answer: 19 },
  { problem: '6 + 12 =', answer: 18 },
  { problem: '6 + 11 =', answer: 17 },
  { problem: '6 + 10 =', answer: 16 },
  { problem: '6 + 9 =', answer: 15 },
  { problem: '6 + 8 =', answer: 14 },
  { problem: '6 + 7 =', answer: 13 },
  { problem: '6 + 6 =', answer: 12 },
  { problem: '6 + 5 =', answer: 11 },
  { problem: '5 + 15 =', answer: 20 },
  { problem: '5 + 14 =', answer: 19 },
  { problem: '5 + 13 =', answer: 18 },
  { problem: '5 + 12 =', answer: 17 },
  { problem: '5 + 11 =', answer: 16 },
  { problem: '5 + 10 =', answer: 15 },
  { problem: '5 + 9 =', answer: 14 },
  { problem: '5 + 8 =', answer: 13 },
  { problem: '5 + 7 =', answer: 12 },
  { problem: '5 + 6 =', answer: 11 },
  { problem: '4 + 16 =', answer: 20 },
  { problem: '4 + 15 =', answer: 19 },
  { problem: '4 + 14 =', answer: 18 },
  { problem: '4 + 13 =', answer: 17 },
  { problem: '4 + 12 =', answer: 16 },
  { problem: '4 + 11 =', answer: 15 },
  { problem: '4 + 10 =', answer: 14 },
  { problem: '4 + 9 =', answer: 13 },
  { problem: '4 + 8 =', answer: 12 },
  { problem: '4 + 7 =', answer: 11 },
  { problem: '3 + 17 =', answer: 20 },
  { problem: '3 + 16 =', answer: 19 },
  { problem: '3 + 15 =', answer: 18 },
  { problem: '3 + 14 =', answer: 17 },
  { problem: '3 + 13 =', answer: 16 },
  { problem: '3 + 12 =', answer: 15 },
  { problem: '3 + 11 =', answer: 14 },
  { problem: '3 + 10 =', answer: 13 },
  { problem: '3 + 9 =', answer: 12 },
  { problem: '3 + 8 =', answer: 11 },
  { problem: '2 + 18 =', answer: 20 },
  { problem: '2 + 17 =', answer: 19 },
  { problem: '2 + 16 =', answer: 18 },
  { problem: '2 + 15 =', answer: 17 },
  { problem: '2 + 14 =', answer: 16 },
  { problem: '2 + 13 =', answer: 15 },
  { problem: '2 + 12 =', answer: 14 },
  { problem: '2 + 11 =', answer: 13 },
  { problem: '2 + 10 =', answer: 12 },
  { problem: '2 + 9 =', answer: 11 },
  { problem: '1 + 19 =', answer: 20 },
  { problem: '1 + 18 =', answer: 19 },
  { problem: '1 + 17 =', answer: 18 },
  { problem: '1 + 16 =', answer: 17 },
  { problem: '1 + 15 =', answer: 16 },
  { problem: '1 + 14 =', answer: 15 },
  { problem: '1 + 13 =', answer: 14 },
  { problem: '1 + 12 =', answer: 13 },
  { problem: '1 + 11 =', answer: 12 },
  { problem: '1 + 10 =', answer: 11 },
  { problem: '0 + 20 =', answer: 20 },
];

export { level1, level2, level3, level4, level6, level7, level9, level11 };
