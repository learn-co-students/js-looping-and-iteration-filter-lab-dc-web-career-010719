function findMatching(collection, name) {
	return collection.filter(function (driverName) {
		return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(collection, name) {
	return collection.filter(function (driverName) {
		return driverName.slice(0, 1) == name.slice(0, 1)
	})
}

function matchName(collection, name) {
	return collection.filter(function (driverName) {
		return driverName.name === name
	})
}

