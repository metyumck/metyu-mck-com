# Matthew Mckenzie readme

Generated on 2016-03-05 using
[generator-yeogurt@1.5.2](https://github.com/larsonjj/generator-yeogurt)

## Description

Personal website for Matthew McKenzie. See it live at http://metyu-mck.com

## Technologies used

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)

Markup
- [Jade](http://jade-lang.com/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and Mocha + Chai
`gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
