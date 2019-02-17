// Code your solution in this file
function findMatching(collection, name) {
  newCollection = []
  for (const person of collection) {
    if (person.toLowerCase() === name.toLowerCase()) {
      newCollection.push(person)
    }
  }
  return newCollection
}

function fuzzyMatch(collection, letters) {
  newCollection = []

  for (const name of collection) {
    if (name.slice(0, 2).toLowerCase() === letters.toLowerCase()) {
      newCollection.push(name)
    }
  }
  return newCollection
}

function matchName(collection, name) {
  newCollection = []
  for (const person of collection) {
    if (person.name === name) {
      newCollection.push(person)
    }
  }
  return newCollection
}