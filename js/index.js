/**
 * Created by Administrator on 2017/8/27 0027.
 */
define(
    [
        "require",
        "jquery",
        "config/global",
        "config/filter",
        "config/route",
    ],
    function (require, $) {

        var Filter = require("config/filter");
        var Global = require("config/global");
        var Route = require("config/route");

        var IndexOperation = {
            //初始化操作函数
            Init:function(){
                console.log("执行初始化操作");
                console.log()
            }
        }

        return IndexOperation
    }
)