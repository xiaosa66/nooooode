const exec = require("child_process").exec;

function start(response){
    console.log("Request handle 'start' was called")
    exec("ls -lah",function (error,stdout,stderr) {
        response.writeHead(200,{"content-Type":"text/plain"});
        response.write(stdout);
        response.end();
      })
};
function upload(response){
    console.log("Request handle 'upload' was called");
    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("hello upload");
    response.end();
};
exports.start = start;
exports.upload = upload; 