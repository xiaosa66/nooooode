let formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function (req,res) {
    if(req.url=='/upload' && req.method.toLowerCase()=='post'){
        let form = new formidable.Incomingform();
        form.parse(req,function (err,fields,files) {
            res.writeHead(
                200,
                {'content-type':'text/plain'});
            res.write('received upload:\n\n');
            res.end(sys.inspect({fields:fields,file:files}));            
        });
        return;
    }


res.writeHead(
    200,
    {'content-type':'text/html'});
    res.end('<formaction="/upload"enctype="multipart/form-data"'+ 'method="post">'+    '<inputtype="text"name="title"><br>'+ '<inputtype="file"name="upload"multiple="multiple"><br>'+'<inputtype="submit"value="Upload">'+ '</form>');
}).listen(8888);