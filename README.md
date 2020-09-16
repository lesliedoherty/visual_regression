# Tableau Visual Regression Testing
A node application running [BackstopJS](https://github.com/garris/BackstopJS).

Installation and set up instructions follow. 
Please referene the [User Manual](user-manual.md) for technical information and workflows.

## Installation ##
1. Clone this repo in your usual favorite directory.
2. I like to keep the data in a different directory These should sit side-by-side.

```bash
├── visual_regression
│   ├── app.js
│   ├── helpers/
│   ├── scenarios/
│   ├── lib/
│   ├── etc..
├── vr_data
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
