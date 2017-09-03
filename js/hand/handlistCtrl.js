/**
 * Created by Administrator on 2017/9/2 0002.
 */
define([
    "require",
    "jquery",
    "config/filter",
    "config/global",
    "config/route"
],function(require,$){
    //这里调取过滤、路由、全局参数
    var Filter = require("config/filter");
    var Global = require("config/global");
    var Route = require("config/route");

    var HandListObj = {
        //handlist页面js操作初始化
        Init:function(){
            console.log("执行handle页面js");
        }
    }

    return HandListObj;

})