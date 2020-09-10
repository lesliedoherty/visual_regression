const { posix, join } = require('path')
const mergeWith = require('lodash.mergewith')

/**
 * Construct a full URL from a domain and path
 *
 * @param {string} domain
 * @param {string} path
 * @returns {string}
 */
function buildUrl (domain, path) {
  return posix.join(domain, path || '').replace(':/', '://')
}

/**
 * Construct path to pre-defined scenario js files
 *
 * @param {string} fileName
 * @returns {string}
 */
function buildFilePath (fileName) {
  return join('@scenarios/', fileName + '.js')
}

/**
 * Concatenate arrays when merging options
 *
 * Defer to Lodash for all other value types.
 *
 * @param {*} base
 * @param {*} custom
 * @returns {*}
 */
function merger (base, custom) {
  return (Array.isArray(custom)) ? [...new Set(custom.concat(base))] : undefined
}

/**
 * Generate a scenario object from the given options
 */
function build (
  { url, ...options },
  testDomain,
  referenceDomain,
  globalOptions = {}
) {
  return {
    url: buildUrl(testDomain, url),
    referenceUrl: buildUrl(referenceDomain, url),
    ...mergeWith(globalOptions, options, merger)
  }
}

module.exports = { build, buildFilePath }
