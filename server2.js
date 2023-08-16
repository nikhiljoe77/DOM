const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-type', 'text/html');

    if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/about') {
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
});

server.listen(4000);