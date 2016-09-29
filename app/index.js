var path = require('path');
var chalk = require('chalk'); //不同颜色的info
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay'); //yeoman弹出框
var Reactpack = yeoman.Base.extend({
    info: function () {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    generateBasic: function () {
        this.direcotry('src', 'src');
        this.direcotry('data', 'data');
        this.copy('package.json', 'package.json') //拷贝文件
        this.copy('index.html', 'index.html');
        this.copy('README.md', "README.md");
        this.copy('webpack.config.js', 'webpack.config.js');
    },
    generateClient: function () {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./')
    },
    install: function() {
        this.installDependecies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function () {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});
module.exports = Reactpack;