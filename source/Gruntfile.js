module.exports = function(grunt) {

    grunt.initConfig({
      less: {
        development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/stylePref.css": "less/style.less"
                }
        }
      },
      autoprefixer: {
        options: {
          browsers: ['last 5 versions']
        },

        dist: {
                files: {
                    "css/style.css": "css/stylePref.css"
                }
        }
      },
      /*css*/
      cssmin: {
        build: {
            files: {
                'production/css/style.min.css': ['css/reset.css','css/style.css'],
            }
        }
      },
      imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'production/images/'
            }]
        }
      },

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['less','autoprefixer','cssmin','imagemin']);


};
