# Tableau Visual Regression Testing
A node application running [BackstopJS](https://github.com/garris/BackstopJS).

## Installation ##
Backstop uses headless Chrome for testing. Assuming you have an up-to-date version of Chrome installed, you should be good to go.

```bash
$ cd /path/to/tableau-visual-regression
$ nvm use
$ yarn install
```

## Prerequisits

- ChromeDriver installed and added to the $PATH

```bash
brew cask install chromedriver
```

## Environment
- Set your local vairables in `.env`
(See .env-example to rename and replace values)

## Usage ##

Once you've run the above initialization commands, you can run a test using the following command:

```bash
$ yarn migration --reference
$ yarn migration --test
$ yarn migration --approve
```
### Options
`--testEnv` Sets the test domain. If nothing is passed, the default is the local url set in your .env file

`--referenceEnv` Sets the reference domain. If nothing is passed, the default STAGING url in `.env`

`--projectID` Sets the name of the project id. Default is `{ TEST }_regression`.

### Example migration test
*NOTE* Migration URLs do not include header and footer. Those are run separately to prevent unneeded noise.

```bash
# Set a reference from D7
yarn migration --reference --referenceEnv https://www.tableau.com --testEnv https://mkt-review-tableau-www.pantheonsite.io
```

```bash
# Run a test from mkt-review compared to D7
yarn migration --test --referenceEnv https://www.tableau.com --testEnv https://mkt-review-tableau-www.pantheonsite.io
```

### Running a test on a single URL from the command line

Note: Running a test on a single URL requires you to pass the entire URL. This differs from other batch tests where we set the environment domain and not the full URL.

**Command:**

`yarn single` is the command that runs the `/lib/single.js` app with the default backstop configuration.

**Options:**

`--singleUrl` Url to be tested. *Required*

 `--referenceUrl` Url to create the reference from. Use with action `--reference`

`--label` Label applied to URL. *Optional.* 

**Actions:**

`--test` Run a test on the `singleUrl`.

`--reference` Create a reference from the `referenceUrl`.

`--approve` Approve and set as new reference.

**Examples:**

```bash
yarn single --reference --singleUrl http://myurltotest.com --referenceUrl http://referenceurl.com
yarn single --test --singleUrl http://myurltotest.com --referenceUrl http://referenceurl.com
yarn single --approve --singleUrl https://dev-tableau-www.pantheonsite.io/products/desktop
yarn single --test --singleUrl https://dev-tableau-www.pantheonsite.io/products/desktop
```
### In Progress 

Default: local vs staging

Migration: prod vs mkt-review

CircleCI: branch vs stagingD8/prodD8

### Tasks
Currently working on the following:
- Allow argument for scenarios. Ex: paragraph, content-type, custom, etc.
- Implement scenarios and very reference works against a base.
- Create reference and update workflow docs. 
- Integration with CircleCi:
  - We'll have a config in www so we can update any specific target areas that were changed to prevent unnecessary noise.
  - CircleCI will use a callback after it's finished the test and push the `backstop_data` to a server (AWS? Similar to style CDN?) so we can reference the visual results
  - CircleCI will add the URL to the results via slackbot in our build channel.
  
#### Example scenario files ####
A minimal json file can be found at `/backstop_config/urls/demo.json`. 
You MUST include a label and url for each url to test. 

**Note:** Do not add a leading slash to the url property.

```json
{
  "label": "Whitepapers",
  "url": "learn/whitepapers"
}
```

#### Customizing a url scenario

Use the `extend` object to add additional parameters to your URL

Example: This will only test the header and footer on Whitepapers.
```json
  {
    "label": "Whitepapers",
    "url": "learn/whitepapers",
    "extend": {
      "selectors": [
        ".global-header",
        ".global-footer"
      ]
    }
}
```

##### To add customization to ALL scenarios in a json batch
Use the `allScenarioOptions` variable in the script for running the batch.

Exampe: for `migration.js` we set the following to remove header and footer from all URLs
and ensure we hide the feedback button on mkt-review.

```js
const allScenarioOptions = {
  removeSelectors: [
    '.global-header',
    '.global-footer'
  ],
  hideSelectors: [
    '[class^=\'us–style-manager-1buttonIframe\']'
  ]
}
```

#### Types of response ####
Backstop is using the `report: ['browser', 'CI'],` config, which returns a JSON response as well as a browser window with bitmaps for visual comparison.


## Test results ##
Test results are saved in the `/backstop_data/bitmaps_test` directory. Each set of results is grouped in a project directory. 
Individual test files are named using the path of the URL.

Visual results are found in the `/backstop_data/html_report` folder. 
It also will be launched automatically at the end of the test.

## Troubleshooting ##

**Error**: Mismatch error for Chromedriver and Chrome Browser Version:

```$bash
This version of ChromeDriver only supports Chrome version XX
  (Driver info: chromedriver=xx.xxxx.xx)
```

**Solution**:

Update Chromedriver to the latest by using brew: 

`brew cask reinstall chromedriver`
