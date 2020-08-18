const args = require('yargs').argv
const backstop = require('backstopjs')
const { commandToRun } = require('../app.js')

const singleConfig = require('./../backstop_config/backstop.config.js')({
  project: args.projectID ? args.projectID : 'single_regression',
  scenarios: [
    {
      label: args.label ? args.label : '',
      url: args.singleUrl ? args.singleUrl : '',
      referenceUrl: args.referenceUrl ? args.referenceUrl : ''
    }
  ]
})

if (commandToRun !== '') {
  backstop(commandToRun, { config: singleConfig })
}
