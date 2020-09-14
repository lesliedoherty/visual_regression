#!/usr/bin/env node

require('module-alias/register')
require('dotenv').config()

const { Command } = require('commander')
const actions = require('@lib/actions')

const program = new Command()
program.version('0.1.0')

/**
 * Define the commands in the `scenario` namespace
 *
 * @param string[] subCommands
 */
function makeScenarioCommands(subCommands) {
  const root = new Command('scenario')

  subCommands.forEach(subCommand => {
    root
      .command(`${subCommand} <scenario> [test-domain] [reference-domain]`)
      .option('-p, --project <id>', 'The project ID')
      .action(actions.scenario[subCommand])
  })

  return root
}

/**
 * Define the commands in the `url` namespace
 *
 * @param string[] subCommands
 */
function makeUrlCommands(subCommands) {
  const root = new Command('url')

  subCommands.forEach(subCommand => {
    root
      .command(`${subCommand} <test-url> <reference-url>`)
      .option('-p, --project <id>', 'The project ID')
      .option('-l, --label <name>', 'The test label', '')
      .action(actions.url[subCommand])
  })

  return root
}

// Define the available commands
const commands = ['approve', 'reference', 'report', 'test']
program.addCommand(makeScenarioCommands(commands))
program.addCommand(makeUrlCommands(commands))

program.parse(process.argv)
