const { LOCAL } = require('../backstop_config/global')
// Need test, reference, scenario file, custom config if present.
const { preparePages, runTests } = require('./lib/percy')
const urls = require('./storage/urls/percy.json')

runTests(preparePages(LOCAL, urls))
