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
    label: 'www.tableau.com',
    url: '',
    extend: {
      removeSelectors: [
        '.random-single__item'
      ]
    }
  },
  {
    label: 'about',
    url: 'about'
  },
  {
    label: 'awards-and-recognition',
    url: 'about/awards-and-recognition'
  },
  {
    label: 'blog',
    url: 'about/blog'
  },
  {
    label: 'visualizing-all-protests-and-political-unrest-us-summer',
    url: 'about/blog/2020/8/visualizing-all-protests-and-political-unrest-us-summer'
  },
  {
    label: 'contact',
    url: 'about/contact'
  },
  {
    label: 'customer-service',
    url: 'about/contact/customer-service'
  },
  {
    label: 'global-offices',
    url: 'about/contact/global-offices'
  },
  {
    label: 'global-sales',
    url: 'about/contact/global-sales'
  },
  {
    label: 'leadership',
    url: 'about/leadership'
  },
  {
    label: 'mission',
    url: 'about/mission'
  },
  {
    label: 'newsroom',
    url: 'about/newsroom'
  },
  {
    label: 'PaymentOptions',
    url: 'about/PaymentOptions'
  },
  {
    label: 'academic',
    url: 'academic'
  },
  {
    label: 'united-nations',
    url: 'account/united-nations'
  },
  {
    label: 'community',
    url: 'community'
  },
  {
    label: 'community-request-speaker',
    url: 'community-request-speaker'
  },
  {
    label: 'events',
    url: 'community/events'
  },
  {
    label: 'compare',
    url: 'compare'
  },
  {
    label: 'data-culture',
    url: 'data-culture'
  },
  {
    label: 'data-for-kids',
    url: 'data-for-kids'
  },
  {
    label: 'data-sets-students',
    url: 'data-sets-students'
  },
  {
    label: 'data-storytelling',
    url: 'data-storytelling'
  },
  {
    label: 'developer',
    url: 'developer'
  },
  {
    label: 'dreamforce',
    url: 'dreamforce'
  },
  {
    label: 'embedded-analytics',
    url: 'embedded-analytics'
  },
  {
    label: 'enterprise-IT',
    url: 'enterprise-IT'
  },
  {
    label: 'foundation',
    url: 'foundation'
  },
  {
    label: 'home',
    url: 'home'
  },
  {
    label: 'iron-viz',
    url: 'iron-viz'
  },
  {
    label: 'leading-through-change',
    url: 'leading-through-change'
  },
  {
    label: 'learn',
    url: 'learn'
  },
  {
    label: 'articles',
    url: 'learn/articles'
  },
  {
    label: 'certification',
    url: 'learn/certification'
  },
  {
    label: 'classroom',
    url: 'learn/classroom'
  },
  {
    label: 'data-viz-debate',
    url: 'learn/data-viz-debate'
  },
  {
    label: 'live-training',
    url: 'learn/live-training'
  },
  {
    label: 'training',
    url: 'learn/training'
  },
  {
    label: 'welcome-tableau-server-trial',
    url: 'learn/welcome-tableau-server-trial'
  },
  {
    label: 'whitepapers',
    url: 'learn/whitepapers'
  },
  {
    label: 'legal',
    url: 'legal'
  },
  {
    label: 'cookies',
    url: 'legal/cookies'
  },
  {
    label: 'regional-privacy-laws',
    url: 'legal/regional-privacy-laws'
  },
  {
    label: 'metrics',
    url: 'metrics'
  },
  {
    label: 'modern-bi',
    url: 'modern-bi'
  },
  {
    label: 'partners',
    url: 'partners'
  },
  {
    label: 'embedded',
    url: 'pricing/embedded'
  },
  {
    label: 'how-to-decide',
    url: 'pricing/how-to-decide'
  },
  {
    label: 'individual',
    url: 'pricing/individual'
  },
  {
    label: 'teams-orgs',
    url: 'pricing/teams-orgs'
  },
  {
    label: 'privacy',
    url: 'privacy'
  },
  {
    label: 'products',
    url: 'products'
  },
  {
    label: 'accessibility',
    url: 'products/accessibility'
  },
  {
    label: 'catalog',
    url: 'products/add-ons/catalog'
  },
  {
    label: 'data-management',
    url: 'products/add-ons/data-management'
  },
  {
    label: 'catalog-request',
    url: 'products/add-ons/data-management/catalog-request'
  },
  {
    label: 'request-limited-release',
    url: 'products/add-ons/data-management/request-limited-release'
  },
  {
    label: 'server-management',
    url: 'products/add-ons/server-management'
  },
  {
    label: 'all-features',
    url: 'products/all-features'
  },
  {
    label: 'buy-more',
    url: 'products/buy-more'
  },
  {
    label: 'cloud-bi',
    url: 'products/cloud-bi'
  },
  {
    label: 'coming-soon',
    url: 'products/coming-soon'
  },
  {
    label: 'desktop',
    url: 'products/desktop'
  },
  {
    label: 'download',
    url: 'products/desktop/download'
  },
  {
    label: 'individuals',
    url: 'products/individuals'
  },
  {
    label: 'linux',
    url: 'products/linux'
  },
  {
    label: 'mobile',
    url: 'products/mobile'
  },
  {
    label: 'new-features',
    url: 'products/new-features'
  },
  {
    label: 'demo',
    url: 'products/new-features/ask-data/demo'
  },
  {
    label: 'desktop',
    url: 'products/new-features/desktop'
  },
  {
    label: 'explain-data',
    url: 'products/new-features/explain-data'
  },
  {
    label: 'hyper',
    url: 'products/new-features/hyper'
  },
  {
    label: 'online',
    url: 'products/new-features/online'
  },
  {
    label: 'prep',
    url: 'products/new-features/prep'
  },
  {
    label: 'server',
    url: 'products/new-features/server'
  },
  {
    label: 'request-trial',
    url: 'products/online/request-trial'
  },
  {
    label: 'prep',
    url: 'products/prep'
  },
  {
    label: 'download',
    url: 'products/prep/download'
  },
  {
    label: 'reader',
    url: 'products/reader'
  },
  {
    label: 'server',
    url: 'products/server'
  },
  {
    label: 'teams-organizations',
    url: 'products/teams-organizations'
  },
  {
    label: 'techspecs',
    url: 'products/techspecs'
  },
  {
    label: 'viewer',
    url: 'products/viewer'
  },
  {
    label: 'viewer-vs-reader',
    url: 'products/viewer-vs-reader'
  },
  {
    label: 'what-is-tableau',
    url: 'products/what-is-tableau'
  },
  {
    label: 'renewing-your-licenses-tableau-partners',
    url: 'renewing-your-licenses-tableau-partners'
  },
  {
    label: 'reopen-with-tableau',
    url: 'reopen-with-tableau'
  },
  {
    label: 'security',
    url: 'security'
  },
  {
    label: 'smart-approach',
    url: 'smart-approach'
  },
  {
    label: 'snowflake-cloud-monitoring',
    url: 'snowflake-cloud-monitoring'
  },
  {
    label: 'analytics',
    url: 'solutions/analytics'
  },
  {
    label: 'solutions',
    url: 'solutions'
  },
  {
    label: 'webinars-emea',
    url: 'solutions/webinars-emea'
  },
  {
    label: 'support',
    url: 'support'
  },
  {
    label: 'desktop',
    url: 'support/desktop'
  },
  {
    label: 'mobile',
    url: 'support/mobile'
  },
  {
    label: 'online',
    url: 'support/online'
  },
  {
    label: 'online-upgrade',
    url: 'support/online-upgrade'
  },
  {
    label: 'prep',
    url: 'support/prep'
  },
  {
    label: 'prep-upgrade',
    url: 'support/prep-upgrade'
  },
  {
    label: 'public',
    url: 'support/public'
  },
  {
    label: 'reader',
    url: 'support/reader'
  },
  {
    label: 'releases',
    url: 'support/releases'
  },
  {
    label: 'bridge',
    url: 'support/releases/bridge'
  },
  {
    label: '2020.1',
    url: 'support/releases/data-management-add-on/2020.1'
  },
  {
    label: '2020.3',
    url: 'support/releases/desktop/2020.3'
  },
  {
    label: '0.0.11249',
    url: 'support/releases/hyper-api/0.0.11249'
  },
  {
    label: 'mobile',
    url: 'support/releases/mobile'
  },
  {
    label: '2020.708.4057',
    url: 'support/releases/mobile/2020.708.4057'
  },
  {
    label: 'online',
    url: 'support/releases/online'
  },
  {
    label: '10.3',
    url: 'support/releases/online/10.3'
  },
  {
    label: 'prep',
    url: 'support/releases/prep'
  },
  {
    label: '2020.3.1',
    url: 'support/releases/prep/2020.3.1'
  },
  {
    label: 'server',
    url: 'support/releases/server'
  },
  {
    label: '2020.3',
    url: 'support/releases/server/2020.3'
  },
  {
    label: 'renew',
    url: 'support/renew'
  },
  {
    label: 'server',
    url: 'support/server'
  },
  {
    label: 'server-upgrade',
    url: 'support/server-upgrade'
  },
  {
    label: 'services',
    url: 'support/services'
  },
  {
    label: 'upgrade-assistance',
    url: 'support/upgrade-assistance'
  },
  {
    label: 'tableau-for-executives',
    url: 'tableau-for-executives'
  },
  {
    label: 'tableau-salesforce-analytics',
    url: 'tableau-salesforce-analytics'
  },
  {
    label: 'tableau-technology-partners',
    url: 'tableau-technology-partners'
  },
  {
    label: 'tableau-virtual-event-code-conduct',
    url: 'tableau-virtual-event-code-conduct'
  },
  {
    label: 'tos',
    url: 'tos'
  },
  {
    label: 'zen-masters',
    url: 'zen-masters'
  }
]

module.exports = exports = { globalOptions, scenarios }
