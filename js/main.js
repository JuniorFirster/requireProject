/**
 * Created by Administrator on 2017/8/27 0027.
 */
require.config({
    baseUrl: "./js",
    path:{
        "require": "../libs/require",
        "jquery": "../libs/jquery.min"
    }
});

require([
    "require",
    "jquery",
    "index"
],function(require,$){

})