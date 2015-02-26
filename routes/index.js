var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err, user){
        if(err){ return next(err); }

        res.json(user);
    });
});

router.param('user', function(req, res, next, id) {
    var query = User.findById(id);

    query.exec(function (err, user){
        if (err) { return next(err); }
        if (!user) { return next(new Error('can\'t find user')); }

        req.user = user;
        return next();
    });
});

router.get('/users/:user', function(req, res) {
    res.json(req.user);
});

module.exports = router;