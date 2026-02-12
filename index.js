const http=require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');
const myserver=http.createServer((req, res)=>{
    if(req.url=='/home'){
        res.end('abes engineering college');
    }
    else if(req.url=='/aboutus'){
        res.end('cse student');
    }
    else if(req.url=='/contactus'){
        res.end('9794200186');}
    else{
        res.end('404 page is not found');
    }
})
myserver.listenerCount(8000,()=> console.log('server is run'));