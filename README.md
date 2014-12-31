# grunt-cmd-hbs [![Build Status](https://travis-ci.org/bingdian/grunt-cmd-hbs.svg?branch=master)](https://travis-ci.org/bingdian/grunt-cmd-hbs)

> Precompile Handlebars templates to cmd module.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cmd-hbs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cmd-hbs');
```

## The "cmd_hbs" task

### Overview
In your project's Gruntfile, add a section named `cmd_hbs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cmd_hbs: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  cmd_hbs: {
    files: [{
        expand: true,
        cwd: 'src/handlebars',
        dest: 'dist/handlebars',
        src: [
            '**/*.{handlebars,hbs}'
        ]
    }]
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2014-12-31   v0.1.0   First release.

