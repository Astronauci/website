//
// require the native http module, as well as director.
//
var http = require('http'),
    director = require('director'),
	plates = require('plates'),
	fs = require('fs');

var homepage = '',
output = '';	

//
// for the sake of example, lets actually define one of the
// functions that might be called from in a routing table.
//
function showAuthor() {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
  this.res.end('Carl Sagan');
}


function showCover() {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
  this.res.end('Carl Sagan');
}


function showDescription() {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
  this.res.end('Carl Sagan');
}

function showPicture() {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
  this.res.end('Carl Sagan');
}

function showBiography() {

var html = homepage; // '<div id="test">Old Value</div><span id="test2">dupa content</span>';
var data = { "text_na_front": "Tutaj leca newsy oraz do RSS" };

output = plates.bind(html, data);

  this.res.writeHead(200, { 'Content-Type': 'text/html' })
  this.res.end(output);
}

var routes = {
  '/authors': {
    on: showAuthor,
    '/kw': { on: [showCover, showDescription] },
    '/dk': { on: [showPicture, showBiography] },
    '/ko': { on: [showPicture, showBiography] },
    '/ms': { on: [showPicture, showBiography] }
  }
};

fs.readFile('html/index.html','utf8', function(err, data) {
 if (err) {
    return console.log(err);
  } else {
homepage = data;
}
  console.log(data);
});



/*
var html = homepage; // '<div id="test">Old Value</div><span id="test2">dupa content</span>';
var data = { "text_na_front": "Tutaj leca newsy oraz do RSS" };

output = plates.bind(html, data);
*/


//
// define a routing table.
//
var router = new director.http.Router(routes);

//
// setup a server and when there is a request, dispatch the
// route that was requested in the request object.
//

var server = http.createServer(function (req, res) {
  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
	
      res.end('dupa 404' + err);
    }
  });
});

//
// You can also do ad-hoc routing, similar to `journey` or `express`.
// This can be done with a string or a regexp.
//
function helloWorld() {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
  this.res.end('Carl Sagan');
}

router.get('/dupa', showCover );
router.get('/news/1', showBiography);
//router.get('/hola/', helloWorld);

//
// set the server to listen on port `8080`.
//
server.listen(3000);


