// Code your solution in this file
function findMatching(arr, attr) {
     return arr.filter(function (attribute) {
         return attribute.toLowerCase() === attr.toLowerCase()
     })
}

function fuzzyMatch(arr, attr) {
    return arr.filter(function (attribute) {
        return attribute.slice(0, 1) === attr.slice(0, 1)
    })
}

function matchName(arr, attr) {
    return arr.filter(function (obj) {
        return obj.name.toLowerCase() === attr.toLowerCase()
    })
}