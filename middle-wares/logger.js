module.exports.logger = function (req, res, next){
  console.log('LOGGED');
  //Todo(write log to file for later examining)
  next();
}