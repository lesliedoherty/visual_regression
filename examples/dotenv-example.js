const { LOCAL, STAGING } = require('./backstop_config/environments')
const args = require('yargs').argv
// Use the argument for test and reference if set.
// Default is testing local site url and referencing staging
const TEST = args.test ? args.test : LOCAL.siteUrl
const REFERENCE = args.reference ? args.reference : STAGING.siteUrl
const PROJECT_ID = args.projectID ? args.projectID + '_regression' : TEST + '_regression'

console.log('Setting the value of test to ' + TEST)
console.log('Setting the value of reference to ' + REFERENCE)
console.log('Setting the value of project id to ' + PROJECT_ID)
