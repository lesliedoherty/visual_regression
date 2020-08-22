#! /usr/bin/env node --no-warnings
const args = require('yargs').argv
const backstop = require('backstopjs')
const scenario = require('./backstop_config/scenarios/demo')
const { TEST, REFERENCE, PROJECT_ID } = require('./backstop_config/global')
console.log('⭐️️  Running test for ' + PROJECT_ID)
console.log('⭐️  Testing environment ' + TEST.siteUrl)
console.log('⭐️  Reference environment ' + REFERENCE.siteUrl)

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
  const scenarios = scenario.map(({ label, url, extend }) => {
    let options = []
    if (extend) {
      for (const [key, value] of Object.entries(extend)) {
        options = `${key}: ${value}`
        console.log('options here are ' + options)
      }
    }
    return {
      label: label,
      url: `${siteUrl}/${url}`,
      referenceUrl: `${REFERENCE.siteUrl}/${url}`,
      options
    }
  })
  for (let k = 0; k < scenarios.length; k++) {
    console.log('🔗  Reference url ' + scenarios[k].referenceUrl)
    console.log('⚖️  Testing url ' + scenarios[k].url)
    console.log('⚖️  Testing options ' + scenarios[k].options)
  }
  return scenarios
}

module.exports = exports = { commandToRun, projectConfig }
