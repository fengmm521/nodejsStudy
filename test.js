var net = require('net')
var fs = require('fs')

var server = null;


var getConCountfc = function(err,count){
    var outstr = 'connect count is:' + count
    console.log(outstr)
    server.maxConnections = 2
    console.log('tcp mac connect count is :%d',server.maxConnections)
    // server.close()
}


var getdata = function(data){

    console.log(data.toString())

}

var out = fs.createWriteStream('./client.txt',{flags:'a'})

var clientcb = function(socket){
    console.log('connect')
    server.getConnections(getConCountfc)
    console.log(socket.address())
    socket.setEncoding('utf8')
    socket.pipe(out)
    socket.on('data',function(data){

        console.log(data.toString())
    })
    socket.on('end',function(){
        console.log('client end.')
        server.close()
        out.end()
    })
}

server = net.createServer({'allowHalfOpen':false}, clientcb);

server.on('listening',function(){

    console.log('server is start:')
    var addr = server.address()
    console.log(addr)

})

server.on('error',function(e){

    if (e.code == 'EADDRINUSE'){
        console.log('address is used.')
    }

})

server.listen(1337,'127.0.0.1')