var execSync = require('child_process').execSync

module.exports = function (x = 1, y = 1) {
  var cmd = `echo 'data:image/gif;base64,'"$(convert -size ${x}x${y} xc:transparent gif:- | base64)"`
  return execSync(cmd).toString().trim()
}
