var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/testingThis');
var Schema = mongoose.Schema;

var clusterUrlSchema = new mongoose.Schema ({
  name: String,
  url: String
})
var ClusterUrl = mongoose.model('ClusterUrl', clusterUrlSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  ClusterUrl.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    name: req.body.name,
    url: req.body.url
  };

  var data = new ClusterUrl(item);
  data.save();

  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  var id = req.body.id;
  var cluster = req.body;

  var query = {_id: id}
  var update = {
    name: cluster.name,
    url: cluster.url
  }

 ClusterUrl.findOneAndUpdate(query, update, {new: true}, function (err, cluster){
  if (err) {
      console.log(err)
      res.send(err) // *********
    } else {
      res.redirect('/')
    }
 })

  // var id = req.body.id;
  // ClusterUrl.findById(id, function(err, doc) {
  //   if (err) {
  //     console.error('error, no entry found');
  //   }
  //   name: req.body.name;
  //   url: req.body.url;
  //   doc.save();
  // })
  // res.redirect('/');
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  ClusterUrl.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;
