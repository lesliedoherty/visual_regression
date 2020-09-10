const globalOptions = {}
const scenarios = [
  {
    label: 'Home',
    url: '',
    extend: {
      selectors: [
        '.global-header',
        '.global-footer'
      ]
    }
  },
  {
    label: 'Whitepapers',
    url: 'learn/whitepapers',
    extend: {
      selectors: [
        '.global-header',
        '.global-footer'
      ]
    }
  }
]

module.exports = exports = { globalOptions, scenarios }
