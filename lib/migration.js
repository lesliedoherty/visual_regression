const backstop = require('backstopjs')
const { commandToRun, projectConfig } = require('../app.js')

if (commandToRun !== '') {
  backstop(commandToRun, { config: projectConfig })
}
