const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    const u = new URL(req.url, `http://${req.headers.host}`)
    switch (u.pathname) {
//------------------------------------------------------------------------- GET
        case '/':
            fs.readFile("src/Home/index.html", (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("<h1> 404 File Not Found </h1>");
                }
                res.writeHead(200);
                res.write(data);
                return res.end();
            }); break;
        case '/dark':
        fs.readFile("src/Home/indexdark.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/movie':
        fs.readFile("src/Details/index.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/movie/dark':
        fs.readFile("src/Details/indexdark.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

//------------------------------------------------------------------------- POST
        case '/post':
            fs.readFile("indexPost.html", (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("<h1> 404 File Not Found </h1>");
                }
                res.writeHead(200);
                res.write(data);
                return res.end();
            }); break;

        case '/formPost':

            var body = '';
            req.on('data', function (data) {
                body += data;
                // 1e6 = 1*Math.pow(10,6) = 1*1000000 ~1MB
                // Para prevenir ataques ou defeitos no cliente 
                if (body.length > 1e6) req.socket.destroy();
            });
            req.on('end', function () {
                var p = new URLSearchParams(body)
                res.write("<h1> Dados no body (via POST) </h1>");
                res.write("<h2> Os dados que você enviou foram: </h2>");
                res.write("<p>" + p.get('nome') + "</p>");
                res.write("<p>" + p.get('curso') + "</p>");
                return res.end();
            });
            break
//------------------------------------------------------------------ OUTOS RECURSOS

        case '/favicon.ico':
            fs.readFile("favicon.ico", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "image/x-icon"});
                res.write(data);
                return res.end();
            })
            break;

        case '/css/homestyle.css':
            fs.readFile("src/Home/css/homestyle.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;

        case '/css/homestyledark.css':
            fs.readFile("src/Home/css/homestyledark.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;

        case '/css/moviestyle.css':
            fs.readFile("src/Details/css/moviestyle.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;
          
        default:
            res.statusCode = '404'
            res.write(`<h1> O recurso ${u.pathname} é desconhecido.</h1>`);
            res.end()
    }
}).listen(8080, () => console.log('Application is running on port 8080'));
