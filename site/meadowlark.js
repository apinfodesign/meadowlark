//mh meadowlark learning project 
  
var express = require('express');
var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars')
		.create( {defaultLayout:'main'} );
		app.engine('handlebars', handlebars.engine);  //different?
		app.set('view engine', 'handlebars');        //same as recommended

var fortune = require('./lib/fortune.js');  //include array of fortunes or curses


function getWeatherData(){
    return{
    	locations:[
    		{
    			name: 'Portland',
    			forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
    			iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
    			weather: 'Overcast',
    			temp: '54.1 F (12.3 C)',
    		},
    		{
    			name: 'Bend',
    			forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
    			iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
    			weather: 'Partly Cloudy',
    			temp: '55 F (12.8 C)',
	   		},
    		{
    			name: 'Manzanita',
    			forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
    			iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
    			weather: 'Rain',
    			temp: '55 F (12.8 C)',
    		},
    	], 
    };
};





app.set('port', process.env.PORT || 3000);   //listen on port 3000

//why this?   from p. 26
app.use(express.static( __dirname + '/public'));

//added per p. 42 for continuous testing
app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' && 
	req.query.test === '1';
	next();
	});  //followed by routes

//for weather partial
app.use(function(req, res, next){
	if(!res.locals.partials) res.locals.partials = {};
	res.locals.partials.weather = getWeatherData();
	next();
});


/////////////////////////////////////////////////////////////////////////////
//home
app.get('/', function(req, res){
		res.render('home');
});

//about
app.get('/about', function(req, res){
		//var randomFortune = fortune[Math.floor(Math.random() * fortune.length)]; 
		// MOVED TO GETFORTUNE() //
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


//MH info page
app.get('/info', function(req, res){
		res.render('info');
});

app.get('/surprise', function(req, res){
		res.render('surprise');
});


app.get('/contact', function(req, res){
		res.render('contact');
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

