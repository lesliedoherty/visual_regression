const { build } = require('@lib/helpers/scenario')

test('it includes additional properties', () => {
  const scenario = { label: 'Test label', additional: { key: 'value' } }
  const testDomain = 'http://localhost:3000/'
  const refDomain = 'https://www.site.com/'

  const result = build(scenario, testDomain, refDomain)

  expect(result.label).toBe('Test label')
  expect(result.additional).toStrictEqual({ key: 'value' })
})

test('it constructs the full test URL', () => {
  const scenario = { url: '/path/to/page.html' }
  const testDomain = 'http://localhost:3000/'
  const refDomain = ''

  const result = build(scenario, testDomain, refDomain)

  expect(result.url).toBe('http://localhost:3000/path/to/page.html')
})

test('it constructs the full reference URL', () => {
  const scenario = { url: '/path/to/page.html' }
  const testDomain = ''
  const refDomain = 'https://www.site.com'

  const result = build(scenario, testDomain, refDomain)

  expect(result.referenceUrl).toBe('https://www.site.com/path/to/page.html')
})

test('scenario string options override globals', () => {
  const defaults = { foo: 'default' }
  const scenario = { foo: 'override' }

  const result = build(scenario, '', '', defaults)

  expect(result.foo).toBe('override')
})

test('scenario number options override globals', () => {
  const defaults = { foo: 101 }
  const scenario = { foo: 102 }

  const result = build(scenario, '', '', defaults)

  expect(result.foo).toBe(102)
})

test('scenario array options are merged and deduplicated', () => {
  const defaults = { foo: ['c', 'd'] }
  const scenario = { foo: ['a', 'b', 'c'] }

  const result = build(scenario, '', '', defaults)

  expect(result.foo).toEqual(['a', 'b', 'c', 'd'])
})

test('scenario object options are merged', () => {
  const defaults = { foo: { bravo: 'bill', charlie: 'chuck' } }
  const scenario = { foo: { alfa: 'alpha', bravo: 'beta' } }

  const result = build(scenario, '', '', defaults)

  expect(result.foo).toEqual({ alfa: 'alpha', bravo: 'beta', charlie: 'chuck' })
})
