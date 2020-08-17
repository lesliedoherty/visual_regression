#! /usr/bin/env node --no-warnings
const args = require('yargs').argv
const backstop = require('backstopjs')
const scenario = require('./backstop_config/urls/demo')
const { LOCAL, STAGING } = require('./backstop_config/environments')
// Use the argument for test and reference if set.
// Default is testing local object and referencing staging object.
const TEST = args.test ? { name: 'override test', siteUrl: args.test } : LOCAL
const REFERENCE = args.reference ? { name: 'override reference', siteUrl: args.reference } : STAGING
const PROJECT_ID = args.projectID ? args.projectID + '_regression' : TEST + '_regression'
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

if (commandToRun !== '') {
  backstop(commandToRun, { config: projectConfig })
}

function getScenariosForProject ({ siteUrl }) {
  const scenarios = scenario.map(({ label, url }) => {
    return {
      label: label,
      url: `${siteUrl}/${url}`,
      referenceUrl: `${REFERENCE}/${url}`
    }
  })
  return scenarios
}
