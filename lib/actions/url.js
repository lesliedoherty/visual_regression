const backstop = require('backstopjs')
const { getViewports, makeBackstopConfig } = require('@lib/helpers/config')

function execute (command, { testUrl, referenceUrl, options }) {
  const config = makeBackstopConfig({
    project: options.project || 'single_regression',
    scenarios: [{ label: options.label, url: testUrl, referenceUrl }],
    viewports: getViewports()
  })

  console.dir(config)

  // backstop(command, { config })
}

function approve (testUrl, referenceUrl, options) {
  execute('approve', { testUrl, referenceUrl, options })
}

function reference (testUrl, referenceUrl, options) {
  execute('reference', { testUrl, referenceUrl, options })
}

function report (testUrl, referenceUrl, options) {
  execute('report', { testUrl, referenceUrl, options })
}

function test (testUrl, referenceUrl, options) {
  execute('test', { testUrl, referenceUrl, options })
}

module.exports = exports = { approve, reference, report, test }
