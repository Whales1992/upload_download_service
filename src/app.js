var express = require('express');
var app = express();
var {logger, authentication} = require('../middle-wares/index');
var {download} = require('../api-routes/download');

app.use(authentication);
app.use('/api/download/', download);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
