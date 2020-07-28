#! /usr/bin/env node --no-warnings
const args = require('yargs').argv
const backstop = require('backstopjs')
const { LOCAL } = require('./backstop_config/environments')
const scenario = require('./backstop_config/urls/demo')

// Need project from args (production, local, test, sandbox, mutlidev)
// Use command to require based on arg value of project

const projectConfig = require('./backstop_config/backstop.config.js')({
  project: args.p,
  scenarios: getScenariosForProject(LOCAL)
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

if (commandToRun !== '') {
  backstop(commandToRun, { config: projectConfig })
}

function getScenariosForProject ({ siteUrl }) {
  const scenarios = scenario.map(({ label, url }) => {
    console.log(url)
    return {
      label: label,
      url: `${siteUrl}/${url}`
    }
  })

  return scenarios
}

// module.exports = exports = { getScenariosForProject: getScenariosForProject, commandToRun }
