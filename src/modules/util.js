/**
 * Returns a random integer between 0 and the specified maximum value (inclusive).
 *
 * @param {number} max - The maximum value (inclusive) for the random number.
 * @returns {number} A random integer between 0 and `max` (inclusive).
 */
export function randomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}
