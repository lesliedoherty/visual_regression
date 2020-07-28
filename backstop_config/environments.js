// No trailing slash

const STAGING = {
  siteUrl: 'https://mkt-review-tableau-www.pantheonsite.io'
}

const PRODUCTION = {
  siteUrl: 'https://www.tableau.com'
}

// Todo move to environment variable
const LOCAL = {
  siteUrl: 'http://tableauwww.test'
}

module.exports = exports = { PRODUCTION, STAGING, LOCAL }
