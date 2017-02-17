#!/usr/bin/env node

var plh = require('../index')
var args = process.argv.slice(2)
process.stdout.write(plh(args[0], args[1]) + '\n')
