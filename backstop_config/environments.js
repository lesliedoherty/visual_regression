if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// No trailing slash
const STAGING = {
  name: 'staging',
  siteUrl: 'https://mkt-review-tableau-www.pantheonsite.io'
}

const PRODUCTION = {
  name: 'production',
  siteUrl: 'https://www.tableau.com'
}

const LOCAL = {
  name: 'local',
  siteUrl: process.env.VR_LOCAL
}

module.exports = exports = { PRODUCTION, STAGING, LOCAL }
