module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        connect: {
            
            options:{
                livereload: true
            },
            
            server: {
                options: {
                    port: 9005,
                    open: true,
                    hostname: 'localhost',
                    base: ['.tmp', '.']
                },
            },
        },


        clean: {
            tmp: {
                src: ['.tmp']
            }
        },

        watch: {
            options: {
                livereload: true
            },
            ts: {
                files: ['app/**/*.ts'],
                tasks: ['ts']
            },
            static: {
                files: ['**/*.html']
            }
        },

        ts: {
            src: {
                tsconfig: true
            }
        },
    });

    grunt.registerTask('serve', ['clean', 'ts', 'connect', 'watch']);
}