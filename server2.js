const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url
    const method = req.method


    if (url === '/') {

        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        console.log(req.url)
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log(message)
            console.log("dosth")
            fs.writeFileSync('message.txt', message)             
                res.statusCode = 302
                res.setHeader('Location', "/")
              return res.end()
                

            }) 

    }
    
      
    
    

    res.setHeader('Content-type','text/html')
    res.write('<html>')
     res.write('<head><title>My first page</title></head>')
     res.write('<body><h1>Hello from my Node.js Server</h1></body>')
     res.write('</html>')
     res.end() 
     /*
     else if (req.url === '/about') {
         res.write('<html>');
         res.write('<head><title>About Us</title></head>');
         res.write('<body><h1>Welcome to About Us page</h1></body>');
         res.write('</html>');
         res.end();
     } else if (req.url === '/node') {
         res.write('<html>');
         res.write('<head><title>Node.js Project</title></head>');
         res.write('<body><h1>Welcome to my Node.js project</h1></body>');
         res.write('</html>');
         res.end();
     } else {
         res.write('<html>');
         res.write('<head><title>404 Not Found</title></head>');
         res.write('<body><h1>404 Not Found</h1></body>');
         res.write('</html>');
         res.end();
     }
     */
});

server.listen(4000);