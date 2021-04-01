const http = require('http');
const fs = require('fs');
const url = require('url');
const folder = './data/';


function templateHTML(title, list, body){
    return `
        <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                ${body}
            </body>
        </html>
    `;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    

    if(pathname === '/'){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            if(queryData.id === undefined){
                var title = "welcome"
                var description = "Hello Node.js"
            }else{
                var title = queryData.id;
            }
            fs.readdir(folder, (err, files) => {   
                var list = '<ul>';
                    for(var i = 0; i<files.length; i++){
                        list = list + `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`
                    }
                list = list + '</ul>'
                var template = templateHTML(title, list, `<h2>${title}</h2>${description}`)
                response.writeHead(200);
                response.end(template);
                
            })
        });
        
    } else{
        response.writeHead(404);
        response.end('404 Not Found')
    }
});
app.listen(3000);