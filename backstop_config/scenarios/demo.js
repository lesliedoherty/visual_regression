const globalOptions = {
  removeSelectors: [
    '.global-header',
    '.global-footer'
  ],
  hideSelectors: [
    '[class^=\'us–style-manager-1buttonIframe\']'
  ]
}
const scenarios = [
  {
    label: 'Teasers And Feature Highlights',
    url: '__test__/paragraph-qa-teasers-and-highlights',
    extend: {
      selectors: [
        '.paragraph--type--feature-highlight',
        '.paragraph paragraph--type--teaser-items'
      ],
      selectorExpansion: true
    }
  }
]

module.exports = exports = { globalOptions, scenarios}
