var http = require('http')
var httpserver = http.createServer()
httpserver.on('request',function(req,res){
    console.log(req.url)
    res.end()
})
httpserver.listen(1337,'127.0.0.1')