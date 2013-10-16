// Generated on 2013-09-12 using generator-webapp 0.4.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  var path = require('path');

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'default'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      recess: {
        files: ['<%= yeoman.app %>/css/{,*/}*.less'],
        tasks: ['recess']
      },
      handlebars: {
        files: ['<%= yeoman.app %>/scripts/templates/{,*/}*.hbs'],
        tasks: ['handlebars']
      },
      styles: {
        files: ['<%= yeoman.app %>/css/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/js/{,*/}*.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '<%= yeoman.app %>/scripts/templates/{,*/}*.js',
          '{.tmp,<%= yeoman.app %>}/css/{,*/}*.css',
          '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9008,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            yeomanConfig.app
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            'test',
            yeomanConfig.app,
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: yeomanConfig.dist
        }
      }
    },
    clean: {
      options: {
        force: true
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/{,*/}*.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/js/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    jasmine: {
      all: {
        src: ['<%= yeoman.app %>/scripts/namespace.js',
              '<%= yeoman.app %>/scripts/templates/generated/templates.js',
              '<%= yeoman.app %>/scripts/routers/index.js',
              '<%= yeoman.app %>/scripts/models/page.js',
              '<%= yeoman.app %>/scripts/views/navbar.view.js',
              '<%= yeoman.app %>/scripts/views/intro.view.js',
              '<%= yeoman.app %>/scripts/views/viewbase.view.js',
              '<%= yeoman.app %>/scripts/views/main.view.js',
              '<%= yeoman.app %>/scripts/views/cloudcall.view.js',
              '<%= yeoman.app %>/scripts/views/stats.view.js',
              '<%= yeoman.app %>/scripts/views/nodepage.view.js',
              '<%= yeoman.app %>/scripts/views/databrowser.view.js',
              '<%= yeoman.app %>/scripts/views/weather.view.js',
              '<%= yeoman.app %>/scripts/views/integration.view.js',
              '<%= yeoman.app %>/scripts/init.js'
        ],
        options: {
          vendor: ['<%= yeoman.app %>/js/vendor/modernizr-2.6.2.min.js',
                   '<%= yeoman.app %>/js/helper.js',
                   '<%= yeoman.app %>/js/plugins.js',
                   '<%= yeoman.app %>/js/effeckt.js',
                   '<%= yeoman.app %>/bower_components/jquery/jquery.js',
                   '<%= yeoman.app %>/bower_components/underscore/underscore.js',
                   '<%= yeoman.app %>/bower_components/handlebars/handlebars.runtime.js',
                   '<%= yeoman.app %>/bower_components/backbone/backbone.js',
                   '<%= yeoman.app %>/bower_components/bootstrap/dist/js/bootstrap.js'
          ],
          helpers: ['test/mock/fh-init.js'],
          specs: 'test/spec/{,*/}*.js'
        }
      }
    },
    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
          '<%= yeoman.app %>/css/main.css': ['<%= yeoman.app %>/css/main.less'],
          '<%= yeoman.app %>/css/app.css': ['<%= yeoman.app %>/css/app.less']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'App.Templates',
          processName: function(filePath) {
            var fileName = path.basename(filePath);
            return fileName.split('.')[0];
          }
        },
        files: {
          '<%= yeoman.app %>/scripts/templates/generated/templates.js': ['<%= yeoman.app %>/scripts/templates/source/{,*/}*.hbs']
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
            dist: {}
        },*/
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
            dist: {}
        },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/js/{,*/}*.js'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.app %>/index.html'
    },
    usemin: {
      options: {
        dirs: ['<%= yeoman.dist %>']
      },
      html: ['<%= yeoman.dist %>/{,*/}*.html']
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/img',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },
    cssmin: {
      // This task is pre-configured if you do not wish to use Usemin
      // blocks for your CSS. By default, the Usemin block from your
      // `index.html` will take care of minification, e.g.
      //
      //     <!-- build:css({.tmp,app}) styles/main.css -->
      //
      //dist: {
      //  files: {
      //    '<%= yeoman.dist %>/css/main.css': [
      //      '.tmp/css/{,*/}*.css'
      //    ]
      //  }
      //}
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'img/{,*/}*.{webp,gif}',
            'fonts/{,*/}*.*'
          ]
        }]
      },
      styles: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/font/',
          dest: '<%= yeoman.app %>/fonts/font-awesome',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/fonts/',
          dest: '<%= yeoman.app %>/fonts/glyphicons',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          dest: '.tmp/css/',
          src: '{,*/}*.css'
        }]
      }
    },
    concurrent: {
      server: [
        'recess',
        'handlebars',
        'copy:styles'
      ],
      test: [
        'recess',
        'handlebars',
        'copy:styles'
      ],
      dist: [
        'recess',
        'handlebars',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'jasmine'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};