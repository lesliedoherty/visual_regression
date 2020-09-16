function validateEnvironmentVariable (key) {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Missing required environment variable "${key}"`)
  }
}

function makeBackstopDataPath (directory, project) {
  return `../tableau_vr_data/${directory}/${project}`
}

function makeBackstopConfig ({ project, scenarios, viewports }) {
  return {
    id: `${project}_test`,
    misMatchThreshold: 1,
    viewports,
    scenarios,
    paths: {
      bitmaps_reference: makeBackstopDataPath('bitmaps_reference', project),
      bitmaps_test: makeBackstopDataPath('bitmaps_test', project),
      html_report: makeBackstopDataPath('html_report', project),
      ci_report: makeBackstopDataPath('ci_report', project)
    },
    engine: 'puppeteer',
    engineOptions: {
      args: ['--no-sandbox']
    },
    report: ['browser', 'CI'],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    puppeteerOffscreenCaptureFix: true,
    requireSameDimensions: false,
    debug: false,
    debugWindow: false
  }
}

function makeEnvironmentConfig (name, siteUrl) {
  return { name, siteUrl }
}

function getLocalConfig () {
  validateEnvironmentVariable('VR_LOCAL')
  return makeEnvironmentConfig('local', process.env.VR_LOCAL)
}

function getStagingConfig () {
  validateEnvironmentVariable('VR_STAGING')
  return makeEnvironmentConfig('staging', process.env.VR_STAGING)
}

function getProductionConfig () {
  validateEnvironmentVariable('VR_PRODUCTION')
  return makeEnvironmentConfig('production', process.env.VR_PRODUCTION)
}

function getViewports () {
  return [
    { name: 'desktop', width: 1024, height: 768 },
    { name: 'phone', width: 320, height: 480 }
  ]
}

module.exports = exports = {
  getLocalConfig,
  getStagingConfig,
  getProductionConfig,
  getViewports,
  makeBackstopConfig,
  makeEnvironmentConfig
}
