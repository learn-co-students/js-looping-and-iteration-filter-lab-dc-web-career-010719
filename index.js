// Code your solution in this file
function findMatching(collection, name) {
  // debugger;
  return collection.filter(function(user) {
    // debugger;
    return user.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  // debugger;
  return drivers.filter(function(driver) {
    // debugger;
    if (driver.slice(0, 2) === name) {
      // debugger;
      return driver;
    }
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name;
  });
}
