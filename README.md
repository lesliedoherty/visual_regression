# Tableau Visual Regression Testing
A node application running [BackstopJS](https://github.com/garris/BackstopJS).

## Installation ##
Backstop uses headless Chrome for testing. Assuming you have an up-to-date version of Chrome installed, you should be good to go.

```bash
$ nvm use
$ yarn install
```

## Prerequisits

1.  ChromeDriver installed and added to the $PATH
```bash
brew cask install chromedriver
```

## Usage ##

```bash
$ cd /path/to/tableau-visual-regression
$ nvm use
```

Once you've run the above commands, you can run a test using the following commands:

```bash
$ yarn test -p local // runs tests on local domain using scenarios.json
```

### In Progress
Currently working on the following:
- Pass environment through CI and capture in app.js.
- Allow argument for scenarios. Ex: paragraph, content-type, custom, etc.
- Decide level of granularity for urls (ex: paragraphs - only test the dom for the paragraph main area)
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

#### Types of response ####
Backstop is using the `report: ['browser', 'CI'],` config, which returns a JSON response as well as a browser window with bitmaps for visual comparison.


## Test results ##
Test results are saved in the `/backstop_dat/bitmaps_test` directory. Each set of results is grouped in a timestamped directory. Individual test files are named using the path of the URL.

#### Troubleshooting

**Error**: Mismatch error for Chromedriver and Chrome Browser Version:

```$bash
This version of ChromeDriver only supports Chrome version XX
  (Driver info: chromedriver=xx.xxxx.xx)
```

**Solution**:

Update Chromedriver to the latest by using brew: 

`brew cask reinstall chromedriver`
