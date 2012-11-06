
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');

var app = express();

function dir(relative){
    return path.join(__dirname, relative);
}

app.configure(function(){

    app.set('port', process.env.PORT || 3000);
    app.set('views', dir('pages'));
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

    app.use(express.static(dir('client')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', function(request, response){
    response.render('index');
});
var dashboards = dir('data/dashboards/');
app.get('/data/dashboards/', function(request, response){
    response.send(fs.readdirSync(dashboards));
});
app.get('/data/dashboards/:id', function(request, response){
    response.send(fs.readFileSync(path.join(dashboards, request.params.id)));
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
