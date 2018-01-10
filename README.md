
## install
```
npm install mydly-request --save
```

## request
```
var req = require('mydly-request');
req.send({
    url:url,
    method:method, //default 'get'
    data:data,
    header:header,
    isCurl:isCurl   //default false
},function(err,res,body){

})
```
