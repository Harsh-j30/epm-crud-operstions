const http = require("http");


const server=http.createServer((req,res)=>{
    if(req.method==='GET'&& req.url==='/harsh')
    {
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("Hello Harsh");
    }
    else
    {
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("Not Found");
    }
});




server.listen(3000,()=>{
    console.log("Server is Running On http://localhost:3000");
})