// Code your solution in this file
function findMatching(array, name) {
  return array.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, letters){
  return array.filter(element => element.toLowerCase().substring(0,letters.length) === letters.toLowerCase());
}

function matchName(object, name){
  return object.filter(element => element.name.toLowerCase() === name.toLowerCase());
}
