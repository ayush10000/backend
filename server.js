//impoer http from 'http'
let http = require("http");
let fs = require("fs");
console.log("Starting server")
http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) =>{
        if(!err) {
            res.writeHead(200, {
                "Content-type": "text/html",
            });
            res.write(data)
            return res.end();
        }
        res.write("Error while reading file");
        return res.end();
    });
})
.listen(3003);


