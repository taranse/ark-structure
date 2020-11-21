const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    console.log(this);
  }
};