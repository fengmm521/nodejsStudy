// var http = require("http");
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<head><meta charset="utf-8"/></head>');
//     res.end("你好！\n");
// }).listen(1337,"127.0.0.1");
// console.log('server run at:127.0.0.1:1337')
var cbfunc = function(tmpstr){
    console.log(tmpstr);
};


var startfunc = function(delayfc){
    console.log('ref is run ...');
    delayfc.ref();
};


var timefunc = setInterval(cbfunc,1000,'interval run ...');

// timefunc.ref()

var stopfunc = function(clfunc){
    console.log('is time out...');
    clfunc.unref();
    // clearInterval(clfunc)
    // var toutfc = setTimeout(startfunc,3000,clfunc)
};

setTimeout(stopfunc,5000,timefunc);

setTimeout(startfunc,10000,timefunc);

var testMode = require('./testMode.js')


console.log(testMode.testVar)


if (module == require.main) {
    console.log('is main module ')
}else{
    console.log('is not main module')
}

console.log(require.resolve('./testMode.js'))
console.log(require.cache)

console.log(__filename)
console.log(__dirname)


// console.log(timefunc)