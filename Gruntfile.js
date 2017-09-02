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
            },
            concat: {
                css: {
                    src: ["css/*.css"],
                    dest: "./build/output.css"
                }
            },
            cssmin: {
                buildCss: {
                    src: "./build/output.css",
                    dest: "./build/output.min.js"
                }
            }
        },
        uglify: {
            build: {
                src: "./build/output.js",
                dest: "./build/output.min.js"
            }
        }

    })

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-css");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("default",["concat","cssmin","requirejs","uglify"]);
}