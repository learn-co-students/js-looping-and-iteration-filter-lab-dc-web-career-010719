function findMatching(drivers, str) {
  return drivers.filter(d => d.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(d => d.match(new RegExp(`^${str}`, 'gi')));
}

function matchName(drivers, str) {
  return drivers.filter(d => d.name.toLowerCase() === str.toLowerCase());
}

