if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Use .env for local.
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

module.exports = exports = { PRODUCTION, STAGING, LOCAL }
