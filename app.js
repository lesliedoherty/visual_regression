#! /usr/bin/env node --no-warnings
const args = require('yargs').argv
const { TEST, REFERENCE, PROJECT_ID } = require('./backstop_config/global')
console.log('⭐️️  Running test for ' + PROJECT_ID)
console.log('⭐️  Testing environment ' + TEST.siteUrl)
console.log('⭐️  Reference environment ' + REFERENCE.siteUrl)

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

function getScenariosForProject ({ siteUrl }, scenario, allScenarioOptions) {
  const scenarios = scenario.map(({ label, url, extend }) => {
    return {
      label: label,
      url: `${siteUrl}/${url}`,
      referenceUrl: `${REFERENCE.siteUrl}/${url}`,
      ...extend,
      ...allScenarioOptions
    }
  })
  for (let k = 0; k < scenarios.length; k++) {
    console.log('🔗  Reference ' + scenarios[k].referenceUrl)
    console.log('⚖️  Testing ' + scenarios[k].url)
  }
  return scenarios
}

module.exports = exports = { commandToRun, getScenariosForProject }
