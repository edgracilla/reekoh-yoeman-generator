'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

const APP_NAME = 'demo-reekoh'

module.exports = class extends Generator {
  initializing () {
    let self = this

    self.log(yosay(
      'Welcome to the premium ' + chalk.red('generator-demo-reekoh') + ' generator!'
    ))

    self.prompt([
      {
        type: 'list',
        name: 'seed',
        message: 'Select plugin seed to install:',
        choices: [
          'Connector',
          'Channel',
          'Device Sync',
          'Exception Logger',
          'Gateway',
          'Logger',
          'Service',
          'Storage',
          'Stream'
        ]
      }
    ]).then(function (answers) {
      console.log(answers)

      switch (answers.seed) {
        case 'Channel':
          self.composeWith(`${APP_NAME}:channel`,
            { fromRoot: true}, { local: require.resolve('../channel')})
          break

        case 'Device Sync':
          self.composeWith(`${APP_NAME}:device-sync`,
            { fromRoot: true}, { local: require.resolve('../device-sync')})
          break

        case 'Gateway':
          self.composeWith(`${APP_NAME}:gateway`,
            { fromRoot: true}, { local: require.resolve('../gateway')})

          break

        case 'Storage':
          self.composeWith(`${APP_NAME}:storage`,
            { fromRoot: true}, { local: require.resolve('../storage')})
          break

        default:
          console.log('Cant find the sub-generator for the selected plugin seed.')
      }
    })
  }
}
