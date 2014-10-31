//mh meadowlark learning project 
// testing github - add a few more words - one more change here

//DOES NOT WORK
//import oldworld from 'oldworld.js';
//var fortunes = oldworld;

var express = require('express');
var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars')
		.create( {defaultLayout:'main'} );
		app.engine('handlebars', handlebars.engine);  //different?
		app.set('view engine', 'handlebars');        //same as recommended

var fortunes = [
    "A bad peace is better than a good war.  ",
    "A bad penny always turns up.  ",
    "A bad person is capable of doing anything bad (lit., what’s in the cards). Vos in der kort.", 
    "A blow is forgotten; a spoken word lingers on. A klap fargait, a vort bashtait.",
	"A boil is fine as long as it’s under someone else’s arm.",
    "A broken spirit is hard to heal.  ",
    "A child’s tears reach the heavens. A kind’s treren reissen himlen.",
    "A child’s wisdom is also wisdom.  ",
    "Words should be weighed, not counted.",
    "If his word were a stick, you couldn't lean on it.",
    "If his word were a bridge, I'd be afraid to cross it.",
    "No one sees the hump on his own back.",
    "Everyone has his own burden.",
    "Troubles are to man what rust is to iron."
 	]; 

 

app.set('port', process.env.PORT || 3000);

//why this?   from p. 26
app.use(express.static( __dirname + '/public'));


//home
app.get('/', function(req, res){
		 
		res.render('home');
});

//about
app.get('/about', function(req, res){
		var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
		res.render('about', {fortune: randomFortune });
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

