var express = require('express');
var Firebase = require('firebase');
var dataRef = new Firebase('https://blood.firebaseio.com/');



var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    //var d = {
    //    name: "raju",
    //    id: "12-20251-1"
    //}


    dataRef.child("user").on("value", function (snapshot) {
        var f = snapshot.val();  // Alerts "San Francisco"
        res.json(f);
    });


});

module.exports = router;
