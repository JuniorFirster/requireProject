/**
 * Created by Administrator on 2017/9/2 0002.
 */
module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),
        //uglify: {
        //    options: {
        //        banner: "/*<%= pkg.name %>-<%= pkg.version %>.js <%= grunt.template.today('yyyy-mm-dd') %>*/\n"
        //    },
        //    build:{
        //        src: "js/index.js",
        //        dest: "build/<%= pkg.name %>-<%= pkg.version %>.js.min.js"
        //    }
        //}
        requirejs: {
            complie: {
                options: {
                    baseUrl: "./",
                    mainConfigFile: "./js/main.js",
                    name: "main",
                    out: "output.js"
                }
            }
        },
        csscat: {
            css: {
                src: ["*.css"]
            }
        }

    })

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-css");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("default",['uglify']);
}