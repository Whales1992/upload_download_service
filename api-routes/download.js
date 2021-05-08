var express = require('express');
var router = express.Router();

const download = router.get('/download/get/', function (req, res) {
  console.log("DDD");
  res.send('demoDebug.apk');
});
  
module.exports = {download};