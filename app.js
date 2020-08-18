#! /usr/bin/env node --no-warnings
const args = require('yargs').argv
const scenario = require('./backstop_config/scenarios/demo')
const { TEST, REFERENCE, PROJECT_ID } = require('./backstop_config/global')

const projectConfig = require('./backstop_config/backstop.config.js')({
  project: PROJECT_ID,
  scenarios: getScenariosForProject(TEST)
})

let commandToRun = ''

if (args.reference) {
  commandToRun = 'reference'
}

if (args.test) {
  commandToRun = 'test'
}

if (args.openReport) {
  commandToRun = 'openReport'
}

if (args.approve) {
  commandToRun = 'approve'
}

function getScenariosForProject ({ siteUrl }) {
  const scenarios = scenario.map(({ label, url }) => {
    return {
      label: label,
      url: `${siteUrl}/${url}`,
      referenceUrl: `${REFERENCE.siteUrl}/${url}`
    }
  })
  return scenarios
}

module.exports = exports = { commandToRun, getScenariosForProject, projectConfig }
