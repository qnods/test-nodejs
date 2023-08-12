const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    // set header content type
    // text/plain is for plain text e.g. respond.write("Hello World")
    // text/html is for html line by line e.g. respond.write("<h1>Pokemon World</h1>")
    res.setHeader('Content-Type', 'text/html'); // first step - define header

    let path = './views/';

    switch(req.url){
        case '/':
            path+="index.html";
            res.statusCode = 200;
            break;
        case '/about-oak':
            path+="about.html";
            res.statusCode = 200;
            break;
        // example of redirect case
        case '/about-pokemon':
            res.statusCode = 301;
            res.setHeader('Location', './about-oak');
            res.end();
            break;
        default:
            path+="404.html";
            res.statusCode = 405;
            break;
    }

    // send an html file
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000");
})

