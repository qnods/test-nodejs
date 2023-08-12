const http = require('http');

const server = http.createServer((request, respond) => {
    console.log(request.url, request.method);


    // set header content type
    // text/plain is for plain text e.g. respond.write("Hello World")
    // text/html is for html line by line e.g. respond.write("<h1>Pokemon World</h1>")
    respond.setHeader('Content-Type', 'text/html'); // first step - define header

    // second step - fill up content
    respond.write("<h1>Pokemon World</h1>");
    respond.write("<p>Hello Trainer</p>");  


    respond.end() // third step - end , that means respond is sent to browser

});

server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000")
})

