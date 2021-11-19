var express = require('express');
var router = express.Router();
const axios = require('axios');
const registry = require('./registry.json');

// router.all('/:apiName', (req, res) => {
//   console.log("api gateway router");
//   console.log(req.params.serviceName);
//   // console.log(req.params.path);
//   res.send("hello world")
// });

router.all('/:serviceName/:path', (req, res) => {
  console.log("router.all");
  console.log(req.params.serviceName);
  console.log(req.params.path);
  if (registry.services[req.params.serviceName]) {
    console.log("url"+ registry.services[req.params.serviceName].url + req.params.path);
    const options = {
      method: req.method,
      headers: req.headers,
      data: req.body,
      url: registry.services[req.params.serviceName].url + req.params.path,
    };

    try {
      axios(options).then((response) => {
        res.status(200).send(response.data)
      }).catch(err => {
        console.log("err");
        console.log(err);
        res.status(200).send(err)
      });
    }
    catch (err) {
      console.error("GG", err);
    }
  } else {
    res.send("Service Doesn't exist");
  }
});

module.exports = router;