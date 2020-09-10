#! /usr/bin/env node --no-warnings
require('module-alias/register')
const args = require('yargs').argv
const { build: buildScenario } = require('@lib/helpers/scenario')
const { REFERENCE, PROJECT_ID } = require('@config/global')
console.log('⭐️️  Running test for ' + PROJECT_ID)

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

function getScenariosForProject ({ siteUrl }, scenario, globalOptions) {
  const scenarios = scenario.map((scenario) =>
    buildScenario(scenario, siteUrl, REFERENCE.siteUrl, globalOptions))

  scenarios.forEach(scenario => {
    console.log('🔗  Reference ' + scenario.referenceUrl)
    console.log('⚖️  Testing ' + scenario.url)
  })

  return scenarios
}

module.exports = exports = { commandToRun, getScenariosForProject }
