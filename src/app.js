import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import uploadRoute from './routes/uploadRoute.js';
var app = express();

dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/upload/', uploadRoute);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
