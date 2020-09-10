require('module-alias/register')
const backstop = require('backstopjs')
const { join } = require('path')
const { commandToRun, getScenariosForProject } = require('@root/app.js')
const { TEST, PROJECT_ID, VIEWPORTS, SCENARIOS } = require('@config/global')
const scenarioFile = require(join('@scenarios/', SCENARIOS + '.js'))

const projectConfig = require('@config/backstop.config.js')({
  project: PROJECT_ID,
  scenarios: getScenariosForProject(TEST, scenarioFile.scenarios, scenarioFile.globalOptions),
  viewport: VIEWPORTS
})

if (commandToRun !== '') {
  backstop(commandToRun, { config: projectConfig })
}
