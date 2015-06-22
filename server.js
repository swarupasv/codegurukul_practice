var express = require('express');//Node_module
var app = express();
app.set('views',__dirname +'/server/views');
console.log("this is path"+__dirname);
app.set('view engine','jade');
app.use(express.static('public'));
//routes
app.get('/',function(req,res)
{
	res.render('index');
});
//req=request => http request object
//res=response => http response object
app.listen(3020);
console.log('Express server is listening at 3020');