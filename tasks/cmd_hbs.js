/*
 * grunt-cmd-hbs
 * https://github.com/bingdian/grunt-cmd-hbs
 *
 * Copyright (c) 2014 bingdian
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('cmd_hbs', 'Precompile Handlebars templates to cmd module.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator: ', '
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                var Handlebars = require('handlebars'),
                    src = grunt.file.read(filepath),
                    compiled = Handlebars.precompile(src);

                // grunt.log.writeln(content);
                return compiled;
            });


            var content = 'define(function (require, exports, module) { \n var Handlebars = require(\'handlebars\');\n module.exports = Handlebars.template(' + src + ');\n});';


            // Dest path
            var destPath = f.dest + '.js';

            // Write the destination file.
            grunt.file.write(destPath, content);

            // Print a success message.
            grunt.log.writeln('File "' + destPath + '" created.');
        });
    });

};
