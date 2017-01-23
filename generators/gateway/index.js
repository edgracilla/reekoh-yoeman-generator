'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const async = require('async')

module.exports = class extends Generator {

  prompting () {
    if (!this.options.fromRoot) {
      this.log(yosay(
        `Welcome to the premium ${chalk.red('generator-demo-reekoh')} generator!`
      ))
    }
  }

  writing (a, b, c) {
    let self = this

    async.waterfall([
      (done) => {
         self.fs.copy(
          self.templatePath('app.js'),
          self.destinationPath('app.js'))

        self.fs.copy(
          self.templatePath('package.json'),
          self.destinationPath('package.json'))

        done()
      },
    ], (err) => {
      if (err) return console.log(err)
      this.installDependencies()
    })
  }
};
