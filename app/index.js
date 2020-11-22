const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.path = this.options.p || this.options.path || './';
  }


  async asyncInit() {
    this.log('Init repository');

    const answers = await this.prompt({
      type: 'input',
      name: 'name',
      message: 'Project name',
      default: 'New project'
    });

    this.name = answers;
  }


  paths() {
    // console.log(this.name)
    // console.log(this.templatePath('main'))
    // console.log(this.destinationRoot(this.path))
    // returns '~/projects/index.js'

    this.fs.copy(
      this.templatePath('main/**/*'),
      this.destinationPath(this.path)
    );

  }

  npm() {
    this.destinationRoot(this.path)
    this.npmInstall();
  }
};