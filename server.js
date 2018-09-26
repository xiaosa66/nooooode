var http = require("http");
var url = require("url");
// 启动服务器
function start(route,handle){
    function onRequest(request,response){
        console.log("request recived.");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+"received.");
        
        
        // route函数是一个console.log
        route(handle,pathname);


        response.writeHead(200,{'Content-type':"text/plain"});
        response.write("hello world");
        response.end();
    }
http.createServer(onRequest).listen(8888);
console.log("server started.");
}
exports.start = start;

