module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      festival: {
        files: {
          'css/festival.min.css': '_sass/festival/app.scss'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      tribtalk: {
        files: {
          'css/tribtalk.min.css': '_sass/tribtalk/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      tribune: {
        files: {
          'css/tribune.min.css': '_sass/tribune/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      styleguide: {
        files: {
          'css/styleguide.min.css': '_sass/styleguide/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      }
    },
    bgShell: {
      jekyllBuild : {
        cmd: 'jekyll build',
        bg: false
      },
      // `jekyllWatch` is not used, but here for reference
      jekyllWatch : {
        cmd: 'jekyll build --watch',
        bg: true
      },
      jekyllDev : {
        cmd: "jekyll serve --baseurl '' --watch",
        bg: true
      }
    },
    watch: {
      options: {
        livereload: true
      },
      festival: {
        files: '_sass/festival/*.s?ss',
        tasks: ['sass:festival']
      },
      tribtalk: {
        files: '_sass/tribtalk/*.s?ss',
        tasks: ['sass:tribtalk']
      },
      styleguide: {
        files: '_sass/styleguide/*.s?ss',
        tasks: ['sass:styleguide']
      },
      jekyll: {
        files: [
          '*.html',
          '_includes/*.html',
          '_layouts/*.html'
        ],
        // just get livereload to trigger
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-bg-shell');

  grunt.registerTask('dev', ['sass', 'bgShell:jekyllDev', 'watch']);
  grunt.registerTask('build', ['sass', 'bgShell:jekyllBuild']);
  grunt.registerTask('default', ['build']);
};
