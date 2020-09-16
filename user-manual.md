# User Manual BackstopJS Node App [WIP]

Please [see the readme for set up instructions](README.md).

These docs specify workflow and technical "how it works".

Helpful links:

1. [Backstop js docs](https://github.com/garris/BackstopJS/blob/master/README.md)
2. Discussion on [makeScenario function](https://github.com/garris/BackstopJS/issues/587#issuecomment-341699185) similar to what I used.
3. How I [solved the error for puppeteer](https://github.com/garris/BackstopJS/issues/1011#issuecomment-496363004) `empty query all`.
4. T[utorial with Circle CI Integration](https://medium.com/@Fandekasp/overview-of-backstopjs-a-tool-to-test-a-web-applications-ui-99234dc6c4f2)

# Intro

Our node app has options (help and version), and commands with options (based on command).

Try it out: Type `node ./app.js` and hit return. You'll get a help screen similar to this: 

```bash
$ node ./app.js [options] [command]

Options:
	-V, --version    output the version number
  -h, --help       display help for command

Commands:
  scenario:approve [options] <scenario> [test-domain] [reference-domain]
  scenario:reference [options] <scenario> [test-domain] [reference-domain]
  scenario:report [options] <scenario> [test-domain] [reference-domain]
  scenario:test [options] <scenario> [test-domain] [reference-domain]
  url:approve [options] <test-url> <reference-url>
  url:reference [options] <test-url> <reference-url>
  url:report [options] <test-url> <reference-url>
  url:test [options] <test-url> <reference-url>
  help [command]   display help for command
```

There are **two types of tests** and **four types of actions** that make up our **commands**. 

## **Tests**

- **url** (runs against a single URL)
- **scenario** (runs against a predefined set of scenarios in `/lib/scenarios`)

## **Actions**

- **approve** (sets the latest test as a reference)
- **reference** (establishes the baseline to test against)
- **report** (opens the latest report)
- **test** (runs the visual regression test)

# URL

## Commands

```bash
node ./app.js [command] [options] <test-url> <reference-url>

# Help
Commands:
  url:approve [options] <test-url> <reference-url>
  url:reference [options] <test-url> <reference-url>
  url:report [options] <test-url> <reference-url>
  url:test [options] <test-url> <reference-url>
  help [command]    display help for command

Required: 
 test-url
 reference-url

Options:
  -p, --project <id>  The project ID and name of directory results are stored
  -l, --label <name>  The url label (default: "")
  -h, --help          display help for command
```

### Example (Basic):

```bash
# First create a reference for products page
$ node ./app.js url:reference https://prod.com/products https://staging.com/products

# Next test dev staging products page against prod products page
$ node ./app.js url:test https://prod.com/products https://staging.com/products
```

The results are stored in the `vr_data` repo, which should be installed on the same level as `visual_regression`

## **Options**

- **Project ID - The project directory in tableau_vr_data**
If no project ID is specified, the default is `single_regression_test`
This will be the project folder in `tableau_vr_data` that holds your recent test.
To set a new project ID (and not override the existing data): 
`node ./app.js url:reference --project myUrlTest <test-url> <reference-url>`
- **Label - The label for the URL displayed on the report**
Defaults to an empty string
To set `node ./app.js url:reference --label ProductPage <test-url> <reference-url>`

### Example (Advanced):

```bash
# Example order of opperations using reference
$ node ./app.js url:reference [options] <test-url> <reference-url>

Options:
  -p, --project <id>  The project ID. If set, gets `_test` appended on the filenames.
  -l, --label <name>  The test label (default: "")
  -h, --help          display help for command

# Updating our previous example with options
# Reference with project_id and label
node ./app.js url:reference --project docs_product --label ProductPage https://tableau.com/products https://dev-tableau-www.pantheonsite.io/products

# Next test dev staging products page against prod products page
node ./app.js url:test --project docs_product --label ProductPage https://tableau.com/products https://dev-tableau-www.pantheonsite.io/products

# Results will be in 
# ../vr_data/bitmaps_test/docs_product/timestamp
# ../vr_data/ci_report/docs_product/
# ../vr_data/html_report/docs_product/
```

# Scenario

## Commands:

```bash
node ./app.js [command] [options] <scenario> [test-domain] [reference-domain]

# Help
Commands:
  scenario:approve [options] <scenario> [test-domain] [reference-domain]
  scenario:reference [options] <scenario> [test-domain] [reference-domain]
  scenario:report [options] <scenario> [test-domain] [reference-domain]
  scenario:test [options] <scenario> [test-domain] [reference-domain]

Options:
  -p, --project <id>  The project ID and directory name for results.
  -h, --help          display help for comman

Scenario (required):
  migration
  header-footer
  paragraphs
  content-types

Optional:
  test-domain defaults to your VR_LOCAL set in your .env file
  reference-domain defaults to your VR_STAGING set in your .env file
```

### Example (Basic):

```bash
# Passing in the minimum arguments
# First run, set a reference. This uses your VR_STAGING as a reference.
node ./app.js scenario:reference demo

# Run a regression on VR_LOCAL against VR_STAGING
node ./app.js scenario:test paragraphs

# Results are stored in the default migration project_id
bitmaps_reference: '../vr_data/bitmaps_reference/local_regression',
bitmaps_test: '../vr_data/bitmaps_test/local_regression',
html_report: '../vr_data/html_report/local_regression',
ci_report: '../vr_data/ci_report/local_regression'

```

## **Options**

- **Project ID - The project directory in tableau_vr_data**
If no project ID is specified, the default is `local_regression`
This will be the project folder in `tableau_vr_data` that holds your recent test.
To set a new project ID (and not override the existing data): 
`node ./app.js scenario:reference --project myUrlTest`

## Optional Arguments

- **Test-Domain: The domain to test.**
- **Reference-Domain: The domain to reference.**

We only set the domain because URLs are specified in the `/lib/scenario/file.json` for each scenario. 

### Example (Advanced):

```bash
# A test referencing prod and testing dev for D8 with a custom project_id.
# First set up the reference:
node ./app.js scenario:reference demo --project docs_example_scenario https://test.env.com https://ref.env.com

# Next, run the test:
node ./app.js scenario:test demo --project docs_example_scenario https://test.env.com https://ref.env.com

# Results will be in 
# ../vr_data/bitmaps_test/docs_example_scenario_regression/timestamp
# ../vr_data/ci_report/docs_example_scenario_regression
# ../vr_data/html_report/docs_example_scenario_regression
```

# Technical Docs

## Backstop Config

Our main backstop config is generated `/lib/helpers/config.js`

```bash
{
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
```

This allows us to. use the same generic configuration for every test. 

We customize the `project id` based on a project id from scenario object.

We customize the data paths to save our data (test images, reference images, reports) to the `vr_data` repo which is sitting at the same directory level as `visual_regression`.

We pass in the `viewports` object which is defined in the same file in the `getViewports()` function.

We pass in the `scenarios` object- see below for details.

## Scenarios

Scenarios are defined in `/lib/scenarios/` 

The filename must match the scenario defined on the command line. (Example: `paragraphs.json` is run with `node ./app.js scenario:test paragraphs`

Two properties in the `{scenarioName}.json` file get parsed to create the `scenarios` object in `/lib/helpers/scenarios.js` *buildScenario()* function.

`"globalOptions": {}` Optional. Defines configuration to apply to every scenario in the file. (Example: Remove header and footer for all pages)

`"scenarios": []` Required: url and label. Other options can be applied to an individual page here. (Example: Hide dynamic quote on home page only.)

---
