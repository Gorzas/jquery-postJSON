'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig({
    jshint: {
      devel : {
        options: {
          browser: true,
          esnext: true,
          maxcomplexity: 6,
          maxdepth: 4,
          maxlen: 80,
          maxparams: 4,
          maxstatements: 15,
          node: true,
          globals: {
            $: true,
            _: true,
            jQuery: true
          }
        },

        src: ['src/**.js']
      }
    },

    uglify : {
      devel: {
        files: {
          'dist/jquery.postjson.min.js' : [
            'src/jquery.postjson.js'
          ]
        },

        options: {
          report: 'gzip',
          sourceMap: true
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};