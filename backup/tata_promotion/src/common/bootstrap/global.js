/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */


/**
 * 获取时间
 * @param formatDate（全部年月日时间）formatMonth（月+日）formatTime（时间）
 * @returns {*}
 */
global.formatDate = function(time) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return date.getFullYear() + '-' + month + '-' + currentDate + ' ' + hh + ':' + mm + ':' + ss;
};
global.formatMonth = function(time) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return month + '-' + currentDate;
};
global.formatMonthpoint = function(time) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return month + '.' + currentDate;
};
global.formatTime = function(time) {
    var date = new Date(time);
    var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return hh + ':' + mm;
};


/**
 * 获取tata数据库配置
 * @param db 数据库名 sting
 * 调用的时候,getatadb(‘数据库名’);其中数据库名称在config-tataDB中设置
 * @returns {*}
 */
global.gettatadb = function(db){
    let tatadb = think.config('tatadb',undefined,'common');
    return tatadb[db];

};


/*
去重
 */
global.finddiff = function (largearr,midarr,) {
    let arr_diff = [];
    for(var i=0; i < largearr.length; i++){
        var flag = true;
        for(var j=0; j < midarr.length; j++){
            if(largearr[i] == midarr[j])
                flag = false;
        }
        if(flag)
            arr_diff.push(largearr[i]);
    }
    console.log('剩余的不重复数据',arr_diff);
    return arr_diff
};

