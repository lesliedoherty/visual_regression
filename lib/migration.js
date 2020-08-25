const backstop = require('backstopjs')
const { commandToRun, getScenariosForProject } = require('../app.js')
const { TEST, PROJECT_ID, VIEWPORTS } = require('./../backstop_config/global')
const scenario = require('./../backstop_config/scenarios/migration')
const allScenarioOptions = {
  removeSelectors: [
    '.global-header',
    '.global-footer'
  ]
}

const projectConfig = require('./../backstop_config/backstop.config.js')({
  project: PROJECT_ID,
  scenarios: getScenariosForProject(TEST, scenario, allScenarioOptions),
  viewport: VIEWPORTS
})

console.log(' ---- Migration is using configuration ---- ', projectConfig)

if (commandToRun !== '') {
  backstop(commandToRun, { config: projectConfig })
}
