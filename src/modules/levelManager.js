function getLevels(planet) {
  const levels = JSON.parse(localStorage.getItem(planet));

  if (levels === null || levels === undefined) {
    // beginning The Elijah Project, no levels completed:
    /* redundant as far as I know -> localStorage.setItem(planet, JSON.stringify({}));  */
    return 0;
  } else {
    return levels;
  }
}

function storeLevel(planet, level, score) {
  const levels = JSON.parse(localStorage.getItem(planet)) || {};
  levels[level] = score;
  localStorage.setItem(planet, JSON.stringify(levels));
}

export { getLevels, storeLevel };
