// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {return name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(function (name) {return name.slice(0,1) == letter})
}

function matchName(drivers, name) {
  return drivers.filter(function (driverObject) {return driverObject.name.toLowerCase() === name.toLowerCase()})
}
