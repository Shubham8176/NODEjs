// const http = require('http');

// const myserver = http.createServer((req, res) => {

//     if (req.url == '/home') {
//         res.end('abes engineering college');
//     }

//     else if (req.url == '/aboutus') {
//         res.end('cse student');
//     }

//     else if (req.url == '/contactus') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<img src="https://tse4.mm.bing.net/th/id/OIP.YRLnFB2_z8EqsilbfSMoQAHaD9?pid=Api&P=0&h=180" />');
//     }

//     else {
//         res.end('404 page is not found');
//     }
// });

// myserver.listen(8000, () => console.log('server is running'));
const fs=require('fs');

//fs.writeFile("./a.txt","abes college is", ()=>{});
// fs.readFile("./a.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// });
// fs.writeFile("./b.txt","abes enginneering college",(err,)=>{
//     if(err)
//         console.log("error",err);
//     else
//         console.log("successfully created");
// });
// fs.appendFileSync("./a.txt",`good`);
fs.appendFile("./a.txt","abcd",()=>{});
