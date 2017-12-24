var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//mongoose.connect('localhost:27017/testingThis');
mongoose.connect(process.env.MONGOLAB_URI);
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

router.post('/get-data', function(req, res, next) {
  ClusterUrl.find({})
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

  res.render('index', {alert: req.body.name + ' is added !'});
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
      res.render('index',{ alert: 'Cluster is Updated !' })
    }
 })
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  ClusterUrl.findByIdAndRemove(id).exec();
  res.render('index',{alert: 'Cluster is deleted !'});
});

module.exports = router;
