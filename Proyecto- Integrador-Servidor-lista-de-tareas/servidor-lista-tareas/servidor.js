const http = require('http');
const listaTareas = require('./listTasks');
const chalk = require('chalk');
const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Oringin', '*');
    if(req.method === 'GET' && req.url === '/lista'){
        res.statusCode = 200;
        res.end(JSON.stringify(listaTareas))
    }else{
        res.statusCode = 404;
        res.end('Not Fount');
    }
});

server.listen(port, host, () => {
    console.log(`servidor funcionando en `, chalk.green(`http://${host}:${port}/lista`));
})