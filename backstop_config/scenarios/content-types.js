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
    label: 'Home',
    url: ''
  },
  {
    label: 'Blog Post',
    url: '__test__/blog'
  },
  {
    label: 'Company',
    url: '__test__/company'
  },
  {
    label: 'Customer Story',
    url: '__test__/customer-story'
  },
  {
    label: 'External News Article',
    url: '__test__/external-news-article'
  },
  {
    label: 'Event In Person',
    url: '__test__/in-person-event'
  },
  {
    label: 'Live Demo',
    url: '__test__/live-demo'
  },
  {
    label: 'Live Training',
    url: '__test__/live-training'
  },
  {
    label: 'Live Webinar',
    url: '__test__/live-webinar'
  },
  {
    label: 'Master Asset',
    url: '__test__/master-asset'
  },
  {
    label: 'On Demand Training',
    url: '__test__/on-demand-training'
  },
  {
    label: 'On Demand Webinar',
    url: '__test__/on-demand-webinar'
  },
  {
    label: 'Paid In-Person Event',
    url: '__test__/paid-in-person-event'
  },
  {
    label: 'Paid Landing Page',
    url: '__test__/trial/tableau-software'
  },
  {
    label: 'Paid Landing Page (Asset)',
    url: '__test__/asset'
  },
  {
    label: 'Person',
    url: '__test__/person'
  },
  {
    label: 'Press Release',
    url: '__test__/press-release'
  },
  {
    label: 'Quote',
    url: '__test__/quote'
  },
  {
    label: 'Search Featured Content',
    url: '__test__/search-featured-content'
  },
  {
    label: 'Product Release Feature',
    url: '__test__/product-release-feature'
  },
  {
    label: 'Product Release',
    url: 'support/releases/all-products/Not-version-specific'
  },
  {
    label: 'Series',
    url: '__test__/series'
  },
  {
    label: 'Solutions',
    url: '__test__/solutions'
  },
  {
    label: 'Standard Page',
    url: '__test__/standard-page'
  },
  {
    label: 'TPEP',
    url: '__test__/tpep'
  },
  {
    label: 'User Group Event',
    url: '__test__/user-group-event'
  },
  {
    label: 'User Group Event (with form)',
    url: '__test__/user-group-event-form'
  },
  {
    label: 'Visualization',
    url: '__test__/visualization'
  },
  {
    label: 'Visualization (Workbook)',
    url: '__test__/workbook'
  },
  {
    label: 'Web Part Snippet',
    url: '__test__/web-part-snippet'
  },
  {
    label: 'Webform',
    url: '__test__/webform'
  },
  {
    label: 'Whitepaper',
    url: '__test__/whitepaper'
  },
  {
    label: 'Creative Campaign Theme',
    url: '__test__/creative-campaign-theme'
  },
  {
    label: 'Promo Item',
    url: '__test__/promo-item'
  }
]
module.exports = exports = { globalOptions, scenarios }
