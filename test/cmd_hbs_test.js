'use strict';

var grunt = require('grunt');

exports.cmd_hbs = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  basic: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/basic.js');
    var expected = grunt.file.read('test/expected/basic.js');
    test.equal(actual, expected, 'stask output should equal.');

    test.done();
  }
};
