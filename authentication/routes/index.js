var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Authentication Service' });
// });

router.get('/login', (req, res) => {
  res.status(200).send('response from Get Method')
});

router.post('/login',userController.login);
router.post('/signup',userController.signup);

// router.post('/signup', (req, res) => {
//   // console.log("request1",req);
//   res.status(200).send('response from Post Method')
// });

module.exports = router;
