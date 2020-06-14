const path = require("path")
var jsonMerger = require("json-merger")
let fs = require("fs")
var traverseJsonFolder = function (dir) {
  var results = []
  var list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = path.join(dir, file)
    var stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(traverseJsonFolder(file))
    } else {
      /* Is a file */
      results.push(file)
    }
  })
  return results
}
export const mergeJsonFile = (localeFolder, appRoot) => {
  // let files = fs.readdirSync(localeFolder);
  let localePath = path.join(appRoot, localeFolder)
  let jsonFiles = []
  jsonFiles = traverseJsonFolder(localePath)
  var result = jsonMerger.mergeFiles(jsonFiles)
  return result
}
