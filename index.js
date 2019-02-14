// Code your solution in this file
function findMatching(driver, name) {
  let array = []

  for (const x in driver) {
    if (driver[x].toLowerCase() === name.toLowerCase()) {
      array.push(driver[x])
    }
  }
  return array

}

function fuzzyMatch(driver, letter) {

  let array = []

  for (const x in driver) {

    if (driver[x].startsWith(letter)) {
      array.push(driver[x])
    }
  }
  return array

}

function matchName(driver, name) {
let test = []

  for (let y of driver) {

    let test1 = {}
    if (y["name"] === name){
      test1["name"] = y["name"]
      test1["hometown"] = y["hometown"]
      test.push(test1)
    }

    // console.log(test1)
    console.log("3")
    console.log(test)
    console.log("4")

  }
  return test

}
