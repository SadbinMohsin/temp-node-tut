const http=require('http')


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to the new page');
    }
    if(req.url==='/about'){
        res.end('Here is ore short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">back home</a>

    `)
})

server.listen(5000)