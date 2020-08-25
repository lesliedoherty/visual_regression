module.exports = options => {
  return {
    id: `${options.project}_test`,
    misMatchThreshold: 0.5,
    viewports: options.viewport,
    scenarios: options.scenarios,
    paths: {
      bitmaps_reference: 'backstop_data/bitmaps_reference',
      bitmaps_test: 'backstop_data/bitmaps_test',
      html_report: 'backstop_data/html_report',
      ci_report: 'backstop_data/ci_report'
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
