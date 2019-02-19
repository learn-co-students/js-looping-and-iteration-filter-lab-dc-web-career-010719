// Code your solution in this file
function findMatching(drivers, string) {
  let matchingDrivers = []

  drivers.filter(function (driver) {
    if (driver.toUpperCase() == string.toUpperCase()) {
      matchingDrivers.push(driver)
    }
  })

  return matchingDrivers
}
function fuzzyMatch(drivers, string) {
  let matchingDrivers = []

  drivers.filter(function (driver) {
    if (driver.startsWith(string)) {
      matchingDrivers.push(driver)
    }
  })

  return matchingDrivers
}
function matchName(drivers, string) {
  let matchingDrivers = []

  drivers.filter(function (driverInfo) {
    if (driverInfo.name == string) {
      matchingDrivers.push(driverInfo)
    }
  })

  return matchingDrivers
}
