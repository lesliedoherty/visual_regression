module.exports = options => {
  return {
    id: `${options.project}_test`,
    misMatchThreshold: 0.5,
    viewports: options.viewport,
    scenarios: options.scenarios,
    paths: {
      bitmaps_reference: 'backstop_data/bitmaps_reference/' + options.project,
      bitmaps_test: 'backstop_data/bitmaps_test' + options.project,
      html_report: 'backstop_data/html_report' + options.project,
      ci_report: 'backstop_data/ci_report' + options.project
    },
    engine: 'puppeteer',
    engineOptions: {
      args: ['--no-sandbox']
    },
    report: ['browser', 'CI'],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
  }
}
