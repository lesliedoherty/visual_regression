require('module-alias/register')
const backstop = require('backstopjs')
const { commandToRun, getScenariosForProject } = require('@root/app.js')
const { TEST, PROJECT_ID, VIEWPORTS } = require('@config/global')
const scenario = require('@config/scenarios/migration')
const allScenarioOptions = {
  removeSelectors: [
    '.global-header',
    '.global-footer'
  ],
  hideSelectors: [
    '[class^=\'us–style-manager-1buttonIframe\']'
  ]
}

const projectConfig = require('@config/backstop.config.js')({
  project: PROJECT_ID,
  scenarios: getScenariosForProject(TEST, scenario, allScenarioOptions),
  viewport: VIEWPORTS
})

if (commandToRun !== '') {
  backstop(commandToRun, { config: projectConfig })
}
