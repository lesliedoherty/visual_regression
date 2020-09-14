const backstop = require('backstopjs')
const {
  getLocalConfig,
  getStagingConfig,
  getViewports,
  makeBackstopConfig,
  makeEnvironmentConfig
} = require('@lib/helpers/config')
const { buildScenario, loadScenario } = require('@lib/helpers/scenario')

function logScenarios(scenarios) {
  scenarios.forEach(scenario => {
    console.log('🔗 URL to reference ' + scenario.referenceUrl)
    console.log('⚖️ URL to test ' + scenario.url)
  })
}

function buildScenarios(testConfig, referenceConfig, scenarioData) {
  const testUrl = testConfig.siteUrl
  const referenceUrl = referenceConfig.siteUrl
  const options = scenarioData.globalOptions

  return scenarioData.scenarios.map(scenario => {
    return buildScenario(scenario, testUrl, referenceUrl, options)
  })
}

function makeTestConfig(domain) {
  return domain
    ? makeEnvironmentConfig('override-test', domain)
    : getLocalConfig()
}

function makeReferenceConfig(domain) {
  return domain
    ? makeEnvironmentConfig('override-reference', domain)
    : getStagingConfig()
}

function makeProjectId(name) {
  return `${name}_regression`
}

function execute(command, { scenario, testDomain, referenceDomain, options }) {
  const testConfig = makeTestConfig(testDomain)
  const referenceConfig = makeReferenceConfig(referenceDomain)
  const scenarioData = loadScenario(scenario)
  const project = makeProjectId(options.project || testConfig.name)

  const scenarios = buildScenarios(testConfig, referenceConfig, scenarioData)
  const viewports = getViewports()
  const config = makeBackstopConfig({ project, scenarios, viewports })

  logScenarios(scenarios)
  console.dir(config)

  // backstop(command, config)
}

function approve(scenario, testDomain, referenceDomain, options) {
  execute('approve', { scenario, testDomain, referenceDomain, options })
}

function reference(scenario, testDomain, referenceDomain, options) {
  execute('reference', { scenario, testDomain, referenceDomain, options })
}

function report(scenario, testDomain, referenceDomain, options) {
  execute('report', { scenario, testDomain, referenceDomain, options })
}

function test(scenario, testDomain, referenceDomain, options) {
  execute('test', { scenario, testDomain, referenceDomain, options })
}

module.exports = exports = { approve, reference, report, test }
