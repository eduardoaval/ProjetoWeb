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

        case '/contrast':
        fs.readFile("src/Home/indexcontrast.html", (err, data) => {
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

        case '/user':
        fs.readFile("src/User/index.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/user/dark':
        fs.readFile("src/User/indexdark.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/user/contrast':
        fs.readFile("src/User/indexcontrast.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/login':
        fs.readFile("src/Login/index.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/login/dark':
        fs.readFile("src/Login/indexdark.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("<h1> 404 File Not Found </h1>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        }); break;

        case '/login/contrast':
        fs.readFile("src/Login/indexcontrast.html", (err, data) => {
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

        case '/css/contrast_style.css':
            fs.readFile("src/Home/css/contrast_style.css", (err, data) => {
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

        case '/movie/css/moviestyledark.css':
            fs.readFile("src/Details/css/moviestyledark.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;

        case '/css/userstyle.css':
            fs.readFile("src/User/css/userstyle.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;

        case '/user/css/dark_style.css':
        fs.readFile("src/User/css/dark_style.css", (err, data) => {
            if (err) {
                res.statusCode = '204'
                return res.end();
            }
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(data);
            return res.end();
        })
        break;

        case '/user/css/contrast_style.css':
            fs.readFile("src/User/css/contrast_style.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;

        case '/css/loginlight.css':
            fs.readFile("src/Login/css/loginlight.css", (err, data) => {
                if (err) {
                    res.statusCode = '204'
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                return res.end();
            })
            break;
        
        case '/login/css/loginContrast.css':
        fs.readFile("src/Login/css/loginContrast.css", (err, data) => {
            if (err) {
                res.statusCode = '204'
                return res.end();
            }
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(data);
            return res.end();
        })
        break;

        case '/login/css/loginDark.css':
        fs.readFile("src/Login/css/loginDark.css", (err, data) => {
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
