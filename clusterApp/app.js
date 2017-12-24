var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var express = require('express');
var app = express();

// require files
var routes = require('./routes/index.js');

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
// app.set("views", __dirname + "/views");
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// export app to be used by others
module.exports = app;



// // GET homepage
// app.get('/', function (req,res) {
// 	res.render('cluster');
// })

// // POST cluster name and url
// app.post('/clusterUrl', function(req, res){
// 	var cluster = req.body;
// 	clusterUrlSchema.addClusterUrl(cluster, function(err, cluster){
// 		if(err){
// 			throw err;
// 		} else {
// 		//res.json(cluster);
// 		console.log("Cluster name and URL added !");
// 		res.redirect('/');
// 		}
// 	});
// });

// // GET all of the clusterUrls I have
// app.post('/get-data', function (req, res) {
// 	clusterUrlSchema.getClusterUrls(function (err, clusterUrls) {
// 	  if (err) {
// 	    console.log(err)
// 	  } else {
// 	    res.render('cluster', {clusters: clusterUrls})
// 	  }
// 	})
// })


// // DELETE a specific cluster
// app.post('/clusterUrl/delete', function (req, res) { // *********
//   var id = req.body.id;
//   clusterUrlSchema.removeClusterUrlById(id , function (err, cluster) {
//     if (err) {
// 	    console.log(err)
// 	    console.log('ERRORRRRR')
// 	    res.send(err) // *********
// 	  } else {
// 	    res.send('cluster has been removed successfully')
// 	    console.log('cluster has been removed successfully')
// 	  }
//   })
// })

// // post/:_id
// // UPDATE a specific cluster
// app.post('/clusterUrl/update', function (req, res) { // *********
//     var id = req.body.id;
// 	var cluster = req.body;
// 	clusterUrlSchema.updateClusterById(id, cluster, {new: true}, function (err, cluster) {
// 	  if (err) {
// 	    console.log(err)
// 	    res.send(err) // *********
// 	  } else {
// 	    res.json(cluster)
// 	  }
// 	})
// })

// // Start the app
// app.listen(port, function () {
// 	console.log('Server listening on port ' + port);
// })
