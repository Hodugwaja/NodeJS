const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const folder = './data/';

const hostNum = 3001;
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
                <a href = "/create">create</a>
                ${body}
            </body>
        </html>
    `;
}

function templateList(files){   
    var list = '<ul>';
        for(var i = 0; i<files.length; i++){
            list = list + `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`
        }
    list = list + '</ul>'
    return list;
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
                var list = templateList(files)
                var template = templateHTML(title, list, `<h2>${title}</h2>${description}`)
                response.writeHead(200);
                response.end(template);
                
            })
        });
        
    } else if(pathname === '/create'){
        var title = "welcome"
        var description = "Hello Node.js"
        
        fs.readdir(folder, (err, files) => {   
            var list = templateList(files)
            var template = templateHTML(title, list, `
                <form action="http://localhost:${hostNum}/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                        <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
            `)
            response.writeHead(200);
            response.end(template);
            
        })
    } else if(pathname === '/create_process'){
        var body = '';

        request.on('data', function (data) {
            body += data;
             if (body.length > 1e6) request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            console.log(post);
        });   
        response.writeHead(200);
        response.end('success');
    }else{
        response.writeHead(404);
        response.end('404 Not Found')
    }
});
app.listen(hostNum);