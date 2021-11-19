var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {

});

router.get('/:id', (req, res) => {
  res.status(200).send('response from Get by id Method')
});

router.get('/all', (req, res) => {
  res.status(200).send('response from Get all Method')
});

module.exports = router;
