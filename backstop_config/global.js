const args = require('yargs').argv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const LOCAL = {
  name: 'local',
  siteUrl: process.env.VR_LOCAL
}

const PRODUCTION = {
  name: 'production',
  siteUrl: process.env.VR_PRODUCION
}

const STAGING = {
  name: 'staging',
  siteUrl: process.env.VR_STAGING
}

const TEST = args.testEnv ? { name: 'override test', siteUrl: args.testEnv } : LOCAL
const REFERENCE = args.referenceEnv ? { name: 'override reference', siteUrl: args.reference } : STAGING
const PROJECT_ID = args.projectID ? args.projectID + '_regression' : TEST.name + '_regression'

module.exports = exports = { PRODUCTION, STAGING, LOCAL, TEST, REFERENCE, PROJECT_ID }
