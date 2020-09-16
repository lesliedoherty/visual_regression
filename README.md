# Tableau Visual Regression Testing
A node application running [BackstopJS](https://github.com/garris/BackstopJS).

Installation and set up instructions follow.

Please see the [User Manual in Notion](https://www.notion.so/tableaumkt/User-Manual-BackstopJS-Tableau-Node-App-26c2f402f8144c598ecb5f49d2d36db6) for technical discussion and workflows.

## Installation ##
1. Clone this repo in your usual favorite directory.
2. Clone the [tableau_vr_data](https://github.com/tableau-mkt/tableau_vr_data) repo in the same directory. These should sit side-by-side.

```bash
├── tableau_visual_regression
│   ├── app.js
│   ├── helpers/
│   ├── scenarios/
│   ├── lib/
│   ├── etc..
├── tableau_vr_data
│   ├── bitmaps_reference/
│   ├── bitmaps_test/
│   ├── ci_report/
│   ├── html_report
```


To set up the app:
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
Backstop uses headless Chrome for testing. Assuming you have an up-to-date version of Chrome installed, you should be good to go.

## Environment
- Set your local vairables in `.env`
(See .env-example to rename and replace values)

## Troubleshooting ##

**Error**: Mismatch error for Chromedriver and Chrome Browser Version:

```$bash
This version of ChromeDriver only supports Chrome version XX
  (Driver info: chromedriver=xx.xxxx.xx)
```

**Solution**:

Update Chromedriver to the latest by using brew: 

`brew cask reinstall chromedriver`
