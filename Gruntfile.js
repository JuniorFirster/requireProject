/**
 * Created by Administrator on 2017/9/2 0002.
 */
module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: "/*<%= pkg.name %>-<%= pkg.version %>.js <%= grunt.template.today('yyyy-mm-dd') %>*/\n"
            },
            build:{
                src: "js/index.js",
                dest: "build/<%= pkg.name %>-<%= pkg.version %>.js.min.js"
            }
        }

    })


    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default",['uglify']);
}