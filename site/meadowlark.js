//mh meadowlark learning project 
  
var express = require('express');
var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars')
		.create( {defaultLayout:'main'} );
		app.engine('handlebars', handlebars.engine);  //different?
		app.set('view engine', 'handlebars');        //same as recommended

var fortune = require('./lib/fortune.js');  //include array of fortunes or curses

app.set('port', process.env.PORT || 3000);

//why this?   from p. 26
app.use(express.static( __dirname + '/public'));

//added per p. 42 for continuous testing
app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' && 
	req.query.test === '1';
	next();
	});  //followed by routes

//home
app.get('/', function(req, res){
		res.render('home');
});

//about
app.get('/about', function(req, res){
		//var randomFortune = fortune[Math.floor(Math.random() * fortune.length)];
		res.render('about', {
			fortune: fortune.getFortune(), pageTestScript: '/qa/tests-about.js' 
		});
});

//hood-river page
app.get('/tours/hood-river', function(req, res){
		res.render('tours/hood-river');
});

//request group rate page
app.get('/tours/request-group-rate', function(req, res){
		res.render('tours/request-group-rate');
});




//404 catch all handler (middleware)
app.use(function(req, res, next){
   res.status(404);
   res.render('404');
});

//500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + 
		app.get('port') + ';  press Ctrl-C to terminate.');
});

