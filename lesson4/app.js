const http = require('node:http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
         res.end('welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>Yawa<\h1>`)
res.write('hello')
res.end()
})

server.listen(3000, ()=>{
    console.log(`server listening on port 3000`);
})