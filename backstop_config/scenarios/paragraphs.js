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
    label: 'Grid Paragraphs',
    url: '__test__/grid-paragraphs'
  },
  {
    label: 'Quote - Reference Paragraphs',
    url: '__test__/quote-reference-paragraphs'
  },
  {
    label: 'Quote - Pull Text Paragraphs',
    url: '__test__/quote-pull-text-paragraphs'
  },
  {
    label: 'Cross Reference Paragraphs',
    url: '__test__/cross-reference-paragraphs'
  },
  {
    label: 'Text Passage Paragraphs',
    url: '__test__/text-passage-paragraphs'
  },
  {
    label: 'Hero Paragraphs',
    url: '__test__/hero-paragraphs'
  },
  {
    label: 'Anchor Link Paragraphs',
    url: '__test__/anchor-link-paragraphs'
  },
  {
    label: 'Image Paragraphs',
    url: '__test__/image-paragraphs'
  },
  {
    label: 'Teasers And Feature Highlights',
    url: '__test__/paragraph-qa-teasers-and-highlights',
    selectors: [
      '.paragraph--type--feature-highlight',
      '.paragraph paragraph--type--teaser-items'
    ],
    selectorExpansion: true
  },
  {
    label: 'Accordion Paragraphs',
    url: '__test__/accordion-paragraphs'
  },
  {
    label: 'Video Paragraphs',
    url: '__test__/video-paragraphs'
  },
  {
    label: 'Page Break Paragraphs',
    url: '__test__/page-break-paragraphs'
  },
  {
    label: 'Feaure List',
    url: '__test__/paragraph-qa-feature-list'
  },
  {
    label: 'Table of Contents',
    url: '__test__/table-of-contents'
  },
  {
    label: 'Tableau Viz',
    url: '__test__/tableau-viz'
  },
  {
    label: 'Product Release Feature',
    url: '__test__/product-release-features'
  },
  {
    label: 'Paragraph Gate',
    url: '__test__/paragraph-qa-teasers-and-highlights#page-section-gate'
  },
  {
    label: 'Sponsor Sidebar',
    url: '__test__/sponsor'
  },
  {
    label: 'Video Playlist, Video Topic',
    url: '__test__/video-playlist-and-video'
  }
]

module.exports = exports = { globalOptions, scenarios }
