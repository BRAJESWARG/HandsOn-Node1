const http = require("http"); //import http from 'http'

http.createServer((req,res) => {
    res.write("hello world !!");
    res.end();
}).listen(8000);
