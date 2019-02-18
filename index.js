// Code your solution in this file
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });


function findMatching(drivers, string){
  return drivers.filter(function (driver){return driver.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver){return driver.startsWith(string)})
}

function matchName(drivers, string){
  return drivers.filter(function (driver){return driver["name"] === string})
}
