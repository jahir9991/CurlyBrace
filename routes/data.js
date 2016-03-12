var express = require('express');
var Firebase = require('firebase');
var dataRef = new Firebase('https://blood.firebaseio.com/');
var mongoose = require('mongoose');
    mongoose.connect('mongodb://jahir9991:hambuHAMBU@ds011429.mlab.com:11429/curlybrace');
var Cat = mongoose.model('Cat', {name: String});


var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {




     //
     //var kitty = new Cat({name: 'Zildjian'});
     //
     //
     //kitty.save(function (err) {
     //    if (err) {
     //        console.log(err);
     //    } else {
     //        console.log('meow');
     //       // res.render('index', {title: kitty});
     //
     //
     //    }
     //});

    Cat.findById("56e450c284503f9c3b2b4879", function (err, doc){
        res.json(doc ) ;
    });




    dataRef.child("user").on("value", function (snapshot) {
        var f = snapshot.val();  // Alerts "San Francisco"
       // res.json(f);
    });


});

module.exports = router;
