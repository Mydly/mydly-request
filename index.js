const request = require('request');
const querystring = require('querystring');

/**
 * 
 * @param {*} options 
 *          url,method,data,header,isCurl=false,isJson=true
 * @param {*} callback 
 */
var send = function (options,callback){

    options.method = options.method ? options.method : 'GET';
    options.method = options.method.toUpperCase();

    if( (options.method == 'GET') && options.data ){
        options.url += (options.url.indexOf("?") >= 0 ? "&" : "?" ) + querystring.stringify(options.data) 
    }

    var param = {};
    if(options.method == 'PUT'){
        param = {form:JSON.stringify(options.data)};
    }else if( options.method == 'POST'){
        param = {form:options.data}
    }
    options = Object.assign({},options,param,options.header ? {headers:options.header} : {});
    delete options.uri;
    delete options.data;
    request(options,callback || function(){});

}
exports.send = send;
