/**
 * Created by Administrator on 2017/8/27 0027.
 */
require.config({
    baseUrl: "./js",
    paths:{
        "require": "../libs/require",
        "jquery": "../libs/jquery.min"
    }
});

require([
    "require",
    "jquery",
    "index"
],function(require,$){
    $(function(){
        require("index").Init();
    })
    //执行index.js的初始化操作

})