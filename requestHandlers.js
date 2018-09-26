const exec = require("child_process").exec;

function start(){
    console.log("Request handle 'start' was called")
    let content = "empty";

    exec("ls-lah",function(err,stdout,stderr){
        content = stdout;
    });
    return content;
};
function upload(){
    console.log("Request handle 'upload' was called");
    return "Hello Upload";

};
exports.start = start;
exports.upload = upload; 