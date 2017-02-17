var test = require('tape')
var plh = require('./index')

test('default', function (t) {
  var base64 = plh()
  t.equal(base64, 'data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')
  t.end()
})

test('options', function (t) {
  var base64 = plh(10, 50)
  t.equal(base64, 'data:image/gif;base64,R0lGODlhCgAyAPAAAAAAAAAAACH5BAEAAAAALAAAAAAKADIAAAIUhI+py+0Po5y02ouz3rz7D4biiBQAOw==')
  t.end()
})
