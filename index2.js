const http = require("http"); //import http from 'http'

http.createServer((req,res) => {
    res.write(JSON.stringify({id:1, name: "John"}));
    res.end();
}).listen(3000);
