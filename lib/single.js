require('module-alias/register')
const args = require('yargs').argv
const backstop = require('backstopjs')
const { commandToRun } = require('@root/app.js')

const singleConfig = require('@config/backstop.config.js')({
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
