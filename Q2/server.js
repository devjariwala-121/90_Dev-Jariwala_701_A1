var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
    let filepath = "./" + (req.url === "/" ? "index.html" : req.url);
    let ext = path.extname(filepath);
    let contentType = "text/html";

    if(ext == ".js")
    contentType = "application/javascript"
    
    fs.readFile(filepath,function(err,data){
        if(err)
        {
            res.writeHead(404);
            res.end("File not Found");
        }
        else
        {
            res.writeHead(200,{"content-type": contentType});
            res.end(data);
        }
    })
}).listen(8001);

console.log("Server is running at https://localhost:8001");