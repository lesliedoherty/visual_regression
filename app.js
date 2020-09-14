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
 * @param root Commander
 * @param string[] subCommands
 */
function applyScenarioCommands (root, subCommands) {
  subCommands.forEach(subCommand => {
    root
      .command(`scenario:${subCommand} <scenario> [test-domain] [reference-domain]`)
      .option('-p, --project <id>', 'The project ID')
      .action(actions.scenario[subCommand])
  })

  return root
}

/**
 * Define the commands in the `url` namespace
 *
 * @param root Commander
 * @param string[] subCommands
 */
function applyUrlCommands (root, subCommands) {
  subCommands.forEach(subCommand => {
    root
      .command(`url:${subCommand} <test-url> <reference-url>`)
      .option('-p, --project <id>', 'The project ID')
      .option('-l, --label <name>', 'The test label', '')
      .action(actions.url[subCommand])
  })

  return root
}

// Define the available commands
const commands = ['approve', 'reference', 'report', 'test']

applyScenarioCommands(program, commands)
applyUrlCommands(program, commands)

program.parse(process.argv)
